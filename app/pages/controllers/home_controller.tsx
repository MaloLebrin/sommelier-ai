import type { HttpContext } from '@adonisjs/core/http'
import { Home } from '#views/pages/Home'
import { Lang } from '#types/lang'

export default class HomeController {
  async render({ i18n }: HttpContext) {
    return <Home lang={i18n.locale as Lang} />
  }
}
