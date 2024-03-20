import { verifyJwtToken } from '@/utils/jwt'
import { deleteSessionFromApi, redirectToUserPage } from '@/utils/session'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const userId = request.cookies.get('userId')?.value
	const token = request.cookies.get('token')?.value

	if (['/sign-up', '/sign-in'].includes(path)) {
		if (userId) {
			return await redirectToUserPage(userId, request)
		}
	}

	if (path.startsWith('/user/')) {
		if (!userId || !token) {
			return deleteSessionFromApi(request)
		}

		if (!(await verifyJwtToken(token))) {
			return deleteSessionFromApi(request)
		}

		if (request.nextUrl.searchParams.get('recentToken')) {
			request.nextUrl.searchParams.delete('recentToken')
			return NextResponse.redirect(new URL(`/user/${userId}`, request.url))
		}

		const urlUserId = path.split('/')[2]

		if (userId !== urlUserId) {
			return await redirectToUserPage(userId, request)
		}
	}
}
