import { Vite } from '#start/view'
import type { Lang } from '#types/lang'
import { Footer } from '#views/components/footer/Footer'
import { Header } from '#views/components/header/Header'
import i18nManager from '@adonisjs/i18n/services/main'
import type { Children } from '@kitajs/html'

interface LayoutProps {
  children: Children
  title?: string
  description?: string
  lang?: Lang
}

export function Layout({
  children,
  title = 'Sommelier AI',
  lang = 'en',
  description
 }: LayoutProps) {
  // TODO add font
  // FIXME assets
  const i18n = i18nManager.locale(lang)

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={description ||i18n.t('base.catchPhrase')} />
          <link rel="preconnect" href="https://fonts.bunny.net" />
          <script src="https://cdn.tailwindcss.com"></script>
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="{{ asset('resources/images/apple-touch-icon.png') }}"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="{{ asset('resources/images/favicon-32x32.png') }}"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="{{ asset('resources/images/favicon-16x16.png') }}"
          /> */}
          <link
            href="https://fonts.bunny.net/css?family=instrument-sans:400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          <title>{title}</title>

          <Vite.Entrypoint entrypoints={['resources/css/app.scss', 'resources/js/app.js']} />
        </head>
        <body>
          <body class="h-[100svh]">
            <Header lang={lang} />

            <main
              class="h-full pt-20 bg-center bg-no-repeat bg-cover"
              style="
    background-image: url('https://i.ebayimg.com/images/g/bm4AAOSwW89j1f-k/s-l1600.jpg')"
            >
              {children}
            </main>

            <Footer lang={lang} />
          </body>
        </body>
      </html>
    </>
  )
}
