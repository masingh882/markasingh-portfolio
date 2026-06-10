import { webinars } from "../data/webinars";
import { events } from "../data/events";
import { projects } from "../data/projects";

const evidenceItems = [...webinars, ...events, ...projects];

export default function PortfolioPage() {
  return (
    <main>
      <section>
        <p>Public Portfolio</p>
        <h1>Mark A. Singh</h1>
        <p>
          Solutions Engineer • Technical Advisor • Product Educator • Builder
        </p>
        <p>
          Public evidence of customer-facing technical leadership, product
          education, industry presence, and builder/operator experience.
        </p>
      </section>

      <section>
        <h2>Proof Pillars</h2>
        <ul>
          <li>Customer-Facing Technical Leadership</li>
          <li>Product & Engineering Proximity</li>
          <li>Industry & Field Presence</li>
          <li>Builder & Operator Experience</li>
        </ul>
      </section>

      <section>
        <h2>Evidence Library</h2>

        {evidenceItems.map((item) => (
          <article key={item.title}>
            <p>{item.category}</p>
            <h3>{item.title}</h3>
            <p>{item.year}</p>
            <p>{item.description}</p>

            {item.url && (
              <a href={item.url} target="_blank" rel="noreferrer">
                View Evidence
              </a>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}