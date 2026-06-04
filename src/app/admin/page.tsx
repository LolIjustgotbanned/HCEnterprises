import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { getSupabase } from '@/lib/supabase'
import CRMDashboard from '@/components/admin/CRMDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const authenticated = await getSession()
  if (!authenticated) redirect('/admin/login')

  const { data: leads, error } = await getSupabase()
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
        Failed to load leads: {error.message}
      </div>
    )
  }

  return <CRMDashboard initialLeads={leads ?? []} />
}
