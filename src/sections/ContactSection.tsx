import { useState } from "react";
import { Check, Copy, Download, FileText, Github, Linkedin, MapPin, MessageSquare, Send } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { asset } from "../lib/utils";
import SectionHeader from "../components/SectionHeader";

type Status = "idle" | "sending" | "sent" | "failed" | "mailto";

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};
const EMAILJS_READY = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

const FIELD =
  "w-full rounded-lg border border-edge bg-glass-soft px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-dim focus:border-accent2 focus:outline-none";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard can be blocked; the address is still visible to copy by hand */
    }
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || "your portfolio"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot: real visitors never fill this hidden field
    if (!form.email || !form.message) return;

    // Without EmailJS keys the form opens the visitor's email app instead.
    if (!EMAILJS_READY) {
      openMailClient();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: {
            from_name: form.name || "Portfolio visitor",
            reply_to: form.email,
            subject: form.subject || "New message from your portfolio",
            message: form.message,
          },
        }),
      });
      if (!res.ok) throw new Error(`EmailJS responded ${res.status}`);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setStatus("failed");
    }
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [key]: e.target.value });
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  return (
    <section id="contact" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Let's work together"
          intro={`${PERSONAL_INFO.status}. Whether it's a question, an internship or a freelance project, I'll get back to you.`}
        />

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink-soft">
          <MapPin className="h-4 w-4 text-accent2" aria-hidden="true" />
          {PERSONAL_INFO.location}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            {/* Email */}
            <div>
              <h3 className="font-display text-lg font-bold">Email</h3>
              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-edge p-1.5 pl-4">
                <span className="break-all text-sm">{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-ink px-3.5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <span className="sr-only" role="status">
                {copied ? "Email address copied" : ""}
              </span>
            </div>

            {/* Channels */}
            <div>
              <h3 className="font-display text-lg font-bold">Find me online</h3>
              <ul className="mt-3 divide-y divide-edge border-y border-edge">
                {[
                  { label: "WhatsApp", detail: PERSONAL_INFO.phone, href: PERSONAL_INFO.whatsappUrl, Icon: MessageSquare },
                  { label: "LinkedIn", detail: PERSONAL_INFO.linkedinUsername, href: PERSONAL_INFO.linkedinUrl, Icon: Linkedin },
                  { label: "GitHub", detail: `github.com/${PERSONAL_INFO.githubUsername}`, href: PERSONAL_INFO.githubUrl, Icon: Github },
                ].map(({ label, detail, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 py-3.5"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-accent2" aria-hidden="true" />
                      <span>
                        <span className="block text-sm font-semibold transition-colors group-hover:text-accent2">
                          {label}
                        </span>
                        <span className="block text-xs text-ink-dim">{detail}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Résumé */}
            <a
              href={asset(PERSONAL_INFO.resumeUrl)}
              download="Ammar_Shaikh_Resume.pdf"
              className="group flex items-center justify-between rounded-xl border border-edge p-4 transition-colors hover:bg-glass"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-accent2" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold">Full Stack Developer résumé</span>
                  <span className="block text-xs text-ink-dim">PDF download</span>
                </span>
              </span>
              <Download className="h-4 w-4 text-ink-dim transition-colors group-hover:text-ink" aria-hidden="true" />
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-lg font-bold">Send a message</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm text-ink-soft">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Riya Kulkarni"
                    value={form.name}
                    onChange={update("name")}
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm text-ink-soft">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={update("email")}
                    className={FIELD}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm text-ink-soft">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Internship opportunity"
                  value={form.subject}
                  onChange={update("subject")}
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm text-ink-soft">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder="Tell me about the role or project."
                  value={form.message}
                  onChange={update("message")}
                  className={FIELD}
                />
              </div>

              {/* Honeypot, hidden from people and screen readers */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Leave this empty</label>
                <input
                  id="contact-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={update("website")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85 disabled:opacity-60"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <p className="min-h-[1.5rem] text-sm" role="status" aria-live="polite">
                {status === "sent" && (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Message sent. I'll reply to the email you gave.
                  </span>
                )}
                {status === "mailto" && (
                  <span className="text-ink-soft">Your email app should open with the message ready to send.</span>
                )}
                {status === "failed" && (
                  <span className="text-accent2">
                    The message didn't send. Email me directly at{" "}
                    <a className="underline" href={`mailto:${PERSONAL_INFO.email}`}>
                      {PERSONAL_INFO.email}
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
