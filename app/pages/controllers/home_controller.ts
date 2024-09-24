import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  render = async ({ inertia, session }: HttpContext) => {
    console.log(session.config, '<==== session')
    return inertia.render('home')
  }
}
