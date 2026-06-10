import { webinars } from "../data/webinars";
import { events } from "../data/events";
import { projects } from "../data/projects";

const evidenceItems = [...webinars, ...events, ...projects];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Public Portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight">Mark A. Singh</h1>

        <p className="mt-4 text-xl text-slate-300">
          Solutions Engineer • Technical Advisor • Product Educator • Builder
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Public evidence of customer-facing technical leadership, product
          education, industry presence, and builder/operator experience.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold">Proof Pillars</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            "Customer-Facing Technical Leadership",
            "Product & Engineering Proximity",
            "Industry & Field Presence",
            "Builder & Operator Experience",
          ].map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-200"
            >
              {pillar}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-5xl">
        <h2 className="text-2xl font-semibold">Evidence Library</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {evidenceItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {item.category}
                </p>
                <p className="text-sm text-slate-400">{item.year}</p>
              </div>

              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-300">{item.description}</p>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950"
                >
                  View Evidence
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}