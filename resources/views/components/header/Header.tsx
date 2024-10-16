import i18nManager from "@adonisjs/i18n/services/main";
import type { Lang } from "#types/lang";
import { DonateLink } from "#views/components/donate/DonateLink";
import { HttpContext } from "@adonisjs/core/http";
import { csrfField, route } from "#start/view";
import { Button } from "#views/components/base/Button";

interface HeaderProps {
  lang?: Lang
}

export async function Header({ lang = 'en' }: HeaderProps) {
  const i18n = i18nManager.locale(lang);
  const { auth } = HttpContext.getOrFail()

  await auth.check()

  return (
    <header id="the-header" class="w-full px-2">
      <div class="flex items-center justify-between w-full px-4 py-2 bg-white bg-opacity-50 backdrop-blur rounded-xl">
        <div>
          <p class="font-medium">
            🍇 Sommelier AI <span class="text-xs font-light">1.0</span>
          </p>
        </div>
        <div class="hidden md:flex items-center gap-6">
          {auth.user ? (
            <div class="d-flex items-center">
              <form action={`${route('auth.logout')}?_method=DELETE`} method="post">
                {csrfField()}

                <Button size="small" type="submit" lang={lang}>
                  {i18n.t('auth.logout.submit')}
                </Button>
              </form>
            </div>
          ) : (
            <>
              <a
                href={route('auth.login')}
                up-target=".container"
                up-preload
                up-accept-location={route('pages.home')}
                up-on-accepted="up.render('#the-header', { response: event.response })"
              >
                {i18n.t('auth.form.submit')}
              </a>
              <a
                href={route('auth.register')}
                class="text-sm font-light hover:underline hover:cursor-pointer"
                up-target=".container"
                up-accept-location={route('pages.home')}
                up-preload
              >
                {i18n.t('auth.register.page.link')}
              </a>
            </>
          )}
          <div>
            <a
              class="text-sm font-light hover:underline hover:cursor-pointer"
              href="/about"
              up-target=".container"
              up-preload
            >
              {i18n.t('base.menu.about')}
            </a>
          </div>
          <div>
            <a
              class="text-sm font-light hover:underline hover:cursor-pointer"
              href="/"
              up-target=".container"
              up-preload
            >
              {i18n.t('base.menu.home')}
            </a>
          </div>
          <DonateLink lang={lang} />
        </div>
      </div>
    </header>

  )
}
