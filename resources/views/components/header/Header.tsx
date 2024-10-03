import i18nManager from "@adonisjs/i18n/services/main";
import type { Lang } from "#types/lang";
import { DonateLink } from "#views/components/donate/DonateLink";

interface HeaderProps {
  lang?: Lang
}

export function Header({ lang = 'en' }: HeaderProps) {
  const i18n = i18nManager.locale(lang);

  return (
    <header class="fixed w-full px-2 top-2">
      <div class="flex items-center justify-between w-full px-4 py-2 bg-white bg-opacity-50 backdrop-blur rounded-xl">
        <div>
          <p class="font-medium">
            🍇 Sommelier AI <span class="text-xs font-light">1.0</span>
          </p>
        </div>
        <div class="flex items-center gap-6">
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
              {i18n.t('base.menu.home') }
            </a>
          </div>
          <DonateLink lang={lang} />
        </div>
      </div>
    </header>

  )
}
