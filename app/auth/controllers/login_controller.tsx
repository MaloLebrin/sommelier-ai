import { AuthService } from "#auth/services/auth_service";
import { Lang } from "#types/lang";
import { Login } from "#views/pages/auth/Login";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";

@inject()
export default class LoginController {
  constructor(private authService: AuthService) {}

  render({ i18n }: HttpContext) {
    return <Login lang={i18n.locale as Lang}  />;
  }

  async handle({ auth, request, response, session, i18n }: HttpContext) {
    const { email, password } = request.all()

    const user = await this.authService.attempt(email, password)

    if (!user) {
      session.flash('error', i18n.t('login.form.errors.accountNotFound'))
      session.flashAll()

      return response.redirect().back()
    }

    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
