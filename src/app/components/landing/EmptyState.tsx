type EmptyStateProps = {
  eyebrow?: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
};

export default function EmptyState({ eyebrow = "Coming soon", title, description, variant = "light" }: EmptyStateProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-2xl border border-dashed px-6 py-10 text-center md:px-10 md:py-14 ${
        isDark ? "border-white/20 bg-white/5" : "border-slate-300 bg-soft"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? "text-lilac" : "text-brand"}`}>{eyebrow}</p>
      <h3 className={`mt-3 text-xl font-semibold tracking-tight md:text-2xl ${isDark ? "text-white" : "text-slate-950"}`}>{title}</h3>
      <p className={`mx-auto mt-3 max-w-2xl text-sm leading-7 ${isDark ? "text-white/70" : "text-slate-600"}`}>{description}</p>
    </div>
  );
}
