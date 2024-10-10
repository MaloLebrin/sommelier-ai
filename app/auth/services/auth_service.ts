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

  async register({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) {
    const user = new User()

    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.password = await hash.use('scrypt').make(password)

    await user.save()

    return user
  }
}
