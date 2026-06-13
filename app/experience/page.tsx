import Link from "next/link";
import SiteNav from "../components/SiteNav";

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
            Mark <span className="text-cyan-300">A.</span> Singh
          </h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-cyan-300">
            Senior Solutions Engineer • Technology Advisor • Customer &
            Engineering Advocate
          </p>

          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-300">
            More than two decades helping organizations understand, adopt,
            support, and evolve technology — from enterprise infrastructure and
            observability through cybersecurity, cloud transformation, and
            artificial intelligence.
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Professional Reputation
            </p>

            <h2 className="text-2xl font-bold text-white">
              Consistent Themes Across Public Work
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Independent searches of my public professional footprint
              consistently identify the same themes.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                [
                  "Technical Educator",
                  "Recognized through webinars, workshops, technical demonstrations, public presentations, and product education.",
                ],
                [
                  "Trusted Advisor",
                  "Frequently positioned between customers, engineering teams, product organizations, and business stakeholders to create shared understanding.",
                ],
                [
                  "Product Advocate",
                  "Represented products publicly through conferences, workshops, trade shows, analyst engagements, webinars, and demonstrations.",
                ],
                [
                  "Technical Translator",
                  "Known for translating technical complexity into actionable outcomes across support, engineering, product, sales, and customer-facing functions.",
                ],
              ].map(([title, text]) => (
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

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-bold text-white">Career Summary</h2>

            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Senior technology professional with experience spanning
                enterprise infrastructure, observability, cybersecurity,
                customer success, technical leadership, product collaboration,
                and business alignment.
              </p>

              <p>
                Built a career operating between customers, engineering
                organizations, product teams, and business stakeholders —
                helping organizations navigate technology adoption,
                modernization initiatives, operational challenges, and complex
                technical decisions.
              </p>

              <p>
                Public-facing experience includes technical webinars, customer
                workshops, trade shows, analyst engagements, technical writing,
                executive presentations, and industry conferences throughout
                North America.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Career Themes
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "Customer Understanding",
                "Understanding customer reality before proposing solutions, built through enterprise support, escalation management, renewals, workshops, and pre-sales engagements.",
              ],
              [
                "Technical Translation",
                "Bridging customers, engineering, product teams, and business stakeholders through clear communication and shared understanding.",
              ],
              [
                "Technology Adoption",
                "Helping organizations navigate major technology shifts from client/server systems through cloud, security modernization, observability, and AI.",
              ],
            ].map(([title, text]) => (
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Professional Experience
          </p>

          <div className="space-y-8">
            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">
                Gallivanting Travel & Independent Projects
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Founder • 2023 – Present
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Exploring guided intelligence, AI-assisted workflows, and
                  structured decision-support systems.
                </li>
                <li>
                  • Designing customer experiences focused on clarity, guidance,
                  and workflow orchestration.
                </li>
                <li>
                  • Applying modern AI technologies to operational and
                  customer-facing business processes.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">iboss</h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Field Sales Engineer • 2022 – 2023
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Supported SASE, Zero Trust, and cloud security
                  modernization initiatives.
                </li>
                <li>
                  • Led technical discovery, demonstrations, architecture
                  discussions, and solution validation.
                </li>
                <li>
                  • Worked with organizations evaluating cloud-delivered
                  security architectures and secure access models.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">
                Progress Software
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Senior Solutions Engineer • 2018 – 2022
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Led technical discovery, demonstrations, workshops,
                  proof-of-concepts, and customer advisory engagements.
                </li>
                <li>
                  • Supported enterprise, healthcare, federal, financial
                  services, and regulated environments.
                </li>
                <li>
                  • Recognized as a public-facing technical resource through
                  webinars, Tech Field Day, customer events, and industry
                  conferences.
                </li>
                <li>
                  • Selected by marketing leadership to represent products
                  throughout North America.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Ipswitch, Inc. / Progress Software
              </p>
              <h2 className="text-2xl font-bold text-white">
                Scale, Adoption & Customer Advocacy
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Senior Escalation Engineer & Technical Leadership Roles • 2008 –
                2018
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  As the organization matured, my role evolved from direct R&D
                  interaction toward enterprise escalation management, customer
                  retention, product adoption, knowledge strategy, and
                  cross-functional collaboration.
                </p>

                <p>
                  Much of the work focused on helping customers achieve
                  successful outcomes while balancing technical realities,
                  product limitations, business expectations, and long-term
                  relationships.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Served as senior escalation authority for enterprise
                  customer environments.
                </li>
                <li>
                  • Authored more than 60% of WhatsUp Gold knowledge base and
                  training content.
                </li>
                <li>
                  • Reduced support case generation by approximately 35% through
                  customer education initiatives.
                </li>
                <li>
                  • Achieved approximately 75% customer retention while
                  assisting at-risk accounts and renewal conversations.
                </li>
                <li>
                  • Led support readiness and knowledge transfer following
                  MOVEit and Dorian acquisitions.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Ipswitch, Inc.
              </p>
              <h2 className="text-2xl font-bold text-white">
                Foundation Years — R&D Embedded Leadership
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Technical Support Team Manager • 2002 – 2008
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  Shortly after joining Ipswitch, I was promoted into a Team
                  Lead role and became part of the customer-to-engineering
                  information flow connecting support, development, QA,
                  documentation, product management, and engineering leadership.
                </p>

                <p>
                  At the time, I assumed this level of proximity to product
                  development was normal. Only later did I realize how unusual it
                  was for technical support to operate inside a Research &
                  Development organization rather than outside of it.
                </p>

                <p>
                  My role extended beyond technical troubleshooting. I helped
                  establish investigative workflows, escalation processes, defect
                  triage practices, and communication frameworks that translated
                  customer experiences into actionable engineering intelligence.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>• Promoted to Team Lead within four months.</li>
                <li>
                  • Helped establish support processes during Ipswitch&apos;s
                  migration into an R&D-centered support model.
                </li>
                <li>
                  • Served as a Voice of Customer representative within product
                  development workflows.
                </li>
                <li>
                  • Worked directly with development, QA, documentation, and
                  product management teams.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">
                Ecommerce Systems Administration
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Systems & Network Administration • 1998 – 2000
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Supported desktop, server, messaging, and network
                  infrastructure.
                </li>
                <li>• Administered IMail messaging environments.</li>
                <li>
                  • Developed foundational expertise in systems administration
                  and enterprise operations.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">
                United States Army
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Automated Logistical Specialist 92A • 1994 – 1998
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>• Served with the 513th Military Intelligence Brigade.</li>
                <li>• Supported NATO operations associated with Bosnia.</li>
                <li>
                  • Developed foundations in logistics, accountability,
                  teamwork, and operational discipline.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-bold text-white">
              Professional Toolkit
            </h2>

            <div className="mt-6 grid gap-8 text-sm leading-6 text-slate-300 md:grid-cols-2">
              <div>
                <h3 className="font-bold text-white">
                  Customer Engagement & Technical Education
                </h3>
                <p className="mt-3">
                  Webinars • Demonstrations • Workshops • Technical Writing •
                  Public Speaking • Executive Presentations
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Product & Engineering Collaboration
                </h3>
                <p className="mt-3">
                  Jira • TestTrack • Agile • Defect Triage • Voice of Customer
                  Programs • Cross-Functional Leadership
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Customer Lifecycle & Operations
                </h3>
                <p className="mt-3">
                  Salesforce • Sage CRM • ServiceNow • Renewals • Customer
                  Retention • Technical Discovery
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Infrastructure & Security Technologies
                </h3>
                <p className="mt-3">
                  WhatsUp Gold • WS_FTP Server • VMware • Microsoft SQL Server
                  • Azure • IIS • Infrastructure Monitoring
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <h2 className="text-2xl font-bold text-white">
              Public Recognition & Industry Presence
            </h2>

            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
              <li>• Featured presenter at Tech Field Day.</li>
              <li>• Hosted official Progress Software webinars.</li>
              <li>• Authored technical content and knowledge resources.</li>
              <li>
                • Represented products at customer workshops, trade shows,
                public sector events, and industry conferences.
              </li>
              <li>
                • Selected by marketing leadership for public demonstrations,
                partner enablement, and channel-facing technical events.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl border-t border-slate-800 pt-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Continue Exploring
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["/", "Home", "Return to the main narrative."],
              [
                "/portfolio",
                "Portfolio",
                "Explore the stories behind the experience.",
              ],
              [
                "/evidence",
                "Evidence",
                "Review public presentations and technical work.",
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