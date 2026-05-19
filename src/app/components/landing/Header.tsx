import { navigation, site } from "../../../content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-ink/90 px-6 py-5 backdrop-blur md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {site.name}
        </a>
        <nav className="flex flex-wrap items-center gap-4 text-sm md:gap-7">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
