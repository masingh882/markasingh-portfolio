import Link from "next/link";
import SiteNav from "../../components/SiteNav";

const sections = [
  {
    title: "Leadership Through Growth",
    body: [
      "For more than a decade, I held formal leadership responsibilities across technical support organizations supporting network management, secure file transfer, and messaging platforms.",
      "My responsibilities included hiring, coaching, performance management, career development, resource planning, escalation leadership, compensation advocacy, and coordination across engineering, QA, product management, documentation, sales, and executive leadership.",
      "My leadership journey began as a Team Lead before progressing into management responsibilities supporting multi-product technical organizations. Over time, I led teams supporting technologies including WhatsUp Gold, WS_FTP, MOVEit, and related products, helping engineers grow while balancing customer needs, business priorities, and organizational change.",
      "While products, technologies, and organizational structures evolved over the years, one lesson remained constant: organizations scale through people.",
      "Some of my proudest accomplishments are not products launched or projects completed, but the people who advanced into larger technical and leadership roles after joining my teams.",
    ],
  },
  {
    title: "Hiring for Potential",
    body: [
      "One of the most important lessons I learned as a manager was that talent is not always reflected in a résumé.",
      "Throughout my leadership career, I frequently looked beyond traditional credentials and focused on qualities such as curiosity, accountability, communication skills, customer empathy, and problem-solving ability.",
      "Several individuals who joined my teams from non-traditional backgrounds went on to build successful careers in technical support, quality assurance, software development, and leadership roles.",
      "I learned early that hiring for potential often creates opportunities that hiring solely for experience can miss. Technical skills can be taught. Curiosity, integrity, and the desire to learn are much harder to develop.",
    ],
  },
  {
    title: "Developing Multi-Product Expertise",
    body: [
      "As our teams evolved, I encouraged engineers to expand beyond a single product and develop expertise across multiple technologies.",
      "At various points, our organizations supported WhatsUp Gold, WS_FTP, MOVEit, and other technologies across multiple teams. While organizational structures often favored specialization, I believed broader technical understanding created stronger engineers and more resilient organizations.",
      "Cross-training improved collaboration, increased organizational flexibility, and created new career opportunities for team members capable of taking on larger responsibilities.",
      "Many of the individuals who embraced that broader approach later advanced into QA, development, and other technical leadership positions.",
    ],
  },
  {
    title: "Advocating for the Team",
    body: [
      "Leadership is not only about accountability downward. It is also about advocacy upward.",
      "One of the most memorable leadership lessons of my career occurred during a major organizational restructuring. Following a company reorganization, support responsibilities were divided across newly formed business units. While those organizations were still being established, my team continued supporting workloads that spanned multiple product groups.",
      "When compensation decisions were later calculated according to divisional structures rather than actual team contributions, I believed the outcome did not accurately reflect the work my team had performed.",
      "I advocated on behalf of my team because leadership requires more than managing performance. It requires ensuring that contributions are recognized fairly and that the people doing the work have someone willing to represent their interests.",
      "Several months later, the team ultimately received the compensation recognition they had earned. More important than the outcome, however, was the principle behind it.",
      "The experience reinforced a leadership lesson that has remained with me throughout my career: people remember whether their leaders stand with them when difficult decisions are made.",
    ],
  },
  {
    title: "Leading Through Organizational Change",
    body: [
      "Over the course of my career, I helped teams navigate acquisitions, product integrations, organizational restructuring, global support expansion, and evolving operational models.",
      "Examples included supporting the integration of MOVEit following acquisition, supporting the integration of Dorian technologies into the broader support ecosystem, coordinating geographically distributed support operations, and supporting customers across North America, Europe, Asia, Latin America, Africa, and Australia.",
      "These experiences reinforced that the greatest challenge during organizational change is rarely technology itself. The challenge is helping people maintain clarity, trust, and alignment while change is taking place.",
    ],
  },
  {
    title: "Building Alignment Across Teams",
    body: [
      "Much of my leadership experience existed at the intersection of customers, support, engineering, product management, and business operations.",
      "Whether coordinating major customer escalations, supporting product integrations, helping teams navigate organizational transitions, or serving as a voice for customers within engineering discussions, my role often involved creating shared understanding between groups with different priorities and perspectives.",
      "One example involved coordinating resources across support and engineering teams to address complex customer challenges where technical resolution required collaboration across organizational boundaries.",
      "Looking back, a common thread throughout my career has been helping people move from ambiguity to alignment.",
      "That philosophy continues to shape how I approach leadership, technology, customer engagement, and business challenges today.",
    ],
  },
];

export default function DevelopingPeopleBuildingTeamsPage() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#020617] px-6 py-32 text-slate-100">
        <section className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Developing People & Building Teams
          </h1>

          <p className="mt-6 text-xl font-semibold leading-8 text-cyan-300">
            Technology changes quickly, but organizations succeed through people.
          </p>

          <p className="mt-6 text-base leading-7 text-slate-300">
            Throughout my career, I have focused on identifying potential,
            developing technical talent, building cross-functional teams, and
            helping organizations navigate change.
          </p>
        </section>

        <section className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-bold text-white">
              Leadership Highlights
            </h2>

            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              <p>• Team Lead and early people leadership</p>
              <p>• Multi-product technical support management</p>
              <p>• Hiring, coaching, reviews, and development plans</p>
              <p>• Support leadership through organizational change</p>
              <p>• Acquisition and product integration support</p>
              <p>• Cross-functional coordination with R&D and Sales</p>
            </div>
          </div>
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
              Technology evolves constantly. Human challenges are far more
              consistent. Organizations succeed when people understand the
              problem, align around the objective, and work together toward a
              common outcome.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Much of my career has been spent helping create that alignment:
              between people and opportunity, between teams and priorities, and
              between customers and the organizations serving them.
            </p>
          </div>
        </section>

                <section className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-bold text-white">Related Story</h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Leadership rarely happens in isolation. Much of my management
              experience was shaped by working inside a broader R&D organization
              where customer needs, engineering priorities, product strategy,
              and organizational objectives had to remain aligned.
            </p>

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