import { AuthService } from "#auth/services/auth_service";
import { inject } from "@adonisjs/core";
import vine from "@vinejs/vine";
import type { HttpContext } from "@adonisjs/core/http";
import { Register } from "#views/pages/auth/Register";
import type { Lang } from "#types/lang";

@inject()
export default class RegisterController {
  static validator = vine.compile(
    vine.object({
      firstName: vine.string().trim().minLength(2).maxLength(255),
      lastName: vine.string().trim().minLength(2).maxLength(255),
      email: vine.string().trim().email().maxLength(255),
      password: vine.string().minLength(5).maxLength(255),
    })
  )

  constructor(private authService: AuthService) {}

  render() {}

  async handle({ auth, request, response, session, i18n }: HttpContext) {
    const { firstName, lastName, email, password} = await request.validateUsing(RegisterController.validator)

    const user = await this.authService.register({
      firstName,
      lastName,
      email,
      password,
    })

    if (!user) {
      session.flash('error', i18n.t('auth.form.errors.registrationError'))
      session.flashAll()

      return response.redirect().back()
    }

    await auth.use('web').login(user)

    return response.redirect().toRoute('pages.home')
  }
}
