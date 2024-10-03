import { Lang } from '#types/index'
import { About } from '#views/pages/About'
import type { HttpContext } from '@adonisjs/core/http'

export default class AboutController {
  async render({ i18n }: HttpContext) {
    return <About lang={i18n.locale as Lang} />
  }
}
