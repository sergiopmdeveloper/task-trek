import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const userId = request.cookies.get('userId')?.value

	if (['/sign-up', '/sign-in'].includes(path)) {
		if (userId) {
			return NextResponse.redirect(new URL(`/user/${userId}`, request.url))
		}
	}

	if (path.startsWith('/user/')) {
		if (!userId) {
			return NextResponse.redirect(new URL(`/sign-in`, request.url))
		}

		const urlUserId = path.split('/')[2]

		if (userId !== urlUserId) {
			return NextResponse.redirect(new URL(`/user/${userId}`, request.url))
		}
	}
}
