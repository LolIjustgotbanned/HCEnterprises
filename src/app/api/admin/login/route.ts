import { createSessionToken, SESSION_COOKIE } from '@/lib/auth'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const token = createSessionToken()
  const response = Response.json({ ok: true })
  response.headers.set(
    'Set-Cookie',
    `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 30}`
  )
  return response
}
