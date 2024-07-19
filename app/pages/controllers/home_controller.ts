import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  render = async (ctx: HttpContext) => {
    console.log(ctx, '<==== ctx')
    const { inertia } = ctx
    return inertia.render('home', { version: 6 })
  }
}
