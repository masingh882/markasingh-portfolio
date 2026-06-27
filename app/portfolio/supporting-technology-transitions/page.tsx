import Link from "next/link";
import SiteNav from "../../components/SiteNav";

const sections = [
  {
    title: "Every Era Has Its Transformation",
    body: [
      "In the early stages of my career, organizations were navigating web adoption, infrastructure growth, and increasing operational complexity.",
      "Later came virtualization, cloud services, security modernization, SaaS delivery models, and increasingly distributed environments.",
      "Today, organizations face a new wave of transformation driven by artificial intelligence, automation, and rapidly evolving digital workflows.",
      "The technologies changed. The adoption challenge remained familiar.",
    ],
  },
  {
    title: "The Human Side of Technology Change",
    body: [
      "Organizations rarely struggle because a technology exists.",
      "They struggle because people must decide why it matters, how it fits existing workflows, what risks it introduces, how success will be measured, and who owns the change.",
      "Helping organizations answer those questions became a recurring theme throughout my career.",
    ],
  },
  {
    title: "Infrastructure Visibility and Operational Maturity",
    body: [
      "Working with enterprise monitoring platforms exposed me to the operational realities behind technology adoption.",
      "Customers were not simply purchasing software. They were building visibility, improving reliability, reducing risk, and creating operational processes capable of supporting business growth.",
      "Technology implementation often revealed organizational challenges that technology alone could not solve.",
    ],
  },
  {
    title: "Security Modernization",
    body: [
      "As cloud adoption accelerated, security priorities evolved.",
      "My experience later expanded into secure access, Zero Trust principles, cloud-delivered security architectures, and modern approaches to protecting users and data.",
      "Once again, the technical discussion was only part of the challenge. Organizations needed guidance on operational impact, policy decisions, workflow integration, and adoption strategy.",
    ],
  },
  {
    title: "Artificial Intelligence and Guided Decision Making",
    body: [
      "Artificial intelligence represents another major technology transition.",
      "While the capabilities are new, many of the adoption challenges are familiar. Organizations are evaluating trust, workflow integration, governance, cost, operational impact, and user adoption.",
      "The same principles that shaped previous technology transitions continue to apply: reduce ambiguity, improve understanding, and help people make informed decisions.",
      "This perspective directly influenced my work exploring guided intelligence and structured decision support systems.",
    ],
  },
];

export default function SupportingTechnologyTransitionsPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
Supporting <span className="text-cyan-300">Technology</span> Transitions          
</h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-cyan-300">
            Technology evolves. Organizations adapt.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-300">
            Throughout my career, I have worked through multiple waves of
            technology transformation. While platforms, architectures, and tools
            changed dramatically, the underlying challenge remained 
        consistent: helping people understand, adopt, and operationalize
            change.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-300">
            Success was rarely determined by technology alone. It depended on
            clarity, alignment, readiness, and confidence.
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
              The technologies change. The underlying challenge does not.
              Organizations still need clarity. They still need trusted
              guidance. They still need help understanding how technology fits
              into their environment, workflows, objectives, and people.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Whether the conversation is about infrastructure, cybersecurity,
              cloud platforms, or artificial intelligence, the goal remains the
              same: reducing complexity, building understanding, and helping
              organizations move forward with confidence.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/portfolio/bridging-customers-and-engineering"
            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
          >
            ← Previous Story
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            Back to Portfolio →
          </Link>
        </section>
      </main>
    </>
  );
}