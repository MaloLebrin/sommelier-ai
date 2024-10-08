import { AuthService } from "#auth/services/auth_service";
import { Lang } from "#types/lang";
import { Login } from "#views/pages/auth/Login";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

@inject()
export default class LoginController {
  static validator = vine.compile(
    vine.object({
      email: vine.string().trim().email().maxLength(255),
      password: vine.string().minLength(5).maxLength(255),
    })
  )


  constructor(private authService: AuthService) { }

  render({ i18n }: HttpContext) {
    return <Login lang={i18n.locale as Lang} />;
  }

  async handle({ auth, request, response, session, i18n }: HttpContext) {
    const { email, password } = await request.validateUsing(LoginController.validator)

    const user = await this.authService.attempt(email, password)

    if (!user) {
      session.flash('error', i18n.t('auth.form.errors.accountNotFound'))
      session.flashAll()

      return response.redirect().back()
    }

    await auth.use('web').login(user)

    return response.redirect().toRoute('pages.home')
  }
}
