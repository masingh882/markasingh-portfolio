import Link from "next/link";
import SiteNav from "../../components/SiteNav";

const recommendationCards = [
  {
    theme: "Trusted Technical Advisor",
    quote:
      "Mark is responsive and technically adept. He demonstrates a real willingness to engage and assist anyone in need of help. He has a refreshing personality and a very thoughtful customer-engagement style.",
    author: "Andrew Redman",
    href: "https://www.linkedin.com/in/redmanandrew",
    title: "Director, Americas Solution Engineering — Progress Software",
    context: "Direct Manager",
  },
  {
    theme: "Driving Customer Outcomes",
    quote:
      "Mark provided exceptional technical demos and resolved evaluation issues while helping me create a sense of urgency to keep the sales cycle on track for a quick close. From his thorough follow up to his technical expertise, Mark played a vital and important role with my success in sales.",
    author: "Georgia Apinian",
    href: "https://www.linkedin.com/in/georgia-apinian-54a13b2",
    title: "Senior Account Executive — Progress Software",
    context: "Enterprise Account Executive Partner",
  },
  {
    theme: "Bridging Technology and Business",
    quote:
      "Mark provided not only a tremendous amount of technical expertise, but also the ability to formulate a sales strategy to explain the value within each client opportunity.",
    author: "Chris Cullen",
    href: "https://www.linkedin.com/in/cullenchris",
    title: "Senior Sales Manager — Progress Software",
    context: "Sales Leadership",
  },
  {
    theme: "Voice of the Customer Inside Engineering",
    quote:
      "Mark often provided my team with user input, application usability feedback, and prioritisation of testing features for release.",
    author: "Victor Hernandez",
    href: "https://www.linkedin.com/in/victorehernandez",
    title: "QA Team Manager — Network Monitoring Group, Ipswitch",
    context: "Engineering & QA Partner",
  },
];

export default function ProfessionalJourneyPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Professional Journey
          </p>

<h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
  The Career Behind the{" "}
  <span className="text-cyan-300">Perspective</span>
</h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-cyan-300">
            Military Logistics • Enterprise Support • R&D Collaboration •
            Solutions Engineering • Cybersecurity • Business Building
          </p>

          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-300">
            A professional journey shaped by more than two decades helping
            organizations understand, adopt, support, and evolve technology —
            from enterprise infrastructure and observability through
            cybersecurity, cloud transformation, entrepreneurship, and
            AI-assisted business workflows.
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

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Professional Perspectives
            </p>

            <h2 className="text-2xl font-bold text-white">
              Leadership & Peer Perspectives
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-300">
              The observations below come from leaders and partners who worked
              with me across solutions engineering, sales, quality assurance,
              product development, and customer-facing teams. Different roles,
              different organizations, and different stages of my career — yet
              the same recurring themes emerge: trust, technical depth, customer
              advocacy, and cross-functional alignment.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {recommendationCards.map((item) => (
                <article
                  key={item.author}
                  className="rounded-2xl border-l-2 border-cyan-400 bg-slate-900/70 p-5"
                >
                  <h3 className="text-lg font-bold text-white">
                    {item.theme}
                  </h3>

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
              managers, sales leaders, account executives, and engineering
              partners across multiple stages of my career.
            </p>
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
            Career Journey
          </p>

          <h2 className="mb-8 text-2xl font-bold text-white">
            The Experiences That Shaped the Perspective
          </h2>

          <div className="space-y-8">
            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">
                Entrepreneurial Ventures & Business Building
              </h2>

              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Co-Founder • 2023 – Present
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  This chapter of my career has focused on applying the same
                  principles that guided my work in enterprise technology —
                  customer understanding, operational clarity, workflow design,
                  and decision support — to building businesses from the ground
                  up.
                </p>

                <p>
                  As a co-founder of Mrs. Clean Inc. in Guyana, I helped
                  establish a Local Content Certified business serving
                  commercial and industrial customers. Building the company
                  required navigating supplier relationships, operational
                  processes, digital presence, and the realities of launching
                  and growing a business in an emerging market.
                </p>

                <p>
                  In parallel, I co-founded Gallivanting Travel, applying
                  customer guidance, workflow design, and decision-support
                  principles to create a more thoughtful and personalized travel
                  planning experience.
                </p>

                <p>
                  Rather than focusing on AI as a standalone technology, my work
                  has centered on reducing ambiguity, improving decision quality,
                  and creating practical systems that help people navigate
                  increasingly complex choices.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Co-founded and helped launch Mrs. Clean Inc., a Guyanese
                  Local Content Certified supplier serving commercial and
                  industrial markets.
                </li>
                <li>
                  • Co-founded Gallivanting Travel, designing customer guidance
                  workflows, service delivery processes, and digital customer
                  experiences.
                </li>
                <li>
                  • Applied AI-assisted research, workflow design, and structured
                  guidance principles to real-world business challenges.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-bold text-white">iboss</h2>
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                Field Sales Engineer • 2022 – 2023
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  My time at iboss introduced me to the rapidly evolving world of
                  cloud security, Secure Access Service Edge, and Zero Trust
                  architectures. The role expanded my perspective beyond
                  infrastructure visibility into identity, access control, and
                  modern security transformation initiatives.
                </p>

                <p>
                  Working with organizations evaluating cloud-delivered security
                  models reinforced a lesson that would follow me throughout my
                  career: successful technology adoption depends as much on
                  organizational readiness, trust, and clarity as it does on the
                  technology itself.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Supported SASE, Zero Trust, and cloud security modernization
                  initiatives.
                </li>
                <li>
                  • Led technical discovery, demonstrations, architecture
                  discussions, and solution validation.
                </li>
                <li>
                  • Worked with organizations evaluating cloud-delivered security
                  architectures and secure access models.
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

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <p>
                  Transitioning into Sales Engineering expanded my role from
                  solving technical problems to helping organizations evaluate
                  strategic technology decisions. I worked closely with
                  executives, architects, administrators, and technical teams to
                  align business objectives with platform capabilities across a
                  wide range of industries.
                </p>

                <p>
                  The position combined technical expertise, customer education,
                  solution design, and executive communication. It also provided
                  opportunities to represent the organization publicly through
                  webinars, customer workshops, industry conferences, and Tech
                  Field Day.
                </p>
              </div>

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
                  As Ipswitch expanded through acquisitions, enterprise growth,
                  and increasing product complexity, my responsibilities evolved
                  from engineering-adjacent leadership into enterprise
                  escalation management, customer advocacy, product adoption, and
                  long-term customer success.
                </p>

                <p>
                  I became a bridge between customer outcomes, product
                  capabilities, and business objectives — helping organizations
                  navigate complex technical challenges while ensuring they
                  continued to realize value from their technology investments.
                </p>

                <p>
                  This period reinforced a lesson that continues to influence how
                  I approach leadership today: symptoms and root causes are
                  rarely the same thing. Successful outcomes required
                  understanding not only the technical issue, but also the
                  operational, organizational, and business factors surrounding
                  it.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                <li>
                  • Served as senior escalation authority for enterprise customer
                  environments.
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
                  • Achieved approximately 75% customer retention while assisting
                  at-risk accounts and renewal conversations.
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
                  Shortly after joining Ipswitch, I was promoted into a Team Lead
                  role and later assumed multi-team management responsibilities
                  as the organization expanded. As the company grew, I helped
                  build the support organization through hiring, onboarding,
                  coaching, mentoring, and developing new engineers.
                </p>

                <p>
                  As the team grew, I worked to establish consistent
                  investigative methodologies, escalation processes,
                  knowledge-sharing practices, and customer communication
                  standards. Developing people became as important as solving
                  technical problems.
                </p>

                <p>
                  At the same time, I became a key part of the
                  customer-to-engineering information flow connecting support,
                  development, QA, documentation, product management, and
                  engineering leadership.
                </p>

                <p>
                  Looking back, this period established the foundation for how I
                  approach leadership today: investing in people, creating
                  clarity, building alignment, and helping organizations navigate
                  complexity through shared understanding.
                </p>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>
                  • Promoted to Team Lead within four months and later advanced
                  into multi-team leadership responsibilities.
                </li>
                <li>
                  • Recruited, onboarded, trained, coached, and developed new
                  support engineers during periods of organizational growth.
                </li>
                <li>
                  • Established support processes, escalation frameworks, and
                  knowledge-sharing practices within an R&D-centered support
                  organization.
                </li>
                <li>
                  • Served as a Voice of Customer representative within
                  engineering and product development workflows.
                </li>
                <li>
                  • Worked directly with development, QA, documentation, product
                  management, and engineering leadership teams.
                </li>
              </ul>
            </article>
          </div>
        </section>

<section
  id="product-lifecycle"
  className="mx-auto mt-16 max-w-5xl scroll-mt-28"
>
    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
      Full Product Lifecycle
    </p>

    <h2 className="text-3xl font-bold text-white">
      A Perspective Built Across the Entire{" "}
      <span className="text-cyan-300">Lifecycle</span>
    </h2>

    <p className="mt-5 max-w-4xl text-xl font-semibold leading-8 text-white">
      Twenty-two years inside an enterprise software company provided repeated
      exposure to the complete product lifecycle — from product vision through
      customer adoption and continuous improvement.
    </p>

    <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">
      Throughout my career at Ipswitch and Progress Software, I experienced far
      more than a progression of technical roles. I worked across enterprise
      support, leadership, engineering collaboration, customer education,
      solutions engineering, and customer advocacy, providing visibility into
      how enterprise software is conceived, delivered, adopted, supported, and
      improved.
    </p>

    <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
      Every major release reinforced the same lesson. Engineering celebrated new
      capabilities. Customers experienced learning curves, workflow changes,
      documentation questions, usability challenges, configuration issues, and
      occasionally new defects. Support became one of the first places where the
      reality of customer adoption could be observed.
    </p>
  </div>

  <div className="mt-10 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
      The Adoption Loop
    </p>

    <div className="grid gap-4 md:grid-cols-2">
      {[
        ["Customer Problems", "Real-world needs, friction, and operational challenges."],
        ["Product Vision", "Ideas shaped into product direction and capability."],
        ["Engineering", "Features designed, built, tested, and refined."],
        ["Quality Assurance", "Validation before customers experience the release."],
        ["Documentation", "Guidance that helps customers understand what changed."],
        ["Product Release", "New capability enters the customer environment."],
        ["Customer Adoption", "Customers begin learning, configuring, and applying the change."],
        ["Support & Escalations", "The reality of adoption becomes visible through questions, confusion, defects, and unexpected use cases."],
        ["Training & Education", "Webinars, workshops, demos, and enablement help customers build confidence."],
        ["Solutions Engineering", "Customer needs, technical fit, and business value are translated into practical guidance."],
        ["Customer Feedback", "Patterns from the field inform product priorities and improvements."],
        ["Product Improvements", "The cycle continues through refinement, prioritization, and the next release."],
      ].map(([title, text], index) => (
        <div
          key={title}
          className="rounded-2xl border border-slate-700/70 bg-[#020617] p-5 transition hover:border-cyan-500/60 hover:bg-cyan-950/20"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="text-lg font-bold text-white">{title}</h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {[
      [
        "Technology creates possibility.",
        "Engineering builds new capabilities, but innovation alone does not guarantee adoption.",
      ],
      [
        "Customers reveal reality.",
        "Learning curves, workflow changes, usability feedback, documentation gaps, and support interactions reveal how technology is actually experienced.",
      ],
      [
        "Organizations succeed through clarity.",
        "Successful adoption depends on communication, customer understanding, stakeholder alignment, and confidence through change.",
      ],
    ].map(([title, text]) => (
      <div
        key={title}
        className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6"
      >
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
      </div>
    ))}
  </div>

  <div className="mt-10 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
    <p className="text-sm leading-7 text-slate-300">
      Artificial intelligence represents the latest technology transition I have
      experienced throughout my career. While the technologies continue to
      evolve, the organizational patterns remain familiar. The challenge has
      never been technology alone — it has consistently been helping
      organizations understand change, adopt it with confidence, and realize
      its business value.
    </p>

    <p className="mt-5 text-lg font-semibold leading-8 text-white">
      Seeing the entire lifecycle taught me that software succeeds through adoption, not deployment.
    </p>
  </div>
</section>



        <section className="mx-auto mt-12 max-w-5xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">
              Professional Toolkit
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-white">
                  Customer Engagement & Technical Education
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Webinars • Demonstrations • Workshops • Technical Writing •
                  Public Speaking • Executive Presentations
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Product & Engineering Collaboration
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Jira • Agile • Defect Triage • Voice of Customer Programs •
                  Product Feedback Loops • Release Validation
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Customer Lifecycle & Operations
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Salesforce • ServiceNow • Technical Discovery • Requirements
                  Discovery • Customer Journey Mapping • Adoption Strategy •
                  Customer Retention
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Infrastructure & Security Technologies
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  WhatsUp Gold • VMware • Microsoft SQL Server • Azure •
                  Infrastructure Monitoring • SASE • Zero Trust • ZTNA
                </p>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-semibold text-white">
                  Modern SaaS & AI Workflows
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  API Workflows • Orchestration Design • Telemetry •
                  Frontend/Backend Coordination • AI-Assisted Workflows • Guided
                  Intelligence Concepts
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

        <section className="mx-auto mt-16 max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Earlier Career Foundations
          </p>

          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6">
            <p className="max-w-4xl text-sm leading-6 text-slate-300">
              Before entering enterprise software, my professional foundation was
              built through military service, logistics, operational
              accountability, and hands-on systems administration. Those
              experiences established many of the principles that later shaped my
              approach to customer support, engineering collaboration, and
              solutions consulting.
            </p>

            <div className="mt-8 space-y-6">
              <article className="rounded-2xl border border-slate-700/70 bg-slate-950/40 p-5">
                <h2 className="text-xl font-bold text-white">
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
                    • Developed foundational expertise in systems
                    administration and enterprise operations.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-700/70 bg-slate-950/40 p-5">
                <h2 className="text-xl font-bold text-white">
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
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl border-t border-slate-800 pt-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Continue Exploring
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "/experience",
                "Experience",
                "Return to current applications of my experience.",
              ],
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