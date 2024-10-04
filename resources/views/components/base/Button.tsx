import type { PageProps } from '#types/page'
import { cx } from 'class-variance-authority'

type ButtonColor = 'indigo' | 'yellow'

interface ButtonProps extends PageProps {
  color?: ButtonColor
  href?: string
  size?: 'small' | 'medium'
  type?: 'button' | 'submit'
  children: JSX.Element
}

function getButtonColor(color: ButtonColor) {
  switch (color) {
    case 'indigo':
      return 'bg-indigo-500 hover:bg-indigo-700 text-white'
    case 'yellow':
      return 'bg-yellow-400 hover:bg-yellow-500 text-white'
  }
}

function getButtonSize(size: 'small' | 'medium') {
  switch (size) {
    case 'small':
      return 'px-2 py-1'
    case 'medium':
      return 'px-4 py-2'
  }
}

export function Button({
  href,
  children,
  color = 'indigo',
  type = 'button',
  size = 'medium',
  ...extraProps
}: ButtonProps) {

  const classes = cx([
    'disabled:opacity-50 disabled:cursor-not-allowed rounded-md shadow-lg transition-colors',
    getButtonColor(color),
    getButtonSize(size),
  ])

  if (typeof href !== 'undefined') {
    return (
      <a
        class={classes}
        href={href}
        {...extraProps}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      class={classes}
      type={type}
      {...extraProps}
    >
      {children}
    </button>
  )
}
// .button {
//   &:not(.blank):hover {
//     --bg-color: var(--white);
//   }

//   &.blank {
//     border: 0 !important;
//     box-shadow: none !important;
//     padding: 0;
//   }
// }
