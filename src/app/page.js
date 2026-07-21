export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#fbfbfe] font-sans text-slate-950">
      <main className="relative isolate flex flex-1 items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-10">
        <div className="absolute -top-32 left-1/2 -z-10 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <section className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-sm font-semibold text-violet-700">
            <span className="size-1.5 rounded-full bg-violet-500" />
            The new standard for focus
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl">
            Make your best work feel{" "}
            <span className="text-violet-600">effortless.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Aster gives ambitious teams one calm, beautiful space to plan, create,
            and move forward together.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#start" className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition-transform hover:-translate-y-0.5">
              Start for free <span aria-hidden="true">&#8594;</span>
            </a>
            <a href="#demo" className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50">
              See how it works
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
