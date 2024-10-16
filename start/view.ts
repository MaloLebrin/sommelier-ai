import i18nManager from '@adonisjs/i18n/services/main'
import vite from '@adonisjs/vite/services/main'
import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import { createElement, Fragment } from '@kitajs/html'

const dateFormatter = i18nManager.locale('fr')

export function space(num: number) {
  return `calc(${num} * var(--space))`
}

export function currentYear() {
  return new Date().getFullYear()
}

export function formatDate(value: Date) {
  return dateFormatter.formatDate(value, {
    dateStyle: 'medium',
  })
}

export function route(...args: Parameters<typeof router.makeUrl>) {
  return router.makeUrl(...args)
}

export function csrfField() {
  const { request } = HttpContext.getOrFail()

  return createElement('input', { type: 'hidden', value: request.csrfToken, name: '_csrf' })
}

function Image(props: JSX.HtmlImageTag) {
  if (!props.src) {
    throw new Error('Missing src prop for <Image />')
  }

  const { src, alt, class: className } = props

  const url = vite.assetPath(src)
  return createElement('img', { src: url, alt: alt || '', class: className })
}

async function Entrypoint(props: { entrypoints: string[] }) {
  const assets = await vite.generateEntryPointsTags(props.entrypoints)

  const elements = assets.map((asset) => {
    if (asset.tag === 'script') {
      return createElement('script', {
        ...asset.attributes,
      })
    }

    return createElement('link', {
      ...asset.attributes,
    })
  })

  return createElement(Fragment, {}, elements)
}

export const Vite = {
  Entrypoint,
  Image,
}
