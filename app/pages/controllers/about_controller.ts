import type { HttpContext } from '@adonisjs/core/http'

export default class AboutController {
  async render({ view }: HttpContext) {
    return view.render('pages/About')
  }
}
