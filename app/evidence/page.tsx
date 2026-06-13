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

const validationCards = [
  {
    theme: "Technical Communication",
    quote:
      "Mark and I have completed multiple webinars, blog posts, and demos for public consumption. Mark's product knowledge and light touch bring value to everything we've worked on.",
    author: "Larry Goldman",
    title: "Executive Product Marketing Leader",
    context: "Product Marketing Partner",
  },
  {
    theme: "Field Execution & Customer Engagement",
    quote:
      "Mark was a great asset with webinars and content creation. He would always raise his hand to help with events including setup, teardown, demos, badge scanning, and customer engagement. He has a vast understanding of technology and product that is unmatched.",
    author: "Alexandra Cassandro Arora",
    title: "Demand Generation",
    context: "Marketing & Events Partner",
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

        <section className="mt-12">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Independent Validation
            </p>

            <h2 className="text-2xl font-bold text-white">
              Public Communication & Industry Presence
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
              Public work can be measured through webinars, articles,
              demonstrations, workshops, and conference participation. These
              perspectives come from marketing and demand-generation leaders who
              partnered with me on customer-facing initiatives and public
              technical content.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {validationCards.map((item) => (
                <article
                  key={item.author}
                  className="rounded-2xl border-l-2 border-cyan-400 bg-slate-950/40 p-5"
                >
                  <h3 className="text-lg font-bold text-white">
                    {item.theme}
                  </h3>

                  <p className="mt-4 text-sm italic leading-6 text-slate-300">
                    “{item.quote}”
                  </p>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-white">
                      {item.author}
                    </p>

                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {item.context}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-slate-400">
              Excerpts from public LinkedIn recommendations provided by
              cross-functional partners involved in webinars, events, content,
              and product communication.
            </p>
          </div>
        </section>

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