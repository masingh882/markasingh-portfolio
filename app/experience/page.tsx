import Link from "next/link";
import SiteNav from "../components/SiteNav";

const caseStudies = [
  {
    title: "Gallivanting Travel",
    label: "Customer Engagement",
    href: "https://www.gallivantingtravel.com",
    challenge:
      "Travel planning often begins with uncertainty. Customers may know they want a meaningful trip, but not yet know how to translate preferences, budget, timing, occasion, and travel style into a clear planning conversation.",
    approach:
      "Designed an AI-assisted guided intake experience that helps travelers organize intent before advisor handoff, creating better context for the human expert.",
    outcome:
      "A more structured customer journey that reduces ambiguity, improves handoff quality, and keeps the travel advisor at the center of the relationship.",
  },
  {
    title: "Mrs. Clean Inc.",
    label: "Business Formation",
    href: "https://www.mrscleaninc.com",
    challenge:
      "Launching an industrial supply business in Guyana required navigating an emerging market shaped by oil-driven growth, import/export logistics, banking, licensing, approvals, supplier coordination, and limited local resources.",
    approach:
      "Applied AI-assisted research, documentation, marketing, sales enablement, website development, and administrative workflow support to compress the time required to move from opportunity to operational presence.",
    outcome:
      "Established the operational and digital foundation for a Guyanese Local Content Certified business, using AI to accelerate execution across cross-border logistics, licensing, supplier coordination, marketing, customer engagement, and day-to-day business operations within an emerging market.",
  },
  {
    title: "MarkASingh.com",
    label: "Professional Representation",
    href: "https://www.markasingh.com",
    challenge:
      "A traditional resume was not enough to accurately represent decades of work across enterprise support, engineering collaboration, solutions engineering, cybersecurity, leadership, and entrepreneurship.",
    approach:
      "Built a modern professional portfolio using AI-assisted content development, structured storytelling, GitHub, SEO, Open Graph assets, and public evidence to create a clearer digital representation of the work.",
    outcome:
      "A more complete professional presence that gives recruiters, hiring managers, and business leaders better context before a conversation begins.",
  },
];

const stackItems = [
  [
    "Modern Web Applications",
    "Next.js, React, and TypeScript provide a fast, structured foundation for building professional, scalable web experiences.",
  ],
  [
    "Deployment & Version Control",
    "GitHub and Vercel support rapid iteration, clean deployment, public artifacts, and professional development workflows.",
  ],
  [
    "AI-Assisted Execution",
    "OpenAI and AI-assisted development workflows accelerate research, drafting, refinement, prototyping, and workflow design.",
  ],
  [
    "Discoverability",
    "SEO, JSON-LD, Open Graph, and structured content help search engines, AI systems, and people better understand the work.",
  ],
  [
    "Measurement",
    "Analytics and Microsoft Clarity help observe how visitors interact with the experience and where improvements may be needed.",
  ],
  [
    "Human-in-the-Loop Design",
    "The goal is not automation for its own sake. The goal is better context, better handoffs, and better human decisions.",
  ],

  [
  "Public GitHub",
  "A public GitHub presence demonstrates familiarity with modern development workflows, version control, AI-assisted collaboration, and transparent technical execution. It complements—not replaces—traditional leadership and solutions engineering experience.",
],
];

const principles = [
  [
    "AI should accelerate execution, not replace judgment.",
    "Human experience remains responsible for strategy, ethics, context, and final decisions.",
  ],
  [
    "Start with the business problem.",
    "Technology choices only matter when they help solve a real operational, customer, or communication challenge.",
  ],
  [
    "Create shared context before the conversation begins.",
    "Good systems reduce ambiguity so people can spend more time on judgment, fit, and meaningful decisions.",
  ],
];

export default function ExperiencePage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Experience
          </p>

<h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
  <span className="text-cyan-300">AI</span> in{" "}
  <span className="text-cyan-300">Practice</span>
</h1>

<p className="mt-6 max-w-4xl text-xl font-semibold leading-8 text-white">
  Real-world examples of combining AI, modern technology, and human
  expertise to solve business problems.
</p>

          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-300">
Technology changes rapidly. Business value still depends on understanding the problem, creating clarity, and executing with discipline. Throughout my career, I have helped organizations navigate successive waves of technology transformation—from enterprise infrastructure and observability to cybersecurity, cloud, customer engagement, and now AI-assisted business workflows.
          </p>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
            I do not view AI as a replacement for expertise. I view it as an
            execution multiplier: a way to accelerate research, communication,
            workflow design, content development, prototyping, and business
            operations so people can spend more time making better decisions.
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Current Applications
            </p>

            <h2 className="text-2xl font-bold text-white">
              Three Business Problems. One Consistent Philosophy.
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
              The projects below are not presented as developer portfolio
              pieces. They are business case studies showing how customer
              understanding, modern tools, AI-assisted workflows, and practical
              execution can be combined to solve real problems.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="grid gap-6">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 transition hover:border-cyan-500/60 hover:bg-cyan-950/20"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                      {item.label}
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-300 transition hover:text-white"
                  >
                    Visit Project ↗
                  </a>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      Business Challenge
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      AI-Assisted Approach
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {item.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      Business Outcome
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Modern Workflow
          </p>

          <h2 className="max-w-3xl text-3xl font-bold text-white">
            Technology Stack as Business Capability
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
            The tools are not the story. The business capability they create is
            the story. Each technology exists to support speed, clarity,
            discoverability, measurement, or better human handoff.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {stackItems.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5"
              >
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Guiding Principles
            </p>

            <h2 className="text-2xl font-bold text-white">
              Technology Should Improve Human Decisions
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {principles.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5"
                >
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Foundation
            </p>

            <h2 className="text-2xl font-bold text-white">
              Built on a Broader Professional Journey
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
              The way I apply AI today is shaped by more than twenty-five years
              across military logistics, enterprise support, R&D collaboration,
              solutions engineering, cybersecurity, customer education, and
              business building.
            </p>

            <div className="mt-6">
              <Link
                href="/experience/professional-journey"
                className="inline-flex rounded-full border border-cyan-500/40 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-950/30 hover:text-white"
              >
                Explore My Professional Journey →
              </Link>
            </div>
          </div>
        </section>

<section className="mx-auto mt-16 max-w-5xl">
  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
      ABOUT THIS PLATFORM
    </p>

    <h2 className="text-2xl font-bold text-white">
      Understanding This Platform
    </h2>

    <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
      MarkASingh.com is my professional platform for documenting how I help
      organizations navigate technology change. It brings together my
      experience, leadership philosophy, public evidence, business
      implementations, and the practical application of AI to real-world
      business challenges.
    </p>

    <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
      The questions below provide additional context about the approach,
      projects, and principles presented throughout the platform.
    </p>
  </div>

  <div className="mt-8 space-y-4">
    {[
      {
        question: "What is MarkASingh.com?",
        answer:
          "MarkASingh.com is my professional platform, bringing together more than twenty-five years of experience across enterprise support, engineering collaboration, solutions engineering, cybersecurity, leadership, entrepreneurship, and AI-assisted business transformation. It documents the ideas, experiences, and business implementations that have shaped my approach to helping organizations understand complexity, create clarity, and confidently adopt new technologies.",
      },
      {
        question: "Why build this platform?",
        answer:
          "As technology continues to evolve, so do the ways professionals share their experience. I wanted a place where my professional journey, public work, business ventures, and current exploration of AI could be presented together with the context needed to better understand how I think, how I work, and how I help organizations navigate change.",
      },
      {
        question: "How does AI fit into your work?",
        answer:
          "I view AI as an execution multiplier rather than a replacement for expertise. It accelerates research, communication, documentation, workflow design, software development, and business operations while allowing people to spend more time applying judgment, experience, and strategic thinking. The goal is better decisions—not simply more automation.",
      },
      {
        question: "Why are Gallivanting Travel and Mrs. Clean featured here?",
        answer:
          "These businesses demonstrate how the same principles can be applied across different industries. Each project begins with understanding the business problem, creating clarity, applying modern technology appropriately, and improving customer experiences. They serve as practical implementations of the ideas presented throughout this platform.",
      },
      {
        question: "What is the common thread throughout your career?",
        answer:
          "The technologies have changed dramatically—from client/server infrastructure to cloud computing, cybersecurity, enterprise SaaS, and artificial intelligence. The underlying challenge has remained consistent: helping organizations understand complexity, align stakeholders, and confidently move toward better decisions.",
      },
      {
        question: "Where is this work heading?",
        answer:
          "This platform documents an ongoing professional evolution. As AI becomes more deeply integrated into business workflows, my focus continues to be helping organizations combine human expertise with modern technology to improve customer engagement, business operations, and decision-making. Future initiatives continue building upon these same principles.",
      },
    ].map((item) => (
      <details
        key={item.question}
        className="group rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 transition hover:border-cyan-500/60 hover:bg-cyan-950/20"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-white">
          {item.question}

          <span className="text-2xl font-light text-cyan-300 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </summary>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">
          {item.answer}
        </p>
      </details>
    ))}
  </div>
</section>


        <section className="mx-auto mt-12 max-w-5xl border-t border-slate-800 pt-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Continue Exploring
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "/portfolio",
                "Portfolio",
                "Explore representative stories behind the work.",
              ],
              [
                "/evidence",
                "Evidence",
                "Review public presentations and technical work.",
              ],
              [
                "/contact",
                "Contact",
                "Start a conversation about business, technology, or customer outcomes.",
              ],
            ].map(([href, title, desc]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 transition hover:border-cyan-500/60 hover:bg-cyan-950/20"
              >
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}