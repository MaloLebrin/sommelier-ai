import i18nManager from "@adonisjs/i18n/services/main";
import type { Lang } from "#types/lang";

interface FooterProps {
  lang?: Lang
}

export function Footer({ lang = 'en' }: FooterProps) {
  const { t } = i18nManager.locale(lang)

  return (<footer class="sr-only">
    <div class="container px-4 mx-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} AI Sommelier Assistant. All rights reserved.
      </p>
      <p class="mt-2">
        Enhancing your dining experience with AI-powered wine recommendations.
      </p>
    </div>
  </footer>)
}
