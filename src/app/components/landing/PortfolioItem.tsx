import svgPaths from "../../../imports/svg-aqdowdil4a";
import Wrapper from "./Wrapper";

export default function PortfolioItem({
  image,
  title,
  tag,
  period,
  description,
  href,
}: {
  image: string;
  title: string;
  tag: string;
  period: string;
  description: string;
  href: string;
}) {
  const isExternalLink = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={`Open ${title}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
      rel={isExternalLink ? "noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
    >
      <article>
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/10" />
        </div>

        <div className="space-y-4 border-t border-slate-100 p-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
            <p className="text-sm leading-7 text-slate-600">{description}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                {period}
              </span>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                {tag}
              </span>
            </div>
            <span className="rounded-full p-2 text-slate-500 transition-colors group-hover:text-brand">
            <Wrapper additionalClassNames="w-5 h-5">
              <g id="Link">
                <path d={svgPaths.p3b3152d0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.518958" />
              </g>
            </Wrapper>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
