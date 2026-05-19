export default function SectionTitle({ subtitle, title, light = false }: { subtitle: string; title: string; light?: boolean }) {
  return (
    <div className="mb-12 space-y-3 text-center md:mb-16">
      <div className="flex items-center justify-center gap-4">
        <div className="h-0.5 w-6 bg-brand" />
        <p className={`text-xs uppercase tracking-[0.2em] ${light ? "text-white/55" : "text-slate-500"}`}>
          {subtitle}
        </p>
      </div>
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
    </div>
  );
}
