import i18nManager from "@adonisjs/i18n/services/main";
import { Lang } from "#types/lang";
import { LoadingMessage } from "#views/components/chat/messages/Loading";
import { Message } from "#views/components/chat/messages/Message";
import { DonateMessage } from "#views/components/donate/Message";

interface ChatBoxProps {
  lang?: Lang;
  messageList: {
    content: string;
    author: number
  }[]
}

export function ChatBox({ messageList, lang ='en' }: ChatBoxProps) {
  const i18n = i18nManager.locale(lang);
  const isLoading = false;

  return (
    <section
      id="chatBox"
      class="no-scroll-bar relative h-full mx-4 min-h-[600px] w-full lg:min-h-[750px] sm:max-h-[750px] sm:max-w-[777px] bg-white bg-opacity-50 backdrop-blur rounded-3xl shadow-lg pt-4 px-4 md:px-6 overflow-y-hidden space-y-2"
    >
      {!messageList || messageList?.length === 0 ? (
        <Message
          text={i18n?.t('base.message.defaultTextAI')}
          isFirst
        />

      ) : (
        messageList.map((message, index) => (
          <Message
            text={message.content}
            isAuthorUser={Boolean(message.author)}
            isFirst={index === 0}
          />
        ))
      )}
              <Message
          text="lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod.  "
          isAuthorUser
        />
      {isLoading && <LoadingMessage  />}
      <DonateMessage lang={lang} />
    </section>
  );
}
