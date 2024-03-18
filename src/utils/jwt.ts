import { SignJWT, jwtVerify } from 'jose'

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
		.setExpirationTime('1d')
		.sign(getJwtSecret())

	return token
}

/**
 * Verifies the validity of a JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {Promise<boolean>} A promise of the verification result.
 */
export async function verifyJwtToken(token: string): Promise<boolean> {
	try {
		await jwtVerify(token, getJwtSecret())
	} catch (error) {
		return false
	}

	return true
}
