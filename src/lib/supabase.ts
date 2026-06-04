import { createClient } from '@supabase/supabase-js'

// Lazy getter — only creates client during request handling, not at import time
export function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  )
}

export type Lead = {
  id: string
  name: string
  email: string
  revenue: string
  tier: string
  message: string
  status: 'new' | 'contacted' | 'qualified' | 'won' | 'lost'
  notes: string
  created_at: string
}
