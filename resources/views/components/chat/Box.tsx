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
    <div
      id="chatBox"
      class="no-scroll-bar relative h-full w-full sm:max-h-[750px] sm:max-w-[777px] bg-white bg-opacity-50 backdrop-blur rounded-3xl shadow-lg pt-4 px-6 pb-10 mt-14 overflow-y-hidden"
    >
      {!messageList || messageList?.length === 0 ? (
        <Message
          text={i18n?.t('base.message.defaultTextAI')}
          author={0}
          isFirst={false}
        />
      ) : (
        messageList.map((message, index) => (
          <Message
            text={message.content}
            author={message.author}
            isFirst={index === 0}
          />
        ))
      )}
      {isLoading && <LoadingMessage  />}
      <DonateMessage lang={lang} />
    </div>
  );
}
