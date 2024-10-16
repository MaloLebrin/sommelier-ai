
interface PopoverProps {
  children: JSX.Element
  popoverName: string
}

export function Popover({
  children,
  popoverName,
  ...props
}: PopoverProps) {

  return (
    <section
      id={popoverName}
      popover
      class="relative"
      {...props}
    >
      <button
        popovertarget={popoverName}
        popovertargetaction="hide"
        class="absolute top-0 right-0"
      >
        hide
      </button>

      {children}
    </section>
  );
}
/**
 *         <button popovertarget="my-popover">
          Test
        </button>
 */
