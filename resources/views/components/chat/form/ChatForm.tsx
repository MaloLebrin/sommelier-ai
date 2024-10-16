import type { Lang } from "#types/lang"
import { SendButton } from "#views/components/chat/SendButton"
import i18nManager from "@adonisjs/i18n/services/main"

interface ChatFormProps {
  placeholder?: string
  lang?: Lang
}

export function ChatForm({ placeholder, lang = 'en' }: ChatFormProps) {
  const i18n = i18nManager.locale(lang);

  return (
    <form method="post" class="py-2 relative w-full sm:max-w-[777px] h-full max-h-250px">
      <fieldset>
        <label for="message" up-validate>
          <span class="sr-only">{i18n.t('form.sentenceLabel')}</span>
        </label>
        {/* {csrfField()} */}
        <textarea
          id="message"
          name="message"
          required
          rows="1"
          spellcheck="true"
          class="w-full h-full px-6 py-4 bg-white border shadow-lg resize-none pr-14 bg-opacity-80 backdrop-blur rounded-3xl focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-80"
          placeholder={placeholder || i18n.t('form.placeholder.textarea')}
        ></textarea>
      </fieldset>

      <SendButton lang={lang} />
    </form>
  )
}
