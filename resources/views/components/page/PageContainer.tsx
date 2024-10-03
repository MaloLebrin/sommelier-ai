import type { Children } from "@kitajs/html"

interface PageContainerProps {
  children: Children

}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div class="flex flex-col w-full h-full mx-auto">
      <div
        class="no-scroll-bar relative h-full w-full sm:max-w-[770px] md:max-w-[880px] lg:max-w-[1000px] bg-white bg-opacity-50 backdrop-blur rounded-3xl overflow-y-scroll shadow-lg pt-4 px-6 pb-10 mt-4"
      >
        {children}
      </div>
    </div>

    // <style>
    //   /* Hide scrollbar for Chrome, Safari and Opera */

    //   .no-scroll-bar::-webkit-scrollbar {
    //     display: none;
    //   }

    //   /* Hide scrollbar for IE, Edge and Firefox */

    //   .no-scroll-bar {
    //     -ms-overflow-style: none;
    //     /* IE and Edge */
    //     scrollbar-width: none;
    //     /* Firefox */
    //   }
    // </style>

  )
}
