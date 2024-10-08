import { PageProps } from "#types/page";
import { LoginForm } from "#views/components/auth/LoginForm";
import { Layout } from "#views/components/layouts/Layout";
import i18nManager from "@adonisjs/i18n/services/main";

interface LoginProps extends PageProps {}

export function Login({ lang = 'en' }: LoginProps) {
  const i18n = i18nManager.locale(lang)

  return (
    <Layout title={i18n.t('auth.page.title')} lang={lang}>
      <div class="container flex justify-center w-full mx-auto">
        <LoginForm lang={lang} />
      </div>
    </Layout>
  )
}
