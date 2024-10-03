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

  return (
    <div
      class={cx([
        'flex flex-col w-full gap-3 mb-2',
        !author ? 'justify-end items-start' : 'justify-start items-end',
        isLast ? 'pb-4' : '',
      ])}
    >
      {author === 0 && isFirst && <Author />}
      {author === 1 && isFirst && <div class="mt-4" />}

      <div
        class="flex items-center gap-5 w-auto sm:max-w-[60%] max-w-[85%] rounded-2xl px-4 py-2 {{ !author ? 'bg-white rounded-tl-sm' : 'bg-blue-600 rounded-br-sm' }}"
      >
        <p
          class="font-light {{ !author ? 'text-gray-800' : 'text-white' }}"
        >
          {text || 'Hello, I am Sommelier AI.' }
        </p>
      </div>
    </div>
  )
}
