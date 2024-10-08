import { csrfField, route, space } from "#start/view"
import { Lang } from "#types/lang"
import { Button } from "#views/components/base/Button"
import { Form } from "#views/components/form/Form"
import { HttpContext } from "@adonisjs/core/http"
import i18nManager from "@adonisjs/i18n/services/main"

export function LoginForm({ lang = 'en' }: { lang: Lang }) {
  const { session } = HttpContext.getOrFail()
  const flashMessages = session.flashMessages
  const i18n = i18nManager.locale(lang)

  return (
      <form
        class="no-scroll-bar relative h-full w-full sm:max-h-[350px] sm:max-w-[777px] bg-white bg-opacity-50 backdrop-blur rounded-3xl shadow-lg pt-4 px-6 pb-10 mt-14 overflow-y-hidden space-y-2"
        action={route('auth.login')}
        method="post"
        style={{
          ['--gap' as any]: space(3),
        }}
        up-main
        up-target="main"
      >
        {flashMessages.has('error') && (
          <p class="text-red-700">
            {i18n.t('login.form.errors.accountNotFound')}
          </p>
        )}

        {csrfField()}

        <Form.Group>
          <Form.Label title="Email" for="email" />
          <Form.Input name="email" autocomplete="email" required />
        </Form.Group>

        <Form.Group>
          <Form.Label title="Mot de passe" for="password" />
          <Form.Input name="password" type="password" autocomplete="current-password" required />
        </Form.Group>

        <div>
          <Form.Checkbox name={'remember_me'}>
            <span>{i18n.t('login.form.rememberMe')}</span>
          </Form.Checkbox>
        </div>

        <Button
          type="submit"
          lang={lang}
        >
          {i18n.t('login.form.submit')}
        </Button>
      </form>
  )
}
