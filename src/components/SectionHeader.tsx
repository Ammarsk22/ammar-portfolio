interface SectionHeaderProps {
  title: string;
  intro?: string;
}

export default function SectionHeader({ title, intro }: SectionHeaderProps) {
  return (
    <header className="max-w-2xl">
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p>}
    </header>
  );
}
