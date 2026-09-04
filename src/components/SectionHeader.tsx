import { ReactNode } from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  meta?: ReactNode;
}

export default function SectionHeader({ number, title, meta }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-edge pb-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-bold text-accent2">§{number}</span>
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      </div>
      {meta && (
        <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-soft">
          {meta}
        </span>
      )}
    </div>
  );
}
