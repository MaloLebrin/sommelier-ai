import { Author } from "#views/components/chat/Author";
import { cx } from 'class-variance-authority'

interface MessageProps {
  text: string;
  author: number;
  isFirst?: boolean;
  isLast?: boolean;
}

export function Message({
  text,
  author,
  isFirst = false,
  isLast = false,
}: MessageProps) {
  const isAuthorUser = author === 1
  const isAuthorAI = author === 0

  return (
    <div
      class={cx([
        'flex flex-col w-full gap-3 mb-2',
        isAuthorAI ? 'justify-end items-start' : 'justify-start items-end',
        isLast ? 'pb-4' : '',
      ])}
    >
      {isAuthorAI && isFirst && <Author />}
      {isAuthorUser && isFirst && <div class="mt-4" />}

      <div
        class={cx([
          'flex items-center gap-5 w-auto sm:max-w-[60%] max-w-[85%] rounded-2xl px-4 py-2',
          isAuthorUser ? 'bg-white rounded-tl-sm' : 'bg-gray-50 rounded-br-sm',
        ])}
      >
        <p
          class={cx([
            'font-light',
            isAuthorUser ? 'text-zinc-700' : 'text-gray-800',
          ])}
        >
          {text || 'Hello, I am Sommelier AI.'}
        </p>
      </div>
    </div>
  )
}
