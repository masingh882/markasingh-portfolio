import Link from "next/link";
import SiteNav from "../components/SiteNav";

const exploreLinks = [
  {
    title: "Home",
    description: "Return to the main narrative and career positioning.",
    href: "/",
  },
  {
    title: "Portfolio",
    description: "Explore the experiences behind the perspective.",
    href: "/portfolio",
  },
  {
    title: "Evidence",
    description: "View public examples of presentations, webinars, and writing.",
    href: "/evidence",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s Start a Conversation
          </h1>

          <div className="mt-8 max-w-4xl space-y-5 text-base leading-7 text-slate-300">
            <p>
              Whether you&apos;re building a team, evaluating technology,
              navigating organizational change, or exploring new opportunities,
              I&apos;d be happy to connect.
            </p>

            <p>
              Throughout my career, the most valuable outcomes have started with
              understanding the problem before discussing solutions.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">
              Topics I Enjoy Discussing
            </h2>

            <div className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
              <ul className="space-y-2">
                <li>• Solutions Engineering Leadership</li>
                <li>• Customer Success & Technology Adoption</li>
                <li>• Product Feedback & Voice of Customer Programs</li>
                <li>• Infrastructure, Security & Observability</li>
              </ul>

              <ul className="space-y-2">
                <li>• AI Adoption & Guided Intelligence</li>
                <li>• Technology Modernization Initiatives</li>
                <li>• Team Building & Cross-Functional Collaboration</li>
                <li>• Public Speaking & Technical Education</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">
              A Career Built Around Translation
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                My work has consistently focused on helping people navigate
                complexity.
              </p>

              <p>
                That has included supporting enterprise customers, collaborating
                with engineering teams, leading technical escalations, presenting
                solutions to executive audiences, advising organizations through
                technology transitions, and exploring how AI can improve
                understanding and decision-making.
              </p>

              <p>
                While technologies continue to evolve, the objective remains the
                same: create clarity, reduce ambiguity, and help organizations
                move forward with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">Connect</h2>

            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
              <p className="text-lg font-semibold text-white">
                Mark <span className="text-cyan-300">A.</span> Singh
              </p>

              <p>
                Senior Solutions Engineer
                <br />
                Technology Advisor
                <br />
                Customer & Engineering Advocate
              </p>

              <p>Coral Springs, Florida</p>

              <div className="space-y-2 pt-2">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:m.a.singh882@email.com"
                    className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    m.a.singh882@email.com
                  </a>
                </p>

                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/markasingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    View Profile ↗
                  </a>
                </p>

                <p>
                  Website:{" "}
                  <a
                    href="https://markasingh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    markasingh.com ↗
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <h2 className="text-2xl font-bold text-white">
              Strategic Perspective
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                The most meaningful technology conversations rarely begin with
                products.
              </p>

              <p>They begin with questions:</p>

              <ul className="space-y-2">
                <li>• What problem are we trying to solve?</li>
                <li>• What outcome are we trying to achieve?</li>
                <li>• What would success actually look like?</li>
              </ul>

              <p>That&apos;s where I prefer to start.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl border-t border-slate-800 pt-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Continue Exploring
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {exploreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 transition hover:border-cyan-500/60 hover:bg-cyan-950/20"
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}