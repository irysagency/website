import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Matche tout sauf : API routes, fichiers statiques Next.js, fichiers avec extension (.ico, .png, .jpg, .mp4, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
