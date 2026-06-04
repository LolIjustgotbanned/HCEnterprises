'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { Lead } from '@/lib/supabase'

const STATUS_OPTIONS = ['new', 'contacted', 'qualified', 'won', 'lost'] as const

const STATUS_STYLES: Record<string, string> = {
  new: 'bg-[#D4AF6A]/15 text-[#D4AF6A] border-[#D4AF6A]/30',
  contacted: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  qualified: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  won: 'bg-green-500/15 text-green-400 border-green-500/30',
  lost: 'bg-zinc-700/30 text-zinc-500 border-zinc-600/30',
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[status] ?? STATUS_STYLES.new}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

export default function CRMDashboard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const router = useRouter()

  const refresh = useCallback(async () => {
    const res = await fetch('/api/admin/leads')
    if (res.ok) setLeads(await res.json())
  }, [])

  useEffect(() => {
    const id = setInterval(refresh, 60_000)
    return () => clearInterval(id)
  }, [refresh])

  // Sync notes state from leads
  useEffect(() => {
    const n: Record<string, string> = {}
    leads.forEach(l => { n[l.id] = l.notes ?? '' })
    setNotes(n)
  }, [leads])

  const updateLead = async (id: string, patch: Partial<Lead>) => {
    setSaving(id)
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    })
    if (res.ok) {
      const updated = await res.json()
      setLeads(ls => ls.map(l => l.id === id ? updated : l))
    }
    setSaving(null)
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter)
  const counts = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    won: leads.filter(l => l.status === 'won').length,
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-[#2A2A2A] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#D4AF6A] text-xl tracking-wider">HC</span>
          <span className="text-white text-xl">Enterprises</span>
          <span className="text-zinc-600 text-sm ml-2">/ CRM</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={refresh} className="text-zinc-500 hover:text-white text-sm transition-colors cursor-pointer">
            Refresh
          </button>
          <button onClick={handleLogout} className="text-zinc-500 hover:text-white text-sm transition-colors cursor-pointer">
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Leads', value: counts.total },
            { label: 'New', value: counts.new, gold: true },
            { label: 'Contacted', value: counts.contacted },
            { label: 'Won', value: counts.won, green: true },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111] border border-[#2A2A2A] rounded-xl p-5">
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.gold ? 'text-[#D4AF6A]' : stat.green ? 'text-green-400' : 'text-white'}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['all', ...STATUS_OPTIONS].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                filter === s
                  ? 'bg-[#D4AF6A] text-black border-[#D4AF6A]'
                  : 'text-zinc-400 border-[#2A2A2A] hover:border-zinc-500 hover:text-white'
              }`}
            >
              {s === 'all' ? `All (${leads.length})` : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Leads table */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-zinc-600">
            <p className="text-lg mb-2">No leads yet</p>
            <p className="text-sm">Leads submitted through the contact form will appear here.</p>
          </div>
        ) : (
          <div className="border border-[#2A2A2A] rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_120px] gap-4 px-5 py-3 bg-[#111] border-b border-[#2A2A2A] text-xs font-medium text-zinc-500 uppercase tracking-widest hidden md:grid">
              <span>Name</span>
              <span>Email</span>
              <span>Revenue / Tier</span>
              <span>Date</span>
              <span>Status</span>
            </div>

            {filtered.map(lead => (
              <div key={lead.id}>
                {/* Row */}
                <div
                  className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_120px] gap-2 md:gap-4 px-5 py-4 border-b border-[#2A2A2A] hover:bg-[#0D0D0D] cursor-pointer transition-colors"
                  onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                >
                  <div className="font-medium text-white">{lead.name}</div>
                  <div className="text-zinc-400 text-sm break-all">{lead.email}</div>
                  <div className="text-zinc-500 text-sm">
                    <span>{lead.revenue || '—'}</span>
                    {lead.tier && <span className="ml-1 text-zinc-600">· {lead.tier}</span>}
                  </div>
                  <div className="text-zinc-500 text-sm">{formatDate(lead.created_at)}</div>
                  <div onClick={e => e.stopPropagation()}>
                    <StatusBadge status={lead.status} />
                  </div>
                </div>

                {/* Expanded detail */}
                {expanded === lead.id && (
                  <div className="bg-[#0A0A0A] border-b border-[#2A2A2A] px-5 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left: message */}
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">Message</p>
                        <p className="text-zinc-300 leading-relaxed text-sm bg-[#111] border border-[#2A2A2A] rounded-xl p-4">
                          {lead.message}
                        </p>
                        <div className="mt-4 flex gap-3 flex-wrap">
                          <a href={`mailto:${lead.email}`} className="text-xs bg-[#D4AF6A] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#E8D5A3] transition-colors">
                            Email {lead.name.split(' ')[0]}
                          </a>
                          <button
                            onClick={() => updateLead(lead.id, { status: 'won' })}
                            className="text-xs bg-green-500/15 text-green-400 border border-green-500/30 font-medium px-4 py-2 rounded-lg hover:bg-green-500/25 transition-colors cursor-pointer"
                          >
                            Mark as Won
                          </button>
                          <button
                            onClick={() => updateLead(lead.id, { status: 'lost' })}
                            className="text-xs bg-zinc-700/20 text-zinc-500 border border-zinc-600/30 font-medium px-4 py-2 rounded-lg hover:bg-zinc-700/30 transition-colors cursor-pointer"
                          >
                            Mark as Lost
                          </button>
                        </div>
                      </div>

                      {/* Right: status + notes */}
                      <div className="space-y-5">
                        <div>
                          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Status</p>
                          <select
                            value={lead.status}
                            onChange={e => updateLead(lead.id, { status: e.target.value as Lead['status'] })}
                            disabled={saving === lead.id}
                            className="w-full bg-[#111] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#D4AF6A]/50 cursor-pointer"
                          >
                            {STATUS_OPTIONS.map(s => (
                              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Notes</p>
                          <textarea
                            rows={4}
                            value={notes[lead.id] ?? ''}
                            onChange={e => setNotes(n => ({ ...n, [lead.id]: e.target.value }))}
                            onBlur={() => updateLead(lead.id, { notes: notes[lead.id] ?? '' })}
                            placeholder="Add notes about this lead…"
                            className="w-full bg-[#111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm resize-none focus:outline-none focus:border-[#D4AF6A]/50 placeholder-zinc-700 transition-colors"
                          />
                          <p className="text-zinc-700 text-xs mt-1">Notes save automatically when you click away.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
