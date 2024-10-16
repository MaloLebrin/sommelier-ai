import type { PageProps } from "#types/index";
import { ChatBox } from "#views/components/chat/Box";
import { ChatForm } from "#views/components/chat/form/ChatForm";
import { Layout } from "#views/components/layouts/Layout";

interface HomeProps extends PageProps {
  messages?: any[]
}

export function Home({ lang = 'en', messages = [] }: HomeProps) {
  return (
    <Layout title="🍇 Sommelier AI" lang={lang}>
      <div class="container mx-auto flex flex-col items-center px-2">
        <ChatBox messageList={messages} lang={lang} />
        <ChatForm lang={lang} />
      </div>
    </Layout>
  )
}
