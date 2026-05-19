import { projects } from "../../../content/site";
import EmptyState from "./EmptyState";
import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  const hasProjects = projects.length > 0;

  return (
    <section id="portfolio" className="w-full bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle subtitle="MY WORKS" title="Featured Portfolios" />

        {hasProjects ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <PortfolioItem
                key={project.title}
                image={project.image}
                title={project.title}
                tag={project.tag}
                period={project.period}
                description={project.description}
                href={project.href}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Portfolio projects are being prepared"
            description="Selected projects will appear here once the case studies, links, and visuals are ready to publish."
          />
        )}
      </div>
    </section>
  );
}
