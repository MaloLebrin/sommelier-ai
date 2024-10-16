import i18nManager from "@adonisjs/i18n/services/main";
import type {Lang} from "#types/lang";
import { DonateLink } from "#views/components/donate/DonateLink";

interface MessageProps {
  lang?: Lang
}

export function DonateMessage({ lang = 'en' }: MessageProps) {
  const i18n = i18nManager.locale(lang);

  return (
    <div
      class="flex gap-3 mb-2"
    >
      <div
        class="flex items-center w-auto gap-5 px-4 py-2 bg-white rounded-tl-sm rounded-2xl text-sm"
      >
        <p class="text-zinc-700">
          {i18n.t('base.donate.supportUS')}
        </p>
        <DonateLink lang={lang} />
      </div>
    </div>
  )
}
