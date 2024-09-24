import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  render = async ({ inertia }: HttpContext) => {
    return inertia.render('home')
  }
}
