import { FileText, Users, CheckCircle2, BookOpen, ExternalLink } from "lucide-react";
import { RESEARCH_PUBLICATIONS } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function PublicationsSection() {
  return (
    <section id="publications" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader number="06" title="Research & Publications" meta="Peer-Reviewed Technical Papers" />

      <div className="mt-10 space-y-6">
        {RESEARCH_PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="space-y-6">
            {/* Meta line */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-edge pb-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-white/5 px-3 py-1 font-mono text-xs font-semibold text-ink">
                  <FileText className="h-3.5 w-3.5 text-accent2" />
                  {pub.paperType}
                </span>
                <span className="rounded-full border border-accent2/30 bg-accent2-soft px-3 py-1 font-mono text-xs font-bold text-accent2">
                  {pub.year}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider text-ink">{pub.status}</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold leading-snug text-ink sm:text-3xl">{pub.title}</h3>
              <div className="flex items-center gap-2 font-mono text-xs text-ink-soft sm:text-sm">
                <BookOpen className="h-4 w-4 shrink-0 text-accent2" />
                <span className="font-medium text-ink">{pub.journalOrConference}</span>
              </div>
            </div>

            {/* Authors */}
            <div className="rounded-xl border border-edge bg-glass-soft p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  <Users className="h-4 w-4 text-accent2" />
                  <span>Research Team ({pub.authors.length} Authors)</span>
                </div>
                <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-ink-soft">
                  {pub.role}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {pub.authors.map((author) => (
                  <span
                    key={author}
                    className={`rounded-lg px-3 py-1 font-mono text-xs transition-colors ${
                      author === pub.highlightAuthor
                        ? "bg-accent2 font-bold text-black"
                        : "border border-edge bg-white/5 text-ink-soft"
                    }`}
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>

            {/* Abstract */}
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">
                Abstract / Research Summary
              </div>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{pub.abstract}</p>
            </div>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">
                My Contributions
              </div>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {pub.keyHighlights.map((hl) => (
                  <li
                    key={hl}
                    className="relative flex items-start gap-2 overflow-hidden rounded-lg border border-edge bg-glass-soft p-3.5 text-xs leading-relaxed text-ink-soft"
                  >
                    <span className="mt-0.5 font-mono text-sm font-bold leading-none text-accent2">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {pub.doiOrLink && (
              <div className="pt-2">
                <a
                  href={pub.doiOrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-bg transition-colors hover:bg-white/85"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Original Publication
                </a>
              </div>
            )}

            {/* Keywords */}
            <div className="flex flex-wrap items-center gap-2 border-t border-edge pt-4">
              <span className="mr-1 font-mono text-xs text-ink-dim">KEYWORDS:</span>
              {pub.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded border border-edge bg-white/5 px-2.5 py-1 font-mono text-[11px] text-ink"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
