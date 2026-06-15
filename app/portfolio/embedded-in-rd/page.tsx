import Link from "next/link";
import SiteNav from "../../components/SiteNav";

const sections = [
  {
    title: "Not Traditional Support",
    body: [
      "When I joined Ipswitch, the company was in the middle of a significant transition. Technical Support was being migrated from corporate headquarters in Massachusetts to the company's Research & Development organization in Augusta, Georgia.",
      "I was among the last engineers to travel to Massachusetts for onboarding before training became fully internalized within the Augusta team. What began as a support role quickly became something much broader.",
      "Support was not positioned outside engineering. It operated as part of a larger R&D ecosystem that included engineering, quality assurance, documentation, product management, and leadership.",
    ],
  },
  {
    title: "Working Inside the Information Flow",
    body: [
      "Early in my career, support engineers were generalists responsible for multiple product lines, including WhatsUp Gold, WS_FTP, and IMail. As the products became more sophisticated, specialization became necessary.",
      "Within six months I was promoted to Team Lead, and my responsibilities shifted from primarily resolving support incidents to managing the flow of information between customers and R&D.",
      "Customers interacted with products in real-world environments. Support engineers had visibility into those deployments, which meant we often had the clearest view of how products were being used, where friction existed, and where assumptions inside the organization did not match operational reality.",
    ],
  },
  {
    title: "Learning to Separate Symptoms from Causes",
    body: [
      "One of the most important lessons I learned inside R&D was that reported symptoms are rarely the same as root causes.",
      "I often described troubleshooting as an investigation. A customer might report that a core device went offline and no alert was received. At first glance, that sounds like an alerting failure.",
      "A deeper investigation might reveal something different: no action log entry, no activity data, no updated reports, a running service, and eventually a full database preventing telemetry from being written.",
      "The customer's observation was real. The explanation was different. That process taught me to avoid assumptions, follow evidence, and focus on understanding why something happened rather than simply reacting to the symptom being reported.",
    ],
  },
  {
    title: "Translating Customer Reality into Engineering Action",
    body: [
      "Support inside R&D required learning how different groups communicate. Customers describe experiences. Engineers require reproducible facts. Product managers evaluate priorities. Quality assurance teams focus on validation. Documentation teams focus on clarity.",
      "Each audience speaks a different language.",
      "A customer's explanation of a problem might be emotionally accurate while technically incomplete. Engineering teams could not act on assumptions or frustration. They needed reproducible steps, logs, screenshots, packet captures, environmental details, and business impact.",
      "The goal was never to dismiss customer concerns. The goal was to transform those concerns into actionable information that engineering could use effectively.",
    ],
  },
  {
    title: "Developing a Product Mindset",
    body: [
      "Working alongside engineering and product teams exposed me to a different way of thinking about priorities.",
      "Every customer believes their issue is critical. Product organizations cannot operate that way. Issues had to be evaluated through practical questions: Is the product functioning? Is core functionality impacted? Is there a workaround? Is this a defect or an enhancement? What is the operational impact?",
      "These conversations taught me that customer urgency and engineering priority are not always the same thing.",
      "The role of support inside R&D was not simply advocating for customers. It was helping the organization make informed decisions based on impact, risk, and evidence.",
    ],
  },
  {
    title: "Scaling Knowledge Through Growth and Acquisition",
    body: [
      "As Ipswitch expanded through acquisitions, those same principles extended beyond individual products.",
      "I was entrusted with leadership responsibilities across multiple product groups and played a role in integrating support operations following acquisitions such as MOVEit and Dorian Log Management.",
      "The work involved far more than product training. It included cross-team enablement, knowledge transfer, process development, support readiness, and coordination across multiple locations.",
      "The objective was consistent: transform specialized knowledge into scalable organizational capability.",
    ],
  },
];

export default function EmbeddedInRdPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Embedded in Research & Development
          </h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-cyan-300">
            Most support organizations operate outside engineering. Mine didn't.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-300">
            Working inside a broader R&D organization shaped how I think about
            customers, technology, product development, and organizational
            decision-making.
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-4xl space-y-10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
            >
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-6 text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <h2 className="text-lg font-bold text-white">
              Strategic Perspective
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Working inside Research & Development taught me that technology
              challenges are often communication challenges. Customers describe
              outcomes. Engineers analyze systems. Product teams evaluate
              priorities. Leadership focuses on business impact.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Creating alignment requires translation. The most valuable lesson
              I carried forward from my years inside R&D is that meaningful
              progress happens when ambiguity is reduced, understanding is
              shared, and decisions are grounded in evidence.
            </p>
          </div>
        </section>

                <section className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-bold text-white">Related Story</h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Many of the lessons learned inside R&D eventually evolved into a
              broader role translating between customers, engineering teams,
              product groups, and business stakeholders.
            </p>

            <Link
              href="/portfolio/bridging-customers-and-engineering"
              className="mt-4 inline-flex rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              Read: Bridging Customers and Engineering →
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
          >
            ← Back to Portfolio
          </Link>

          <Link
            href="/portfolio/bridging-customers-and-engineering"
            className="inline-flex rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            Next Story →
          </Link>
        </section>
      </main>
    </>
  );
}