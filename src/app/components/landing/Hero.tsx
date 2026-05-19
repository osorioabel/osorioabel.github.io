import { site } from "../../../content/site";
import SocialMedia from "./SocialMedia";

export default function Hero() {
  return (
    <section id="top" className="w-full px-6 py-14 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-6 bg-brand" />
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">Senior Software Developer</p>
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                {site.name}
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {site.description}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#portfolio"
                className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                View work
              </a>
              <a
                href="#blog"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                Read writing
              </a>
              <SocialMedia variant="light" />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute h-72 w-64 -rotate-6 rounded-2xl bg-brand md:h-96 md:w-80"
              style={{ transform: "rotate(-9.545deg)" }}
            />
            <div className="relative z-10 h-72 w-64 overflow-hidden rounded-2xl bg-lilac p-3 shadow-2xl ring-1 ring-white/20 md:h-80 md:w-72">
              <img
                src={site.portraitImage}
                alt="Portrait of Abel Osorio"
                className="h-full w-full rounded-xl object-cover object-[50%_18%] contrast-105 saturate-95"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-3 rounded-xl bg-gradient-to-t from-ink/20 via-transparent to-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
