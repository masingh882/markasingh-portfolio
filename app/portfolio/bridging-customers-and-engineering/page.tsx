import Link from "next/link";
import SiteNav from "../../components/SiteNav";


export default function BridgingCustomersAndEngineeringPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Bridging Customers and Engineering
          </h1>

          <p className="mt-8 text-xl font-semibold text-cyan-300">
            Many technology challenges are ultimately translation challenges.
          </p>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            Throughout my career, I have frequently operated between customers,
            support teams, engineering organizations, product groups, and
            business stakeholders. While the technologies changed, the
            objective remained consistent: creating shared
            understanding between people approaching the same problem from
            different perspectives.
          </p>
        </section>

        {/* Section 1 */}

        <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">
            The Translation Layer
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Customers, engineers, product managers, and executives often
            describe the same challenge using entirely different language.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            A customer may describe frustration. An engineer may focus on
            reproducibility. A product manager may focus on prioritization. An
            executive may focus on business risk.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            The role was rarely to choose a side. The role was to create
            alignment around what problem actually needed to be solved.
          </p>
        </section>

        {/* Section 2 */}

        <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">
            Escalation as Leadership
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Effective escalation was never about creating urgency for its own
            sake.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            It required understanding business impact, technical severity,
            available workarounds, customer expectations, and engineering
            effort.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            The objective was not simply raising issues. The objective was
            helping teams make informed decisions about where to focus their
            attention.
          </p>
        </section>

        {/* Section 3 */}

        <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">
            Customer Advocacy Without Bias
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Advocating for customers does not mean automatically agreeing with
            every request.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Some requests deserve immediate attention. Others require additional
            investigation. Some reveal opportunities for product improvement.
            Others expose misunderstandings about how technology works.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Trust was built through clarity, not simply agreement.
          </p>
        </section>

        {/* Section 4 */}

        <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">
            Building Trust Across Teams
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Throughout my career, I developed relationships across engineering,
            quality assurance, documentation, product management, sales,
            customer success, and executive leadership.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Teams collaborate more effectively when they trust the information
            being shared.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Many of the most successful outcomes emerged from strong
            collaboration rather than technical innovation alone.
          </p>
        </section>

        {/* Section 5 */}

        <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/80 p-8">
          <h2 className="text-3xl font-bold text-white">
            From Support Engineering to Solutions Engineering
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Long before moving into pre-sales engineering, many of the
            underlying skills were already in place.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            The difference was shifting from helping customers understand
            existing environments to helping organizations evaluate future
            decisions.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Understand the problem. Translate complexity. Create clarity. Help
            people move forward.
          </p>
        </section>

        {/* Strategic Perspective */}

        <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-8">
          <h2 className="text-3xl font-bold text-white">
            Strategic Perspective
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Technology projects succeed when people share a common understanding
            of the problem they are trying to solve.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Many technical challenges are not caused by technology alone. They
            emerge when customers, engineers, product teams, and business
            stakeholders operate with different assumptions or priorities.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            My role has often been helping organizations create alignment
            between those perspectives—transforming technical complexity into
            shared understanding and informed decision-making.
          </p>
        </section>

        <section className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
  <Link
    href="/portfolio/embedded-in-rd"
    className="text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
  >
    ← Previous Story
  </Link>

  <Link
    href="/portfolio/supporting-technology-transitions"
    className="inline-flex rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
  >
    Next Story →
  </Link>
</section>
      </main>
    </>
  );
}