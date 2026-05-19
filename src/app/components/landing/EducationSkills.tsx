import { certifications, education, languages, skills } from "../../../content/site";
import EmptyState from "./EmptyState";

export default function EducationSkills() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-6 bg-brand" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">CREDENTIALS</p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Education, Skills & Languages</h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-10">
            <div className="space-y-8">
              {education.length > 0 ? (
                education.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="h-4 w-4 shrink-0 rounded-full bg-slate-200" />
                      {index < education.length - 1 && <div className="mt-2 h-full w-px bg-slate-200" />}
                    </div>
                    <div className="space-y-2 pb-8">
                      <h3 className="font-semibold text-slate-950">{item.title}</h3>
                      <p className="text-sm leading-7 text-slate-600">{item.subtitle}</p>
                      <p className="text-sm font-semibold text-slate-950">{item.period}</p>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  title="Education details are being prepared"
                  description="Education and training history will appear here once the details are ready to publish."
                />
              )}
            </div>

            <div className="rounded-2xl bg-soft p-6">
              <h3 className="mb-4 font-semibold text-slate-950">Certifications</h3>
              {certifications.length > 0 ? (
                <div className="space-y-4">
                  {certifications.map((certification) => (
                    <article
                      key={`${certification.title}-${certification.issued}`}
                      className="space-y-1 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <h4 className="text-sm font-semibold text-slate-950">{certification.title}</h4>
                      <p className="text-sm text-slate-600">{certification.issuer}</p>
                      <p className="text-xs font-medium text-slate-500">Issued {certification.issued}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="Certifications are being prepared"
                  description="Courses and certifications will appear here once they are ready to publish."
                />
              )}
            </div>

            <div className="rounded-2xl bg-soft p-6">
              <h3 className="mb-4 font-semibold text-slate-950">Languages</h3>
              {languages.length > 0 ? (
                <div className="space-y-3">
                  {languages.map((language) => (
                    <div key={language.label} className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-slate-950">{language.label}</span>
                      <span className="text-right text-slate-600">{language.level}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="Languages are being prepared" description="Language proficiency details will appear here once they are ready." />
              )}
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-sm leading-7 text-slate-600">
              My strongest work is at the intersection of iOS architecture, product delivery, team enablement, and quality
              practices that let mobile teams move faster without making the codebase harder to maintain.
            </p>

            {skills.length > 0 ? (
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-950">{skill.label}</span>
                      <span className="text-xs font-medium text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-lilac">
                      <div className="h-full rounded-full bg-brand" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState title="Skills are being prepared" description="Technical strengths will appear here once the skill list is ready." />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
