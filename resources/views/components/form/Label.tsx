interface LabelProps {
  title?: string
  for?: string
  children?: JSX.Element
  required?: boolean
}

export function Label({ title, children, for: htmlFor, required = false } : LabelProps) {
  return (
    <label
      class="text-zinc-700"
      for={htmlFor}
    >
      {title ?? children}
      {required && <span class="text-xs text-red-700">*</span>}
    </label>
  )
}
