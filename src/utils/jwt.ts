import { SignJWT } from 'jose'

/**
 * Retrieves the JWT secret key from the environment variables.
 * @returns {Uint8Array} The JWT secret key.
 * @throws {Error} If the JWT secret key is not set.
 */
export function getJwtSecret(): Uint8Array {
	const jwt_secret = process.env.JWT_SECRET

	if (!jwt_secret) {
		throw new Error('JWT Secret key is not set')
	}

	return new TextEncoder().encode(process.env.JWT_SECRET)
}

/**
 * Generates JWT.
 * @returns {Promise<string>} A promise of the JWT.
 */
export async function generateJwt(): Promise<string> {
	const token = await new SignJWT()
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime(Date.now() + 1000 * 60 * 60 * 24)
		.sign(getJwtSecret())

	return token
}
