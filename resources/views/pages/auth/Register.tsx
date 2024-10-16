import { csrfField, route, space } from "#start/view";
import { PageProps } from "#types/page";
import { Button } from "#views/components/base/Button";
import { Form } from "#views/components/form/Form";
import { Layout } from "#views/components/layouts/Layout";
import { HttpContext } from "@adonisjs/core/http";
import i18nManager from "@adonisjs/i18n/services/main";

interface RegisterProps extends PageProps { }

export function Register({ lang = 'en' }: RegisterProps) {
  const { session } = HttpContext.getOrFail()
  const flashMessages = session.flashMessages
  const i18n = i18nManager.locale(lang)

  return (
    <Layout title={i18n.t('auth.page.title')} lang={lang}>
      <div class="container flex justify-center w-full mx-auto">
        <form
          class="no-scroll-bar relative h-full w-full sm:max-h-[550px] sm:max-w-[777px] bg-white bg-opacity-50 backdrop-blur rounded-3xl shadow-lg pt-4 px-6 pb-10 mt-14 overflow-y-hidden space-y-4"
          action={route('auth.register')}
          method="post"
          style={{
            ['--gap' as any]: space(3),
          }}
          up-main
          up-target="main"
        >
          {flashMessages.has('error') && (
            <p class="text-red-700">
              {i18n.t('auth.form.errors.registrationError')}
            </p>
          )}

          {csrfField()}

          <fieldset class="space-y-2">
            <Form.Label title={i18n.t('auth.form.firstname.label')} for="firstname" />
            <Form.Input name="firstname" autocomplete="firstname" required />
          </fieldset>

          <fieldset class="space-y-2">
            <Form.Label title={i18n.t('auth.form.lastname.label')} for="lastname" />
            <Form.Input name="lastname" autocomplete="lastname" required />
          </fieldset>

          <fieldset class="space-y-2">
            <Form.Label title={i18n.t('auth.form.email.label')} for="email" />
            <Form.Input name="email" autocomplete="email" required />
          </fieldset>

          <fieldset class="space-y-2">
            <Form.Label title={i18n.t('auth.form.password.label')} for="password" />
            <Form.Input name="password" type="password" autocomplete="current-password" required />
          </fieldset>

          <Button
            type="submit"
            lang={lang}
          >
            {i18n.t('auth.register.page.link')}
          </Button>
        </form>
      </div>
    </Layout>
  )
}
