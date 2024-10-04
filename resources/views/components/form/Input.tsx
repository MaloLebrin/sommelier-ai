import { HttpContext } from '@adonisjs/core/http'

interface InputProps {
  name: string
  type?: string
  autocomplete?: string
  required?: boolean
}

export function Input({
  name,
  type = 'text',
  required = false,
  autocomplete = 'off',
  ...extraProps
}: InputProps) {
  const { session } = HttpContext.getOrFail()
  const flashMessages = session.flashMessages

  const oldValue = flashMessages.get(name) || ''
  const error = flashMessages.get(`errors.${name}`) || ''

  return (
    <>
      <input
        class="w-full px-1 py-1 bg-white rounded-md border shadow-lg placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50"
        id={name}
        name={name}
        type={type}
        value={oldValue}
        required={required}
        autocomplete={autocomplete}
        {...extraProps}
      />

      {error && <span class="text-red-700">{error}</span>}
    </>
  )
}
