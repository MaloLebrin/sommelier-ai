import { cx } from 'class-variance-authority'

interface MessageProps {
  text: string;
  isAuthorUser?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export function Message({
  text,
  isAuthorUser = false,
  isFirst = false,
  isLast = false,
}: MessageProps) {
  const isAuthorAI = !isAuthorUser

  return (
    <div
      class={cx([
        'flex space-x-1 md:space-x-2 items-center',
        isAuthorAI ? 'justify-start' : 'justify-end',
        isLast ? 'pb-4' : '',
      ])}
    >
      {isAuthorAI && <img
        src="https://images.ctfassets.net/spoqsaf9291f/5WH9VvZP0hYGfM02F81mCY/abc7df90849c0f32e5696313e2f5c055/david_webinar_portrait.png"
        alt="system picture"
        class="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
      />}
      <div
        class={cx([
          'flex items-center w-auto sm:max-w-[60%] max-w-[70%] rounded-2xl px-6 py-2',
          isAuthorUser ? 'bg-indigo-500 rounded-tl-sm' : 'bg-gray-50 rounded-br-sm',
          isAuthorUser && isFirst && 'mt-4',
        ])}
      >
        <p
          class={cx([
            'font-light flex-1 text-sm',
            isAuthorUser ? 'text-gray-50' : 'text-gray-800',
          ])}
        >
          {text || 'Hello, I am Sommelier AI.'}
        </p>
      </div>
    </div>
  )
}
