import { portfolioItems } from "../data/portfolio";

export default function PortfolioPage() {
  return (
    <main>
      <section>
        <h1>Public Technical Portfolio</h1>
        <p>
          Selected public webinars, technical demonstrations, articles, and
          presentations showing customer education, product expertise, and
          solution engineering experience.
        </p>
      </section>

      <section>
        {portfolioItems.map((item) => (
          <article key={item.title}>
            <p>{item.category}</p>
            <h2>{item.title}</h2>
            <p>{item.year}</p>

            <a href={item.url} target="_blank" rel="noreferrer">
              View
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}