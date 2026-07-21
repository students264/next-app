import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#fbfbfe] px-5 py-24 sm:px-8">
      <div className="absolute -left-28 top-1/4 size-72 rounded-full bg-violet-200/55 blur-3xl" />
      <div className="absolute -right-24 bottom-0 size-80 rounded-full bg-sky-200/45 blur-3xl" />

      <section className="relative mx-auto max-w-xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-sm font-semibold text-violet-700">
          <span className="size-1.5 rounded-full bg-violet-500" />
          Error 404
        </p>
        <p className="mt-7 text-[clamp(7rem,24vw,13rem)] font-semibold leading-none tracking-[-0.1em] text-slate-950">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
          The link may be out of date, or the page may have moved somewhere new.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition-transform hover:-translate-y-0.5"
          >
            Back to home <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/contact-us"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
          >
            Contact support
          </Link>
        </div>
      </section>
    </main>
  );
}
