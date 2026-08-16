import { useState } from "react";
import { FileDown, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { asset } from "@/lib/asset";

const DETAILS = [
  {
    href: "mailto:sanonsteve1@gmail.com",
    icon: Mail,
    label: "E-mail",
    value: "sanonsteve1@gmail.com",
  },
  {
    href: "tel:+22674064010",
    icon: Phone,
    label: "Téléphone",
    value: "+226 74 06 40 10",
  },
];

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Merci de remplir tous les champs.");
      return;
    }

    if (!SCRIPT_URL) {
      const subject = encodeURIComponent(`Contact — ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
      window.location.href = `mailto:sanonsteve1@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setSending(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      toast.success("Message envoyé. Je vous réponds sous 24 h.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("L’envoi a échoué. Réessayez ou écrivez-moi directement.");
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    "relative z-10 w-full rounded-lg border-2 border-signal/35 bg-void/55 px-4 py-3.5 text-base text-ink outline-none transition-[border-color] duration-200 placeholder:text-ink/40 focus:border-signal [touch-action:manipulation]";

  return (
    <div className="relative min-h-full">
      <div className="contact-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="face-shell relative">
        <div className="mb-4 flex shrink-0 flex-wrap items-end justify-between gap-3">
          <h2 className="heading-rule text-2xl font-bold text-balance text-ink sm:text-3xl lg:text-4xl">Contact</h2>
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-signal uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Disponible
          </p>
        </div>

        <div className="grid min-h-0 flex-1 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:overflow-hidden">
          <div className="flex min-h-0 flex-col">
            <h3 className="mb-2 text-xl font-semibold text-balance text-ink sm:text-2xl lg:text-3xl">Lançons le projet</h3>
            <p className="mb-5 max-w-md text-pretty text-sm leading-relaxed text-ink/75 sm:text-base">
              Missions en Afrique de l’Ouest et à l’international — Web, mobile, IoT et SIG, de l’analyse à la livraison.
            </p>

            <div className="flex flex-col gap-3 lg:min-h-0 lg:flex-1 lg:justify-evenly">
              {DETAILS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex min-h-14 items-center gap-3 rounded-2xl bg-panel px-3 py-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45),0_0_0_1px_var(--hairline)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(0,171,240,0.25),0_0_0_1px_var(--signal)] active:scale-[0.96] sm:min-h-[4.5rem] sm:gap-4 sm:px-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-signal text-signal sm:h-12 sm:w-12">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold tracking-[0.16em] text-ink/50 uppercase">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-ink group-hover:text-signal sm:text-base">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="flex min-h-14 items-center gap-3 rounded-2xl bg-panel px-3 py-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45),0_0_0_1px_var(--hairline)] sm:min-h-[4.5rem] sm:gap-4 sm:px-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 border-signal text-signal sm:h-12 sm:w-12">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold tracking-[0.16em] text-ink/50 uppercase">
                    Localisation
                  </span>
                  <span className="block text-sm font-medium text-ink sm:text-base">Ouagadougou, Burkina Faso</span>
                  <span className="mt-0.5 block font-mono text-[11px] tabular-nums tracking-wide text-signal/80">
                    12.3714° N · 1.5197° W
                  </span>
                </span>
              </div>
            </div>

            <a
              href={asset("CV_Steve_Sanon_ETC_2026.docx")}
              download
              className="btn-fill btn-fill-ghost mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-signal px-5 text-base font-semibold text-signal transition-[color,transform] duration-200 hover:text-on-signal active:scale-[0.96]"
            >
              <FileDown className="h-4 w-4" />
              Télécharger le CV
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative z-10 flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] bg-panel p-4 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.55),0_0_0_1px_var(--hairline)] sm:min-h-[26rem] sm:p-5 lg:min-h-0 lg:flex-1"
          >
            <ContactRadar />
            <div className="relative mb-4 flex items-end justify-between gap-3">
              <p className="text-sm font-semibold tracking-[0.16em] text-signal uppercase">Écrire un message</p>
              <span className="hidden text-[11px] tracking-wide text-ink/40 sm:inline">Réponse sous 24 h</span>
            </div>
            <div className="relative grid gap-3 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-name">
                Nom
              </label>
              <input
                id="contact-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nom"
                autoComplete="name"
                className={fieldClass}
              />
              <label className="sr-only" htmlFor="contact-email">
                E-mail
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="E-mail"
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <label className="sr-only" htmlFor="contact-message">
              Votre besoin
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Votre besoin"
              className={`${fieldClass} relative mt-3 min-h-28 flex-1 resize-none`}
            />
            <button
              type="submit"
              disabled={sending}
              className="btn-fill btn-fill-solid relative mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-signal bg-signal px-6 text-base font-semibold text-on-signal transition-[color,transform] duration-200 hover:text-signal active:scale-[0.96] disabled:pointer-events-none disabled:opacity-60"
            >
              {sending ? "Envoi…" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactRadar() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="pointer-events-none absolute -right-8 -top-10 h-44 w-44 text-signal opacity-[0.22]"
      aria-hidden="true"
    >
      <circle cx="110" cy="110" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="110" r="68" fill="none" stroke="currentColor" strokeWidth="1" className="ring-breathe" />
      <circle cx="110" cy="110" r="96" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <g className="orbit-slow" style={{ transformOrigin: "110px 110px" }}>
        <circle cx="110" cy="110" r="68" fill="none" stroke="currentColor" strokeDasharray="3 12" />
        <circle cx="178" cy="110" r="3.5" fill="currentColor" />
      </g>
      <circle cx="110" cy="110" r="3" fill="currentColor" />
    </svg>
  );
}
