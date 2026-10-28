import { Cloud, Code, Layers, Sparkles, Smartphone, Target, LucideIcon } from "lucide-react";
import { MINDSET_PILLARS, PERSONAL_INFO } from "../data/portfolioData";
import { asset } from "../lib/utils";
import SectionHeader from "../components/SectionHeader";
import BackgroundVideo from "../components/BackgroundVideo";

const ICONS: Record<string, LucideIcon> = { Code, Smartphone, Cloud, Layers, Target, Sparkles };

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="About me" />

        {/* Video panel: stays dark in both themes so the text always has contrast */}
        <div className="theme-dark relative mt-10 overflow-hidden rounded-3xl bg-bg text-ink">
          <BackgroundVideo src={asset("media/about-bg.mp4")} poster={asset("media/about-poster.webp")} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/45" aria-hidden="true" />

          <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <div>
              <p className="font-serif-italic text-3xl leading-snug sm:text-[2.5rem] sm:leading-[1.15]">
                Growing from vanilla JS foundations into a full-stack React engineer.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-[17px]">
                {PERSONAL_INFO.bio}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                  Offline-first architecture and Firestore data design
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                  Role-based auth and secure client-side flows
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                  Responsive, installable UI across devices
                </li>
              </ul>
            </div>

            <dl className="self-end divide-y divide-ink/15 border-y border-ink/15">
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-sm text-ink-dim">{stat.label}</dt>
                  <dd className="text-right">
                    <span className="block font-display text-lg font-bold">{stat.value}</span>
                    <span className="block text-xs text-ink-soft">{stat.sub}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <h3 className="mt-16 font-display text-2xl font-bold sm:text-3xl">What I care about as a developer</h3>
        <ul className="mt-6 grid grid-cols-1 gap-x-14 sm:grid-cols-2">
          {MINDSET_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.iconName] ?? Sparkles;
            return (
              <li key={pillar.id} className="flex items-start gap-4 border-t border-edge py-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent2-soft text-accent2">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold">{pillar.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
