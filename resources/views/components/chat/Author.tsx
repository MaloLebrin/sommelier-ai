import { Vite } from "#start/view";

export function Author() {
  return (
    <div class="flex items-center gap-5 mt-4">
      <div>
        <p class="text-base font-medium">
          Sommelier AI
        </p>
      </div>
      <div class="bg-white p-1.5 rounded-full overflow-hidden">
        <Vite.Image
          src={"https://images.ctfassets.net/spoqsaf9291f/5WH9VvZP0hYGfM02F81mCY/abc7df90849c0f32e5696313e2f5c055/david_webinar_portrait.png"}
          alt="system picture"
          class="w-8 h-8"
        />
      </div>
    </div>
  )
}
