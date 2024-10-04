import type { Lang } from "#types/lang";
import i18nManager from "@adonisjs/i18n/services/main";

interface LinkProps {
  link?: string;
  lang?: Lang
}

export function DonateLink({ link, lang = 'en' }: LinkProps) {
  const i18n = i18nManager.locale(lang);

  return (
    <a
      href={link || 'https://buy.stripe.com/fZebIRaQu5xUcH6bII'}
      target="_blank"
      rel="noopener"
      class="px-4 py-2 text-sm font-medium text-white capitalize transition duration-300 ease-in-out transform bg-indigo-600 border border-transparent rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 focus-visible:outline-indigo-600 focus:ring-purple-500"
    >
      {i18n.t('base.donate.button')}
    </a>)
}
