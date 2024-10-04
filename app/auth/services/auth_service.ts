import hash from '@adonisjs/core/services/hash'
import User from '#auth/models/user'

export class AuthService {
  /**
   * Attempts to verify the user credentials.
   */
  async attempt(email: string, password: string) {
    // const user = await User.findForAuth(uids, value)
    const user = await User.findBy('email', email)

    if (!user) {
      //? This is a security measure to prevent timing attacks.
      await hash.use('scrypt').make('password')

      return false
    }

    const hasValidPassword = await hash.verify(user.password, password)

    if (!hasValidPassword) {
      return false
    }

    return user
  }
}
