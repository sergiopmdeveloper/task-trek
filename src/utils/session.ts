import { NextResponse, type NextRequest } from 'next/server'

/**
 * Deletes the session from the API.
 * @param {NextRequest} request - The request.
 * @returns {NextResponse} The response.
 */
export function deleteSessionFromApi(request: NextRequest): NextResponse {
	let response = NextResponse.redirect(new URL(`/sign-in`, request.url))

	response.cookies.delete('userId')
	response.cookies.delete('token')

	return response
}

/**
 * Redirects to the user page.
 * @param {string} userId - The user ID.
 * @param {NextRequest} request - The request.
 * @returns {NextResponse} The response.
 */
export async function redirectToUserPage(
	userId: string,
	request: NextRequest,
): Promise<NextResponse> {
	return NextResponse.redirect(new URL(`/user/${userId}`, request.url))
}
