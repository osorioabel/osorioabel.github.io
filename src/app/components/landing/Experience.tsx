import { useState } from "react";
import svgPaths from "../../../imports/svg-aqdowdil4a";
import { experience } from "../../../content/site";
import EmptyState from "./EmptyState";
import Wrapper from "./Wrapper";

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentExperience = experience[selectedIndex];
  const hasExperience = experience.length > 0;

  return (
    <section id="experience" className="w-full bg-soft px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-6 bg-brand" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">CAREER PATH</p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Work Experience</h2>
          </div>
        </div>

        {hasExperience && currentExperience ? (
          <div className="grid gap-8 md:grid-cols-[300px_1fr] md:gap-12">
            <div className="space-y-2">
              {experience.map((item, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={item.company}
                    className={`w-full rounded-xl px-6 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                      isSelected ? "bg-white font-semibold text-brand shadow-sm" : "bg-transparent text-slate-700 hover:bg-white/60"
                    }`}
                    onClick={() => setSelectedIndex(index)}
                    type="button"
                  >
                    {item.company}
                    {isSelected && (
                      <Wrapper additionalClassNames="w-4 h-4 inline-block ml-2">
                        <g id="right">
                          <path d={svgPaths.pdfd66d0} stroke="#7E74F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.518958" />
                        </g>
                      </Wrapper>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">
                  {currentExperience.role} <span className="underline">{currentExperience.company}</span>
                </h3>
                <p className="text-sm text-slate-500">{currentExperience.location}</p>
                <p className="mt-1 text-sm text-slate-500">{currentExperience.period}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentExperience.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-6">
                <ul className="space-y-3">
                  {currentExperience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <div className="mt-3 h-0.5 w-3 shrink-0 bg-brand" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <EmptyState
            title="Experience details are being prepared"
            description="Career history will appear here once the roles, responsibilities, and highlights are ready to publish."
          />
        )}
      </div>
    </section>
  );
}
