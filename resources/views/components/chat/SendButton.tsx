import type { Lang } from "#types/lang"
import i18nManager from "@adonisjs/i18n/services/main";

interface SendButtonProps {
  type?: string
  isLoading?: boolean
  disabled?: boolean
  title?: string
  lang?: Lang
}

export function SendButton({
  type,
  isLoading,
  disabled,
  title,
  lang = 'en'
}: SendButtonProps) {
  const i18n = i18nManager.locale(lang);

  return (
    <button
      type={type || 'submit'}
      disabled={isLoading || disabled || false}
      class="absolute top-[19px] right-5 group hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      title={title || i18n.t('form.validation.send')}
    >
      <span class="capitalize">{i18n.t('form.validation.send')}</span>
    </button>

  )
}
