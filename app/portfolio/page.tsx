import { webinars } from "../data/webinars";
import { events } from "../data/events";
import { projects } from "../data/projects";

const evidenceItems = [...webinars, ...events, ...projects];

const proofPillars = [
  "Customer-Facing Technical Leadership",
  "Product & Engineering Proximity",
  "Industry & Field Presence",
  "Builder & Operator Experience",
];

const industryPresence = [
  "AFCEA Hawaii",
  "AFCEA West",
  "Tech Field Day",
  "Progress Customer Events",
  "Industry Conferences",
  "Trade Show Engagement",
];

const careerArc = [
  {
    title: "Technical Support Leadership",
    description:
      "Built deep operational expertise by helping organizations deploy, troubleshoot, and optimize critical infrastructure and monitoring platforms while serving as a direct bridge between customers and engineering teams.",
    highlights: [
      "Enterprise troubleshooting",
      "Customer advocacy",
      "Engineering collaboration",
      "Dorian integration support",
      "MOVEit integration support",
      "Release validation",
    ],
  },
  {
    title: "Solutions Engineering",
    description:
      "Expanded from solving technical challenges to helping organizations align technology investments with business outcomes through discovery workshops, technical demonstrations, architecture discussions, and modernization initiatives.",
    highlights: [
      "Technical discovery",
      "Solution design",
      "Customer workshops",
      "Public webinars",
      "Industry events",
      "Security modernization",
    ],
  },
{
  title: "Builder & Operator",
  description:
    "Applied decades of customer, technical, and operational experience to building businesses, digital experiences, and guided decision systems designed to simplify complex workflows and improve customer outcomes.",
  highlights: [
    "Gallivanting Travel",
    "Guided Intelligence Platform Design",
    "Mrs. Clean transformation",
    "AI-assisted workflows",
    "Product strategy",
    "Guided decision architecture",
  ],
},
];

const featuredEvidence = [
  {
    title: "Technical Education",
    description:
      "Customer webinars, workshops, demonstrations, and technical enablement initiatives designed to help organizations understand, deploy, and maximize the value of their technology investments.",
    cta: "Explore Webinars",
  },
  {
    title: "Industry Presence",
    description:
      "Trade shows, conferences, customer events, and field engagement activities representing products, educating customers, and participating in industry conversations.",
    cta: "View Events",
  },
  {
    title: "Product & Engineering Collaboration",
    description:
      "Examples of customer advocacy, engineering partnership, product feedback, release participation, acquisition integrations, and the practical work required to translate customer needs into product outcomes.",
    cta: "Learn More",
  },
  {
    title: "Builder Projects",
    description:
      "Business ventures, digital platforms, and guided workflow initiatives demonstrating hands-on execution across product design, customer experience, operational processes, and AI-assisted systems.",
    cta: "View Projects",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Public Portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight">Mark A. Singh</h1>

        <p className="mt-4 text-xl text-slate-300">
          Technical Advisor • Solutions Engineer • Product Educator • Operator
        </p>

<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
  Public evidence of customer-facing technical leadership, product
  collaboration, industry engagement, and operational execution
  accumulated across more than 25 years in technology.
</p>
      </section>

      <section className="mx-auto mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold">Proof Pillars</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {proofPillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-slate-200"
            >
              {pillar}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Career Arc
        </p>

        <h2 className="text-3xl font-semibold">Career Evolution</h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          A 25+ year journey spanning technical support leadership, solutions
          engineering, customer advisory, and modern AI-guided workflow design.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {careerArc.map((stage) => (
            <article
              key={stage.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <h3 className="text-xl font-semibold">{stage.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {stage.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {stage.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Featured Evidence
        </p>

        <h2 className="text-3xl font-semibold">Proof Over Claims</h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          A selection of projects, events, technical contributions, and
          customer-facing initiatives that demonstrate customer impact, product
          collaboration, industry engagement, and operational execution.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredEvidence.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>

              <button className="mt-6 rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950">
                {item.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

<section className="mx-auto mt-16 max-w-5xl">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
    Industry Presence
  </p>

  <h2 className="text-3xl font-semibold">Field Experience in Action</h2>

  <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
    Conferences, trade shows, customer events, analyst engagements, and
    field representation across enterprise, public sector, and technology
    communities.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {industryPresence.map((item) => (
      <article
        key={item}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
      >
        <div className="mb-5 flex h-36 items-center justify-center rounded-xl border border-dashed border-cyan-300/30 bg-cyan-300/5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Image
        </div>

        <h3 className="text-xl font-semibold">{item}</h3>
      </article>
    ))}
  </div>
</section>

      <section className="mx-auto mt-16 max-w-5xl rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
        <h2 className="text-2xl font-semibold">Why This Portfolio Exists</h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
          Credibility is built through outcomes, not titles. This portfolio is
          designed to provide evidence of technical leadership, customer
          engagement, product collaboration, and builder experience through real
          projects, events, and contributions accumulated over more than two
          decades in technology.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
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