import Link from "next/link";
import SiteNav from "./components/SiteNav";

export default function Home() {

  const calloutClass =
    "rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6";

  return (
    <>
      <SiteNav />

      <main id="top" className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <section className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
            <div>
              <img
                src="/images/headshots/mark-singh-hero.jpg"
                alt="Mark A. Singh"
                className="w-full rounded-2xl border border-slate-800"
              />
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                Helping Organizations Navigate Technology Change
              </p>

              <h1 className="text-5xl font-bold leading-tight text-white">
                Bridging <span className="text-cyan-400">Customers</span>,
                <br />
                Technology & Business
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white">
                I help organizations understand complexity, create clarity, and
                move confidently through technology change.
              </p>

              <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">
                My work spans enterprise support, R&amp;D collaboration,
                solutions engineering, customer education, cybersecurity,
                business formation, and AI-assisted workflows—all centered on
                translating technical complexity into practical business
                decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="rounded-full border border-cyan-500/50 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-950/40 hover:text-white"
                >
                  Explore AI in Practice →
                </Link>

<Link
  href="/experience/professional-journey#product-lifecycle"
  className="inline-flex items-center rounded-full border border-cyan-500/40 px-6 py-3 font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
>
  Explore the Product Lifecycle →
</Link>
              </div>
            </div>
          </section>

<section className="mt-24 space-y-12">
  {[
    {
      label: "Technology Lifecycle",
      title: "Technology Changes. Human Challenges Don't.",
      body:
        "For more than twenty-five years, I have worked through multiple waves of technology transformation—from client/server infrastructure and web adoption to cloud services, cybersecurity modernization, and artificial intelligence.",
      note:
        "Each wave introduced new tools, architectures, and ways of working. The organizational challenge remained familiar: understanding complexity, aligning stakeholders, reducing ambiguity, and helping people move forward with confidence.",
      stages: ["Client / Server", "Web", "Virtualization", "Cloud", "Cybersecurity", "AI"],
      href: "/portfolio#technology-lifecycle",
      cta: "Explore the Technology Lifecycle →",
    },
    {
      label: "Product Lifecycle",
      title: "A Career Built Across the Entire Lifecycle",
      body:
        "Twenty-two years inside an enterprise software company provided repeated exposure to how products move from vision to release, adoption, feedback, and continuous improvement.",
      note:
        "Rather than working from a single vantage point, I experienced the software lifecycle across support, leadership, engineering collaboration, QA, documentation, customer education, solutions engineering, and customer advocacy.",
      stages: ["Customer Need", "Product Vision", "Engineering", "Release", "Customer Adoption", "Feedback"],
      href: "/experience/professional-journey#product-lifecycle",
      cta: "Explore the Product Lifecycle →",
      closing:
        "Seeing the entire lifecycle taught me that software succeeds through adoption, not deployment.",
    },
    {
      label: "Organizational Lifecycle",
      title: "Organizations Evolve Too.",
      body:
        "Technology initiatives succeed inside organizations, not in isolation. Throughout my career, I experienced business growth, acquisitions, reorganizations, leadership transitions, and organizational transformation from multiple perspectives.",
      note:
        "Those experiences reinforced that successful change depends on people, communication, leadership, and alignment as much as technical capability.",
      stages: ["Growth", "Scaling", "Acquisition", "Integration", "Leadership", "Transformation"],
      href: "/experience/professional-journey#organizational-lifecycle",
      cta: "Explore the Organizational Lifecycle →",
      closing:
        "Helping organizations navigate change became just as important as helping them deploy technology.",
    },
  ].map((item) => (
    <div key={item.label} className={calloutClass}>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
        {item.label}
      </p>

      <h2 className="text-3xl font-bold text-white">{item.title}</h2>

      <p className="mt-5 max-w-4xl text-lg font-semibold leading-8 text-white">
        {item.body}
      </p>

      <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
        {item.note}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-6">
        {item.stages.map((stage) => (
          <div
            key={stage}
            className="rounded-xl border border-slate-700/70 bg-slate-950/70 p-4 text-sm font-semibold text-white"
          >
            {stage}
          </div>
        ))}
      </div>

      {item.closing && (
        <p className="mt-6 max-w-4xl leading-relaxed text-slate-300">
          {item.closing}
        </p>
      )}

      <div className="mt-6">
        <Link
          href={item.href}
          className="inline-flex rounded-full border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-950/30 hover:text-white"
        >
          {item.cta}
        </Link>
      </div>
    </div>
  ))}
</section>


          <section className="mt-24">
            <div className={calloutClass}>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                Current Focus
              </p>

              <h2 className="text-3xl font-bold text-white">
                AI as the Latest Technology Transition
              </h2>

              <p className="mt-5 max-w-4xl leading-relaxed text-slate-300">
                I do not view AI as a replacement for expertise. I view it as an
                execution multiplier: a way to accelerate research,
                communication, workflow design, prototyping, and business
                operations while keeping human judgment at the center.
              </p>

              <p className="mt-4 max-w-4xl leading-relaxed text-slate-300">
                The same adoption patterns I observed across earlier technology
                waves are appearing again with AI. Organizations need clarity,
                context, trusted guidance, and practical ways to integrate new
                capabilities into real workflows.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}