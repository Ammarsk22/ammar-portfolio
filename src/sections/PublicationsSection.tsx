import { BookOpen, CheckCircle2, ExternalLink, FileText } from "lucide-react";
import { RESEARCH_PUBLICATIONS } from "../data/portfolioData";
import { asset } from "../lib/utils";
import SectionHeader from "../components/SectionHeader";

export default function PublicationsSection() {
  return (
    <section id="publications" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Research"
          intro="A peer-reviewed paper I co-authored with classmates and our faculty guide."
        />

        {RESEARCH_PUBLICATIONS.map((pub) => (
          <article key={pub.id} className="mt-12 space-y-10">
            <header>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
                <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  {pub.status}
                </span>
                <span>{pub.paperType}</span>
                <span>{pub.year}</span>
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight sm:text-4xl">
                {pub.title}
              </h3>
              <p className="mt-4 flex items-start gap-2 text-sm text-ink-soft">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-accent2" aria-hidden="true" />
                {pub.journalOrConference}
              </p>
            </header>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
              <div className="space-y-8">
                <div>
                  <h4 className="font-display text-lg font-bold">Authors</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {pub.authors.map((author) => (
                      <li
                        key={author}
                        className={`rounded-lg px-3 py-1 text-sm ${
                          author === pub.highlightAuthor
                            ? "bg-accent2 font-semibold text-on-accent"
                            : "border border-edge text-ink-soft"
                        }`}
                      >
                        {author}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-ink-dim">My role: {pub.role}</p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold">Abstract</h4>
                  <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">{pub.abstract}</p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold">What I contributed</h4>
                  <ul className="mt-3 max-w-prose space-y-2">
                    {pub.keyHighlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-3 leading-relaxed text-ink-soft">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {pub.keywords.map((kw) => (
                    <li key={kw} className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-ink-soft">
                      {kw}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof: certificate preview and the documents */}
              <aside className="space-y-5">
                {pub.certificatePreview && (
                  <a
                    href={asset(pub.documents.find((d) => d.href.includes("certificate"))?.href ?? pub.certificatePreview)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-edge bg-surface"
                  >
                    <img
                      src={asset(pub.certificatePreview)}
                      alt="Certificate of Research Publication awarded to Shaikh Ammar Shaikh Vajid"
                      className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      width={1404}
                      height={993}
                    />
                  </a>
                )}

                <ul className="divide-y divide-edge border-y border-edge">
                  {pub.documents.map((doc) => (
                    <li key={doc.href}>
                      <a
                        href={asset(doc.href)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-3.5"
                      >
                        <span className="flex items-center gap-3">
                          <FileText className="h-4 w-4 shrink-0 text-accent2" aria-hidden="true" />
                          <span>
                            <span className="block text-sm font-semibold transition-colors group-hover:text-accent2">
                              {doc.label}
                            </span>
                            <span className="block text-xs text-ink-dim">{doc.meta}</span>
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                {pub.doiOrLink && (
                  <a
                    href={pub.doiOrLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    View on the JATIR website
                  </a>
                )}
              </aside>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
