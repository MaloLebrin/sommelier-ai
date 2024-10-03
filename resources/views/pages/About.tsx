import i18nManager from "@adonisjs/i18n/services/main";
import type { PageProps } from "#types/index";
import { Layout } from "#views/components/layouts/Layout";

interface AboutProps extends PageProps {}

export function About({ lang = 'en' }: AboutProps) {
  const i18n = i18nManager.locale(lang);

  return (
    <Layout title={i18n.t('about.title')} lang={lang}>
      <div
        class="container max-w-5xl px-6 py-4 mx-auto space-y-12 bg-white bg-opacity-50 rounded-xl xl:py-8 lg:py-6 backdrop-blur md:px-8 text-zinc-700"
      >
        <section id="hero">
          <h2 class="mb-4 text-3xl font-semibold text-center">
            {i18n.t('about.title') }
          </h2>
          <p class="mb-8 text-lg">
            {i18n.t('about.subtitle') }
          </p>
        </section>

        <section id="howDoesItWork" class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div class="p-4 text-sm">
              <h3 class="mb-2 text-xl font-semibold">
                {i18n.t(`about.howDoesItWork.steps.${index + 1}.title`) }
              </h3>
              <p>
                {i18n.t(`about.howDoesItWork.steps.${index + 1}.description`) }
              </p>
            </div>
          ))}
        </section>

        <section id="feature" class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div class="p-4 text-sm">
              <h3 class="mb-2 text-xl font-semibold">
                {i18n.t(`about.features.${index + 1}.title`) }
              </h3>
              <p>
                {i18n.t(`about.features.${index + 1}.description`) }
              </p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}
