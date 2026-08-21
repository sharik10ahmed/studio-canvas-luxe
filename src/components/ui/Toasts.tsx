import { useStudio } from "@/store/StudioStore";

export function Toasts() {
  const { toasts } = useStudio();
  if (toasts.length === 0) return null;
  return (
    <div
      className="pointer-events-none fixed bottom-6 right-4 z-[200] flex w-[min(22rem,calc(100vw-2rem))] flex-col gap-2"
      role="status"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="rounded-sm border-l-2 border-gold bg-ink px-4 py-3 text-sm text-ivory shadow-xl"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
