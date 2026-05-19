import type { ReactNode } from "react";

export default function ServiceItem({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <article className="space-y-4 rounded-2xl border border-white/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 md:p-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lilac">
        {icon}
      </div>
      <h3 className="text-center text-lg font-semibold text-slate-950">{title}</h3>
      <p className="text-center text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
