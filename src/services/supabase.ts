import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://uxovtkhtybnjdatnxnsp.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4b3Z0a2h0eWJuamRhdG54bnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTcxNTMsImV4cCI6MjAyMTQ5MzE1M30.OgrFoOQB87SvNx6NQ6K8-RRS_iGfbS-NH5Gm9mnrvR0'

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase key or Supabase url is not defined')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
