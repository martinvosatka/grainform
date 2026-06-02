import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (host === 'grainform.vercel.app') {
    const url = new URL(request.url)
    url.host = 'grainform.cz'
    url.protocol = 'https:'
    return NextResponse.redirect(url, { status: 301 })
  }
}

export const config = {
  matcher: '/:path*',
}
