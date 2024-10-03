import type { PageProps } from "#types/index";
import { ChatBox } from "#views/components/chat/Box";
import { ChatForm } from "#views/components/chat/form/Form";
import { Layout } from "#views/components/layouts/Layout";

interface HomeProps extends PageProps {
  messages?: any[]
}

export function Home({ lang = 'en', messages = [] }: HomeProps) {
  return (
    <Layout title="🍇 Sommelier AI" lang={lang}>
      <div class="container flex flex-col items-center h-full mx-auto">
        <ChatBox messageList={messages} lang={lang} />
        <ChatForm lang={lang} />
      </div>
    </Layout>
  )
}
