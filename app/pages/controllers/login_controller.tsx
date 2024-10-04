import type { HttpContext } from '@adonisjs/core/http'
import { Login } from '#views/pages/auth/Login'
import { Lang } from '#types/lang'

export default class LoginController {
  async render({ i18n }: HttpContext) {
    return <Login lang={i18n.locale as Lang} />
  }
}
