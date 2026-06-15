import Image from "next/image";
import SiteNav from "../components/SiteNav";


import { industryPresence } from "../data/industryPresence";


const portfolioPillars = [
{
  title: "Embedded in Research & Development",
  hook: "Where customer reality met engineering decisions.",
  description:
    "Working inside a broader R&D organization provided direct exposure to engineering, quality assurance, product management, documentation, and customer feedback loops. It also required translating customer experiences into actionable information for engineering teams, creating alignment across groups with different priorities and perspectives.",
  themes: [
    "Voice of Customer",
    "Engineering Collaboration",
    "Product Feedback",
    "Technical Translation",
    "Cross-Functional Leadership",
  ],
  href: "/portfolio/embedded-in-rd",
},
{
  title: "Developing People & Building Teams",
  hook: "Leadership is measured by the people you develop.",

description:
  "Led multi-product technical support organizations through hiring, talent development, organizational change, acquisitions, and cross-functional collaboration across support, engineering, product, and business teams.",
    themes: [
    "People Leadership",
    "Talent Development",
    "Team Advocacy",
    "Organizational Change",
    "Cross-Functional Alignment",
  ],
  href: "/portfolio/developing-people-building-teams",
},
  {
    title: "Supporting Technology Transitions",
    hook: "Technology evolves. Organizations adapt.",
    description:
      "From infrastructure monitoring and virtualization through cloud adoption, security modernization, and AI-assisted workflows, my career has largely been spent helping organizations navigate periods of technological change. While platforms evolved, the adoption challenges remained remarkably similar.",
    themes: [
      "Technology Adoption",
      "Modernization",
      "Security Evolution",
      "Change Management",
      "Organizational Readiness",
    ],
    href: "/portfolio/supporting-technology-transitions",
  },
];

const fieldValidationCards = [
  {
    theme: "Technical Communication",
    quote:
      "Mark and I have completed multiple webinars, blog posts, and demos for public consumption. Mark's product knowledge and light touch bring value to everything we've worked on.",
    author: "Larry Goldman",
    href: "https://www.linkedin.com/in/ligoldman/",
title: "DIRECTOR, PRODUCT MARKETING — INFRASTRUCTURE MANAGEMENT SOLUTIONS",
context: "Product Marketing & Public Communications Partner",
  },
  {
    theme: "Field Execution & Customer Engagement",
    quote:
      "Mark was a great asset with webinars and content creation. He would always raise his hand to help with events including setup, teardown, demos, badge scanning, and customer engagement. He has a vast understanding of technology and product that is unmatched.",
    author: "Alexandra Cassandro Arora",
    href: "https://www.linkedin.com/in/alexandra-cassandro-arora/",
title: "NA FIELD AND CHANNEL MARKETING MANAGER",
context: "Field Events, Webinars & Customer Engagement Partner",
  },
];

export default function PortfolioPage() {
return (
  <>
    <SiteNav />
    <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Portfolio
        </p>

<h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">          Behind the Work
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">
          Some of the most meaningful contributions of my career were not
          captured in webinars, published in articles, or recorded on conference
          stages.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          They emerged through customer conversations, engineering partnerships,
          product collaboration, and helping organizations navigate technology
          change.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          The experiences below shaped how I approach technical leadership,
          customer advocacy, and technology adoption today.
        </p>
      </section>

<section className="mx-auto mt-24 max-w-5xl">
  <div className="mb-12">
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
      Technology Evolution
    </p>

<h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
Technology Changes. Human Challenges Don't.
</h2>

<p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">
  Throughout my career, I have worked through multiple waves of technology
  transformation—from client/server infrastructure and network monitoring
  to cybersecurity, cloud services, and artificial intelligence.
</p>

<p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
  While the tools evolved, the underlying challenge remained remarkably
  consistent: helping people understand, adopt, and operationalize change.
</p>

  </div>

  <div className="space-y-8">

<article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
    1990s
  </p>

  <h3 className="mt-2 text-2xl font-bold text-white">
    Client / Server & Messaging
  </h3>

  <p className="mt-2 text-sm font-semibold text-cyan-300">
    Learning how systems work together.
  </p>

  <p className="mt-4 text-sm leading-6 text-slate-300">
    My early career focused on the infrastructure powering business
    communication and operations. Supporting messaging systems,
    authentication services, file transfer platforms, and Windows
    environments provided a foundation in reliability, troubleshooting,
    and operational discipline.
  </p>

  <p className="mt-4 text-sm text-slate-400">
    Windows Server • Active Directory • IMail • WS_FTP • SMTP • DNS • TCP/IP
  </p>
</article>

<article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
    2000s
  </p>

  <h3 className="mt-2 text-2xl font-bold text-white">
    Infrastructure Visibility
  </h3>

  <p className="mt-2 text-sm font-semibold text-cyan-300">
    You can't manage what you can't see.
  </p>

  <p className="mt-4 text-sm leading-6 text-slate-300">
    As organizations became increasingly dependent on technology,
    operational visibility became a strategic requirement. Monitoring,
    alerting, performance analytics, and infrastructure telemetry evolved
    from technical tools into business-critical capabilities.
  </p>

<p className="mt-4 text-sm leading-6 text-slate-300">
  This period taught me that symptoms and root causes are rarely the same thing.
  The ability to separate observation from explanation became one of the most
  valuable lessons of my career and continues to influence how I approach
  troubleshooting, leadership, customer conversations, and technology adoption.
</p>

  <p className="mt-4 text-sm text-slate-400">
    WhatsUp Gold • SNMP • WMI • SQL Server • VMware • Network Monitoring • Log Management
  </p>
</article>

<article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
    2010s
  </p>

  <h3 className="mt-2 text-2xl font-bold text-white">
    Integration & Automation
  </h3>

  <p className="mt-2 text-sm font-semibold text-cyan-300">
    Systems became ecosystems.
  </p>

  <p className="mt-4 text-sm leading-6 text-slate-300">
    Monitoring systems, service desks, collaboration tools, databases,
    and business applications increasingly needed to exchange information
    and automate workflows. Success became less about individual products
    and more about how those products worked together.
  </p>

  <p className="mt-4 text-sm text-slate-400">
    REST APIs • PowerShell • ServiceNow • Jira • Slack • Microsoft Teams • Workflow Automation
  </p>
</article>

<article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
    Late 2010s – Early 2020s
  </p>

  <h3 className="mt-2 text-2xl font-bold text-white">
    Security Modernization
  </h3>

  <p className="mt-2 text-sm font-semibold text-cyan-300">
    Visibility evolved into protection.
  </p>

  <p className="mt-4 text-sm leading-6 text-slate-300">
    As organizations moved beyond traditional network boundaries,
    priorities shifted toward identity, secure access, risk reduction,
    and continuous validation. Security became a business conversation,
    not simply a technical one.
  </p>

  <p className="mt-4 text-sm text-slate-400">
    MOVEit • Secure File Transfer • Zero Trust • SASE • CASB • DLP
  </p>
</article>

<article className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
    Today
  </p>

  <h3 className="mt-2 text-2xl font-bold text-white">
    Guided Intelligence
  </h3>

  <p className="mt-2 text-sm font-semibold text-cyan-300">
    Reducing ambiguity at scale.
  </p>

  <p className="mt-4 text-sm leading-6 text-slate-300">
    Artificial intelligence has accelerated research, learning, and
    decision-making. My focus is not AI for its own sake, but how
    structured guidance, knowledge synthesis, and human-centered workflows
    help people navigate increasingly complex technology landscapes.
  </p>

  <p className="mt-4 text-sm text-slate-400">
    ChatGPT • Gemini • AI-Assisted Research • Knowledge Synthesis • Guided Intelligence Framework Development
  </p>
</article>

  </div>

  <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
    <h3 className="text-lg font-bold text-white">
      Why This Matters
    </h3>


<p className="mt-4 text-sm leading-6 text-slate-300">
  Over three decades, the platforms changed repeatedly. The common thread
  was never the technology itself.
</p>

<p className="mt-4 text-sm leading-6 text-slate-300">
  The challenge was helping people understand it, trust it, adopt it,
  operationalize it, and align it with meaningful business outcomes.
</p>

<p className="mt-4 text-sm leading-6 text-slate-300">
  That lesson remains just as relevant in the age of artificial
  intelligence as it was during the client/server era.
</p>

  </div>
</section>


      <section className="mx-auto mt-20 max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Narrative Pillars
        </p>

        <h2 className="text-2xl font-bold tracking-tight">
          The Experiences Behind the Perspective
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {portfolioPillars.map((pillar) => (
            <article
              key={pillar.title}
className="flex h-full flex-col rounded-2xl border border-slate-700/70 bg-slate-900/80 p-5 shadow-xl shadow-black/20"
            >
              <h3 className="text-xl font-bold text-white">{pillar.title}</h3>

              <p className="mt-4 text-sm font-semibold leading-6 text-cyan-300">
                {pillar.hook}
              </p>

<p className="mt-3 text-sm leading-5 text-slate-300">
                  {pillar.description}
              </p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-white">
                  Key Themes
                </h4>

                <ul className="mt-2 space-y-1 text-sm text-slate-300">

                  {pillar.themes.map((theme) => (
                    <li key={theme}>• {theme}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={pillar.href}
                  className="inline-flex rounded-full border border-cyan-500/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  Explore Story →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Field Experience
        </p>

        <h2 className="text-2xl font-bold tracking-tight">
          Technology Is a People Business
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
          Conferences, analyst engagements, customer events, workshops,
          demonstrations, and industry conversations accumulated across more
          than two decades in technology.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {industryPresence.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-xl shadow-black/20"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={520}
                className="h-60 w-full object-cover"
                style={{
                  objectPosition: item.imagePosition ?? "center",
                }}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
                <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Field Validation
          </p>

          <h2 className="text-2xl font-bold text-white">
            Public Communication & Industry Presence
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
            Field work often extends beyond formal presentations. It includes
            customer conversations, event execution, technical demonstrations,
            partner enablement, product storytelling, and translating technical
            value in rooms where customers, analysts, marketers, sales teams,
            and product leaders are all listening.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {fieldValidationCards.map((item) => (
              <article
                key={item.author}
                className="rounded-2xl border-l-2 border-cyan-400 bg-slate-950/40 p-5"
              >
                <h3 className="text-lg font-bold text-white">{item.theme}</h3>

                <p className="mt-4 text-sm italic leading-6 text-slate-300">
                  “{item.quote}”
                </p>

                <div className="mt-5">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white transition hover:text-cyan-300"
                  >
                    {item.author} ↗
                  </a>

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


      <section className="mx-auto mt-20 max-w-6xl">
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
          <h2 className="text-lg font-bold text-white">
            Why These Experiences Matter
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
            The most valuable lessons of my career rarely came from technology
            alone. They emerged through helping customers solve problems,
            helping teams collaborate effectively, and helping organizations
            navigate periods of change.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
            That perspective continues to shape my work today across solutions
            engineering, customer advisory, operational leadership, and guided
            intelligence initiatives.
          </p>
        </div>
      </section>

      </main>
    </>
  );
}