interface CheckboxProps {
  name: string
  children?: JSX.Element
}

export function Checkbox({ name, children }: CheckboxProps) {
  return (
    <label class="space-x-2 text-gray-700 flex items-center cursor-pointer" for={name}>
      <input
        id={name}
        name={name} 
        type="checkbox"
      />
      {children}
    </label>
  )
}
