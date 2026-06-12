import SiteNav from "./components/SiteNav";

export default function Home() {
  const cardClass =
    "h-full rounded-2xl border border-slate-800 bg-slate-900 p-6";

  const calloutClass =
    "mt-10 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6";

  return (
    <>
      <SiteNav />

      <main id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero */}
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
HELPING ORGANIZATIONS NAVIGATE TECHNOLOGY CHANGE            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Bridging Customers,
              <br />
              Technology & Business
            </h1>

            <p className="max-w-3xl text-slate-300 leading-relaxed">
              The common thread throughout my work has been helping people
              navigate complexity. Whether working with administrators,
              engineers, executives, customers, or product teams, I have been
              drawn to understanding problems, creating clarity, and helping
              people move confidently toward the next decision.
            </p>

            <p className="mt-6 max-w-3xl text-slate-400 leading-relaxed">
              That work has taken me across enterprise support, engineering
              collaboration, customer education, solutions consulting, and
              executive advisory engagements—all centered around translating
              complexity into clarity.
            </p>
          </div>
        </section>

        {/* Technology Evolution */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Technology Evolution
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Technology Changes. Human Challenges Don't.
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            For more than twenty-five years, I have watched organizations adapt
            to wave after wave of technology transformation.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            The technologies changed dramatically. The challenges organizations
            faced were often similar. Every new wave created
            opportunity, pressure, uncertainty, competing priorities, and
            questions about how to successfully adopt what came next.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Whether the conversation was about web applications, infrastructure
            visibility, cloud adoption, cybersecurity modernization, or
            artificial intelligence, success was rarely determined by technology
            alone. Success depended on understanding the technology, aligning it
            with business objectives, reducing ambiguity, and helping people
            confidently move forward.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-3 text-xl font-semibold">
                Client / Server Era
              </h3>
              <p className="text-slate-400">
                Organizations were building internal systems and learning how
                technology could improve operations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Operational efficiency</li>
                <li>• Internal systems</li>
                <li>• Technology enablement</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-3 text-xl font-semibold">Web Adoption</h3>
              <p className="text-slate-400">
                Businesses and software vendors raced toward the web as
                customers demanded online access and connected experiences.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Internet transformation</li>
                <li>• Web-enabled applications</li>
                <li>• Workflow change</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-3 text-xl font-semibold">
                Infrastructure Visibility
              </h3>
              <p className="text-slate-400">
                Growing networks created a need for visibility into devices,
                services, dependencies, and operational health.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Discovery</li>
                <li>• Monitoring</li>
                <li>• Operational awareness</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-3 text-xl font-semibold">
                Virtualization & Cloud
              </h3>
              <p className="text-slate-400">
                Infrastructure became dynamic as organizations adopted virtual
                platforms, cloud services, and SaaS applications.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Virtual infrastructure</li>
                <li>• Cloud adoption</li>
                <li>• SaaS transformation</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-3 text-xl font-semibold">
                Security Modernization
              </h3>
              <p className="text-slate-400">
                Expanding attack surfaces drove greater emphasis on visibility,
                compliance, identity, and access control.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Visibility</li>
                <li>• Compliance</li>
                <li>• Zero Trust</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-3 text-xl font-semibold">
                Artificial Intelligence
              </h3>
              <p className="text-slate-400">
                Organizations are evaluating how AI fits into existing workflows
                while balancing opportunity, risk, and adoption.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• AI adoption</li>
                <li>• Workflow integration</li>
                <li>• Decision support</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>

            <p className="text-slate-300 leading-relaxed">
              The technologies change. The underlying challenge does not.
              Organizations still need clarity. They still need trusted
              guidance. They still need help understanding how technology fits
              into their environment, workflows, objectives, and people.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Whether the conversation is about infrastructure, cybersecurity,
              cloud platforms, or artificial intelligence, the goal remains the
              same: reducing complexity, building understanding, and helping
              organizations move forward with confidence.
            </p>
          </div>
        </section>

        {/* Strategic Foundation */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Strategic Foundation
          </p>

          <h2 className="mb-12 text-3xl font-bold">
            The Themes That Have Defined My Work
          </h2>

<p className="max-w-4xl text-slate-300 leading-relaxed">
  Throughout my career, regardless of role, industry focus, or technology
  trend, several themes have remained consistent.
</p>

<p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
  Whether supporting enterprise customers, collaborating with engineering
  teams, presenting technical solutions, or advising executives, the
  underlying objective has always been the same: understand the problem,
  create clarity, and help organizations make informed decisions.
</p>

<p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
  These themes became the foundation for every role that followed and
  continue to influence how I approach technology, customer engagement,
  and business strategy today.
  
</p>

<div className="mt-10 grid gap-6 md:grid-cols-3">            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Customer Understanding
              </h3>
              <p className="text-slate-400">
                Understanding operational challenges, customer priorities, and
                real-world outcomes through enterprise support, escalation
                leadership, and customer advocacy.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Voice of the Customer</li>
                <li>• Enterprise Escalations</li>
                <li>• Product Feedback Loops</li>
                <li>• Operational Intelligence</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Technical Leadership
              </h3>
              <p className="text-slate-400">
                Building trust through workshops, demonstrations, webinars,
                conferences, customer education, and public technical
                presentations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Technical Workshops</li>
                <li>• Product Demonstrations</li>
                <li>• Public Speaking</li>
                <li>• Industry Events</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Business Alignment
              </h3>
              <p className="text-slate-400">
                Helping organizations connect technical capabilities with
                strategic objectives through solutions engineering, advisory
                engagements, and executive conversations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Solutions Engineering</li>
                <li>• Executive Engagement</li>
                <li>• Industry Advisory</li>
                <li>• Customer Lifecycle Guidance</li>
              </ul>
            </div>
          </div>
        </section>

<div className={calloutClass}>
  <h3 className="mb-3 text-xl font-semibold">
    Strategic Perspective
  </h3>

  <p className="text-slate-300 leading-relaxed">
    These themes have remained consistent throughout every stage of my
    career. Whether working in support, engineering collaboration,
    customer education, solutions consulting, or executive advisory
    engagements, the objective has always been the same: understand the
    problem, create clarity, and help organizations move forward with
    confidence.
  </p>
</div>

        {/* Understanding Problems */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Understanding Problems
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Understanding Problems Before Solving Them
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            Long before I was presenting solutions, leading workshops, or
            advising executives, I spent years working directly with the people
            responsible for keeping critical systems running. Those experiences
            provided a front-row seat to operational challenges, business
            pressures, and technical realities organizations face every day.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            From enterprise administrators and network engineers to IT directors
            and security leaders, I learned that successful technology outcomes
            rarely begin with products. They begin with understanding
            operational challenges, business priorities, technical constraints,
            and the people responsible for making decisions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Customer Advocacy
              </h3>
              <p className="text-slate-400">
                Worked directly with enterprise customers supporting network
                monitoring, infrastructure management, and operational
                visibility platforms.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Trusted escalation resource for enterprise customers</li>
                <li>• Advocated customer priorities to engineering teams</li>
                <li>• Helped translate field challenges into product feedback</li>
                <li>• Supported product quality through release validation</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Product & Engineering Partnership
              </h3>
              <p className="text-slate-400">
                Operated close to engineering and product teams, creating a
                direct feedback path between customer experience and product
                development.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Bridged communication between customers and engineering</li>
                <li>• Helped isolate and reproduce complex product issues</li>
                <li>• Supported customer adoption during Dorian integration</li>
                <li>• Expanded support readiness during MOVEit integration</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Learning Through Customer Conversations
              </h3>
              <p className="text-slate-400">
                Thousands of customer interactions helped shape a deeper
                understanding of how organizations evaluate, adopt, and depend
                on technology.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Learned how organizations evaluate technology risk</li>
                <li>• Observed operational priorities across industries</li>
                <li>• Developed fluency in reliability and continuity concerns</li>
                <li>• Gained exposure to compliance-driven decision making</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              Technology problems are rarely just technology problems. Behind
              every ticket, escalation, outage, deployment, or modernization
              effort are people trying to make informed decisions in complex
              environments.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Understanding those environments first became the foundation for
              customer education, solutions engineering, executive advisory
              conversations, and the work that followed.
            </p>
          </div>
        </section>

        {/* A Different Kind of Support */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            A Different Kind of Support
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Embedded in Research & Development
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            Products succeed or fail based on the relationship between
            customers, engineering, product management, documentation, adoption,
            and support.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Being embedded in R&D provided visibility into all of those
            perspectives simultaneously and fundamentally changed how I think
            about technology.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            This structure created a direct connection between customer
            experience and product development. Customer challenges, feature
            requests, operational realities, and deployment feedback flowed
            directly into engineering conversations rather than being filtered
            through multiple organizational layers.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Customer Connection
              </h3>
              <p className="text-slate-400">
                Support was not isolated from product development. Customer
                realities were part of the product conversation.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Direct customer feedback loops</li>
                <li>• Enterprise escalation insight</li>
                <li>• Field deployment realities</li>
                <li>• Operational impact awareness</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Product Collaboration
              </h3>
              <p className="text-slate-400">
                Working inside R&D created regular exposure to the teams
                responsible for building, validating, documenting, and improving
                the product.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Development collaboration</li>
                <li>• QA and release validation</li>
                <li>• Product management exposure</li>
                <li>• Documentation alignment</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Usability & Adoption
              </h3>
              <p className="text-slate-400">
                Customer usability sessions provided insight into how users
                navigated new features, interpreted workflows, and adopted
                technology in real environments.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Customer observation sessions</li>
                <li>• Feature validation</li>
                <li>• Workflow analysis</li>
                <li>• Adoption behavior insight</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              The real value of this experience was not technical support alone.
              It was gaining visibility into the relationship between customers,
              products, and engineering teams. Working inside R&D while
              maintaining direct customer engagement provided a perspective that
              shaped every role that followed.
            </p>
          </div>
        </section>

        {/* Creating Clarity */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Creating Clarity
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Translating Complexity Into Clarity
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            Understanding technology is only part of the challenge. Helping
            others understand it is where trust is built.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Technical concepts become valuable when people can connect them to
            practical outcomes. Customer workshops, webinars, live
            demonstrations, industry conferences, analyst briefings, and
            executive discussions all required the same skill: turning complexity
            into clarity.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Whether presenting to administrators, engineers, directors, or
            executive stakeholders, the goal remains the same: reduce
            complexity, create clarity, and help people make informed decisions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Technical Workshops
              </h3>
              <p className="text-slate-400">
                Delivered in-person and virtual technical education sessions
                designed to help customers understand platform capabilities,
                deployment considerations, operational workflows, and emerging
                technologies.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Customer workshops</li>
                <li>• Technical training sessions</li>
                <li>• Product education programs</li>
                <li>• Hands-on demonstrations</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Public Technical Presentations
              </h3>
              <p className="text-slate-400">
                Presented technical concepts to diverse audiences through
                webinars, product demonstrations, industry events, and analyst
                engagements.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Webinar presentations</li>
                <li>• Product demonstrations</li>
                <li>• Tech Field Day participation</li>
                <li>• Industry speaking engagements</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Communicating Across Audiences
              </h3>
              <p className="text-slate-400">
                Different audiences require different levels of technical depth.
                The work is not just explaining technology. It is making the
                explanation useful to the person making the decision.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Administrators and engineers</li>
                <li>• IT leadership</li>
                <li>• Security teams</li>
                <li>• Executive stakeholders</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              Technology creates value only when people understand how it
              applies to their environment. Translating technical complexity into
              clear, actionable guidance became a defining theme across customer
              education, solutions engineering, executive advisory engagements,
              and industry representation.
            </p>
          </div>
        </section>

        {/* Customer Lifecycle */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Customer Lifecycle
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Representing Both Sides of the Conversation
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            I have had the opportunity to work on both sides of the customer
            relationship.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            In support and customer advocacy roles, the responsibility was
            understanding customer challenges, helping organizations resolve
            issues, and ensuring critical systems remained operational.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            In solutions engineering and advisory roles, the focus shifted toward
            helping organizations evaluate technology, align solutions with
            business objectives, and make informed investment decisions.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            While the objectives differed, both roles depended on the same
            foundation: trust, credibility, and the ability to translate
            complexity into clarity.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Voice of the Customer
              </h3>
              <p className="text-slate-400">
                Years spent working directly with customers provided a front-row
                seat to operational realities, deployment challenges, business
                priorities, and the consequences of technology decisions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Enterprise support and escalations</li>
                <li>• Customer advocacy</li>
                <li>• Operational visibility</li>
                <li>• Product feedback</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Voice of the Company
              </h3>
              <p className="text-slate-400">
                As a Solutions Engineer, I became responsible for representing
                technical strategy, product capabilities, and business value
                while helping organizations evaluate new approaches.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Solutions engineering</li>
                <li>• Executive presentations</li>
                <li>• Technical demonstrations</li>
                <li>• Strategic advisory discussions</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Full Lifecycle Perspective
              </h3>
              <p className="text-slate-400">
                Having worked across adoption, support, modernization, and
                expansion initiatives, I gained visibility into the complete
                customer lifecycle.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Evaluation and selection</li>
                <li>• Deployment and adoption</li>
                <li>• Operational success</li>
                <li>• Long-term partnership growth</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              Experiencing both sides of the customer relationship created a
              broader perspective than either support or sales alone. It provided
              an understanding of how organizations evaluate technology, how
              they implement it, how they depend on it, and how long-term trust
              is built over time.
            </p>
          </div>
        </section>

        {/* Organizational Perspective */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Organizational Perspective
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Understanding Organizations, Not Just Technology
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            Technology decisions are rarely made by technology alone.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Successful projects depend as much on organizational alignment,
            communication, priorities, and stakeholder engagement as they do on
            technical capabilities.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            My Master's in Management reinforced many of the lessons I was
            already seeing firsthand. Organizational behavior, cross-functional
            collaboration, leadership dynamics, and decision-making processes all
            play a role in how technology is evaluated, adopted, and supported.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Different groups often view the same challenge through different
            lenses. Effective outcomes require understanding those perspectives
            and helping create alignment around shared objectives.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Cross-Functional Thinking
              </h3>
              <p className="text-slate-400">
                Understanding how different teams interpret the same problem
                through their own responsibilities, pressures, and success
                measures.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Organizational behavior</li>
                <li>• Team dynamics</li>
                <li>• Stakeholder alignment</li>
                <li>• Communication across groups</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Technology Adoption
              </h3>
              <p className="text-slate-400">
                Seeing technology adoption as a human and organizational
                challenge, not simply a deployment or implementation activity.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Change management</li>
                <li>• User adoption</li>
                <li>• Process alignment</li>
                <li>• Business readiness</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Decision Making
              </h3>
              <p className="text-slate-400">
                Learning how competing priorities, risk considerations, and
                organizational constraints shape technology decisions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Competing priorities</li>
                <li>• Risk evaluation</li>
                <li>• Organizational constraints</li>
                <li>• Strategic objectives</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              The most successful technology initiatives are rarely determined
              by technology alone. Understanding how organizations make
              decisions, manage change, and align stakeholders became just as
              important as understanding the platforms themselves.
            </p>
          </div>
        </section>

        {/* Customer Engagement & Adoption */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Customer Engagement & Adoption
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Technology Only Creates Value When People Use It
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            During the early growth of enterprise web technologies,
            organizations faced a challenge that was not purely technical. They
            knew the internet would change how they operated, but many struggled
            to understand how to adopt new platforms effectively.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            The same pattern appears with every major technology wave. Success is
            rarely determined by whether a technology works. Success depends on
            whether people understand how that technology fits into their
            environment, processes, and business objectives.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Customer workshops, demonstrations, training sessions, conference
            engagements, and direct customer interactions all helped bridge the
            gap between technical capability and practical adoption.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Those adoption challenges closely resemble what organizations face
            with AI today. The technology itself is rarely the biggest obstacle.
            The challenge is helping people understand where it fits, how it
            creates value, and how to confidently integrate it into existing
            workflows.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Customer Education
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Technical workshops</li>
                <li>• Customer training sessions</li>
                <li>• Product education programs</li>
                <li>• Hands-on demonstrations</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Technology Adoption
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Platform onboarding</li>
                <li>• Change management support</li>
                <li>• Operational alignment</li>
                <li>• User enablement</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Modern AI Parallel
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Ambiguity reduction</li>
                <li>• Guided adoption</li>
                <li>• Workflow integration</li>
                <li>• Trust through clarity</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              Adoption challenges are not new. The tools change, but
              organizations still need help moving from uncertainty to confident
              action.
            </p>
          </div>
        </section>

        {/* Customer Experience + Product Strategy */}
        <section className="mt-24">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Customer Experience + Product Strategy
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Where Customer Experience Meets Product Strategy
          </h2>

          <p className="max-w-4xl text-slate-300 leading-relaxed">
            Products do not succeed because engineering builds them. Products
            succeed when customers can adopt them, trust them, and integrate
            them into their daily operations.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            Working within an R&D organization provided visibility into both
            sides of that equation. Customers experienced the product in
            production. Engineering evolved the product. Product management
            balanced priorities. Documentation enabled adoption. Support
            connected those groups together.
          </p>

          <p className="mt-4 max-w-4xl text-slate-400 leading-relaxed">
            That environment reinforced a lesson that continues to shape how I
            approach technology today: successful outcomes require alignment
            between technical capability and human reality.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Customer Reality
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Escalations and operational feedback</li>
                <li>• Adoption challenges</li>
                <li>• Feature requests</li>
                <li>• Real-world deployment realities</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                Voice of the Product
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Engineering priorities</li>
                <li>• Release readiness</li>
                <li>• Product strategy discussions</li>
                <li>• Technical trade-offs</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-4 text-xl font-semibold">
                The Translation Layer
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Converting customer challenges into actionable insight</li>
                <li>• Helping engineering understand operational impact</li>
                <li>• Supporting successful adoption</li>
                <li>• Connecting business needs to technical execution</li>
              </ul>
            </div>
          </div>

          <div className={calloutClass}>
            <h3 className="mb-3 text-xl font-semibold">Strategic Perspective</h3>
            <p className="text-slate-300 leading-relaxed">
              Organizations often separate customer-facing teams from product
              teams. Working at the intersection of both created a deeper
              understanding of how products evolve, how adoption succeeds, and
              how technology decisions are made.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
That perspective became the foundation for solutions engineering, executive advisory work, and a broader philosophy centered on guided intelligence—helping organizations and individuals navigate complexity, reduce ambiguity, and move forward with confidence.            </p>
          </div>
        </section>
      </div>
      </main>
    </>
  );
}
