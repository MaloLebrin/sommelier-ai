export function LoadingMessage() {
  const blueCircle = {
    'animation-delay': '0.1s'
  };
  const greenCircle = {
    'animation-delay': '0.2s'
  };
  const redCircle = {
    'animation-delay': '0.3s'
  };

  return (
    <div
      class="gap-3 mb-2 {{isLoading ? 'flex' : 'hidden'}}"
    >
      <div
        class="flex items-center px-4 py-4 space-x-1 bg-white rounded-tl-sm rounded-2xl"
      >
        <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={blueCircle}></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={greenCircle}></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={redCircle}></span>
      </div>
    </div >
  )
}
