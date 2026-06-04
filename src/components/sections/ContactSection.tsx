'use client'

import { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import { SITE } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  revenue: string
  tier: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    revenue: '',
    tier: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.revenue) e.revenue = 'Please select your revenue range'
    if (!form.message.trim()) e.message = 'Tell us about your business'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      // fail gracefully
    } finally {
      setLoading(false)
    }
  }

  const field =
    'w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#D4AF6A]/50 transition-colors'

  return (
    <section id="contact" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimatedSection>
            <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Build Your
              <br />
              <span className="text-zinc-400">Growth Engine?</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Fill out the form and a member of our team will reach out within 1 business day to
              schedule your complimentary growth audit.
            </p>

            <div className="space-y-5">
              {[
                { label: 'Response within 1 business day' },
                { label: 'Complimentary 30-min growth audit' },
                { label: 'No obligation to proceed' },
                { label: 'Custom roadmap delivered at kickoff' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF6A] shrink-0" />
                  <span className="text-zinc-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-[#2A2A2A]">
              <p className="text-zinc-500 text-sm mb-1">Prefer email?</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#D4AF6A] hover:underline font-medium"
              >
                {SITE.email}
              </a>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-[#D4AF6A] mb-6" />
                  <h3 className="text-white text-2xl font-semibold mb-3">Message Received</h3>
                  <p className="text-zinc-400">
                    We&apos;ll be in touch within 1 business day to schedule your growth audit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className="block text-zinc-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={field}
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-zinc-300 text-sm font-medium mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={field}
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-zinc-300 text-sm font-medium mb-2">
                      Annual Revenue
                    </label>
                    <select
                      value={form.revenue}
                      onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                      className={`${field} appearance-none`}
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      <option value="under-250k">Under $250K</option>
                      <option value="250k-1m">$250K – $1M</option>
                      <option value="1m-5m">$1M – $5M</option>
                      <option value="5m-50m">$5M – $50M</option>
                      <option value="50m-plus">$50M+</option>
                    </select>
                    {errors.revenue && (
                      <p className="mt-1 text-red-400 text-xs">{errors.revenue}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-zinc-300 text-sm font-medium mb-2">
                      Tier Interest <span className="text-zinc-600">(optional)</span>
                    </label>
                    <select
                      value={form.tier}
                      onChange={(e) => setForm({ ...form, tier: e.target.value })}
                      className={`${field} appearance-none`}
                    >
                      <option value="">Not sure yet</option>
                      <option value="catalyst">Catalyst ($3,500/mo)</option>
                      <option value="ascent">Ascent ($8,500/mo)</option>
                      <option value="summit">Summit ($25,000/mo)</option>
                      <option value="private">Private Client (Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 text-sm font-medium mb-2">
                      Tell us about your business
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What are your primary growth challenges?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${field} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-red-400 text-xs">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
