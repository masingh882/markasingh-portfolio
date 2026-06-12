import SiteNav from "../components/SiteNav";

const evidenceCards = [
  {
    eyebrow: "Live Presentation",
    title: "Tech Field Day Live Demonstration",
    description:
      "Live technical demonstration and Q&A for an industry analyst audience covering discovery, visibility, monitoring, automation, and operational intelligence.",
    demonstrates: [
      "Technical communication",
      "Live product demonstration",
      "Architectural explanation",
      "Customer education",
      "Industry-facing product positioning",
    ],
    href: "https://www.youtube.com/watch?v=hHr0ZwxMRZE",
    cta: "Watch Session ↗",
  },
  {
    eyebrow: "Webinar",
    title: "Public Technical Education",
    description:
      "Progress-hosted public webinar listing for WhatsUp Gold basics, showing trusted customer education and product enablement work.",
    demonstrates: [
      "Customer education",
      "Product enablement",
      "Technology adoption guidance",
      "Technical storytelling",
      "Public-facing expertise",
    ],
    href: "https://www.whatsupgold.com/resources/webinars/whatsup-gold-basics",
    cta: "View Webinar",
  },
  {
    eyebrow: "Technical Writing",
    title: "Published Technical Article",
    description:
      "Public technical article explaining how to configure a device monitor for VoIP SLA, demonstrating written communication and knowledge transfer.",
    demonstrates: [
      "Technical writing",
      "Customer enablement",
      "Documentation skill",
      "Product expertise",
      "Knowledge transfer",
    ],
    href: "https://www.whatsupgold.com/blog/whatsup-gold-lesson-configure-device-monitor-voip-sla",
    cta: "Read Article ↗",
  },
];

export default function EvidencePage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Evidence Library
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          The Work in Action
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">
          Public examples of technical communication, customer education,
          product collaboration, industry participation, and technology
          translation across enterprise infrastructure, monitoring, security,
          and adoption.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Featured Examples
        </p>

<h2 className="text-3xl font-bold tracking-tight">
  Technology Translation in Practice
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {evidenceCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-slate-700/70 bg-slate-900/80 p-6 shadow-xl shadow-black/20"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {card.eyebrow}
              </p>

              <h3 className="text-xl font-bold text-white">{card.title}</h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {card.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white">
                  Demonstrates
                </h4>

                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {card.demonstrates.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  {card.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
          <h3 className="text-lg font-bold text-white">Strategic Perspective</h3>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
The medium changed—live demonstrations, customer education, technical writing, and analyst engagements—but the objective remained consistent: translating complexity into clarity and helping organizations make informed decisions with confidence.          </p>
        </div>
      </section>
      </main>
    </>
  );
}