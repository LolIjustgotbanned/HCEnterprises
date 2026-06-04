import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const COOKIE_NAME = 'hc_admin_session'

// btoa works in both Edge and Node runtimes — no Node crypto needed
function makeToken(): string {
  const pw = process.env.ADMIN_PASSWORD ?? ''
  const secret = process.env.ADMIN_SESSION_SECRET ?? 'default'
  return btoa(`${pw}:${secret}`)
}

export function createSessionToken(): string {
  return makeToken()
}

export async function getSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return false
  return token === makeToken()
}

export function isValidRequestSession(request: NextRequest): boolean {
  const token = request.cookies.get(COOKIE_NAME)?.value
  if (!token) return false
  return token === makeToken()
}

export const SESSION_COOKIE = COOKIE_NAME
