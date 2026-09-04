import { useState } from "react";
import {
  Copy,
  Check,
  FileText,
  Download,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader
        number="07"
        title="Contact & Connect"
        meta={
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent2" />
            {PERSONAL_INFO.location.toUpperCase()}
          </span>
        }
      />

      <div className="max-w-3xl space-y-4 py-8">
        <h3 className="text-2xl font-extrabold leading-tight text-ink sm:text-4xl">
          Building something impactful, or need a full-stack developer who ships real products?
        </h3>
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{PERSONAL_INFO.status}. Whether it's a
          question, an internship, or a freelance project — I'll get back to you.</p>
      </div>

      {/* Email bar */}
      <div className="pb-8 pt-2">
        <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-edge bg-white p-1.5 text-bg sm:inline-flex sm:w-auto sm:flex-row sm:gap-0">
          <div className="w-full break-all px-4 py-2 text-center font-mono text-xs sm:w-auto sm:text-sm">
            {PERSONAL_INFO.email}
          </div>
          <button
            onClick={handleCopyEmail}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-bg px-4 py-2 font-mono text-xs font-semibold text-white transition-colors hover:bg-accent2 hover:text-black sm:w-auto"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Resume */}
      <div className="space-y-3 border-b border-edge pb-10 pt-4">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-dim">Résumé</span>
        <a
          href={PERSONAL_INFO.resumeUrl}
          download="Ammar_Shaikh_Resume.pdf"
          className="group flex items-center justify-between rounded-xl border border-edge p-3.5 transition-all hover:bg-glass sm:max-w-sm sm:p-4"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-edge bg-white/5 p-2.5 text-ink">
              <FileText className="h-5 w-5 text-accent2" />
            </div>
            <div>
              <div className="text-sm font-bold text-ink transition-colors group-hover:text-accent2">
                Full Stack Developer résumé
              </div>
              <div className="font-mono text-[11px] text-ink-dim">PDF • DOWNLOAD</div>
            </div>
          </div>
          <Download className="h-4 w-4 text-ink-dim transition-colors group-hover:text-ink" />
        </a>
      </div>

      {/* Channels + form */}
      <div className="grid grid-cols-1 gap-8 pt-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <h4 className="text-base font-bold text-ink">Direct Channels</h4>
          <div className="space-y-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-edge p-3.5 font-mono text-xs text-ink transition-all hover:bg-glass sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-2.5 text-emerald-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold transition-colors group-hover:text-emerald-400">
                    WhatsApp Chat
                  </div>
                  <div className="font-mono text-[11px] text-ink-dim">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-edge p-3.5 font-mono text-xs text-ink transition-all hover:bg-glass sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-sky-400/20 bg-sky-400/10 p-2.5 text-sky-400">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold transition-colors group-hover:text-sky-400">
                    LinkedIn Profile
                  </div>
                  <div className="font-mono text-[11px] text-ink-dim">{PERSONAL_INFO.linkedinUsername}</div>
                </div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-edge p-3.5 font-mono text-xs text-ink transition-all hover:bg-glass sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/20 bg-white/10 p-2.5 text-ink">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold transition-colors group-hover:text-accent2">
                    GitHub Repositories
                  </div>
                  <div className="font-mono text-[11px] text-ink-dim">github.com/{PERSONAL_INFO.githubUsername}</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h4 className="mb-4 text-base font-bold text-ink">Send a Direct Message</h4>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="font-mono text-xs text-ink-dim">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Riya Kulkarni"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-lg border border-edge bg-glass-soft px-3.5 py-2.5 font-mono text-xs text-ink placeholder:text-ink-dim focus:border-accent2 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-xs text-ink-dim">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. you@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-lg border border-edge bg-glass-soft px-3.5 py-2.5 font-mono text-xs text-ink placeholder:text-ink-dim focus:border-accent2 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs text-ink-dim">Subject</label>
              <input
                type="text"
                placeholder="e.g. Internship Opportunity"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full rounded-lg border border-edge bg-glass-soft px-3.5 py-2.5 font-mono text-xs text-ink placeholder:text-ink-dim focus:border-accent2 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs text-ink-dim">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Write your note or project description..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full rounded-lg border border-edge bg-glass-soft px-3.5 py-2.5 font-mono text-xs text-ink placeholder:text-ink-dim focus:border-accent2 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 font-mono text-xs font-bold uppercase tracking-wider text-bg transition-colors hover:bg-white/85"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
