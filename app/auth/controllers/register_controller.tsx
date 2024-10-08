import { AuthService } from "#auth/services/auth_service";
import { inject } from "@adonisjs/core";
import vine from "@vinejs/vine";
import type { HttpContext } from "@adonisjs/core/http";

@inject()
export default class RegisterController {
  static validator = vine.compile(
    vine.object({
      firstName: vine.string().trim().minLength(2).maxLength(255),
      lastName: vine.string().trim().minLength(2).maxLength(255),
      email: vine.string().trim().email().maxLength(255),
      password: vine.string().minLength(8).maxLength(255),
    })
  )

  constructor(private authService: AuthService) {}

  render() {}

  async handle({ auth, request, response }: HttpContext) {
    const { firstName, lastName, email, password} = await request.validateUsing(RegisterController.validator)

    const user = await this.authService.register({
      firstName,
      lastName,
      email,
      password,
    })

    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
