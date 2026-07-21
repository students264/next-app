export default function Loading() {
  return (
    <main
      className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-[#fbfbfe] px-5"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative flex flex-col items-center">
        <div className="relative grid size-20 place-items-center">
          <div className="absolute inset-0 rounded-full border-2 border-violet-100" />
          <div className="absolute inset-1.5 animate-spin rounded-full border-2 border-transparent border-r-violet-600 border-t-violet-600" />
          <div className="grid size-9 place-items-center rounded-xl bg-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
            A
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-slate-700">
          LOADING
        </p>
        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          <span className="size-1.5 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.3s]" />
          <span className="size-1.5 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.15s]" />
          <span className="size-1.5 animate-bounce rounded-full bg-violet-500" />
        </div>
        <span className="sr-only">Loading page content</span>
      </div>
    </main>
  );
}
