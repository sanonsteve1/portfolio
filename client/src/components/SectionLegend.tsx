// Direction artistique : Cartographie d’impact — légende latérale et repérage de section.
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "intro", index: "01", label: "Intro" },
  { id: "expertise", index: "02", label: "Expertise" },
  { id: "projets", index: "03", label: "Projets" },
  { id: "parcours", index: "04", label: "Parcours" },
  { id: "certifications", index: "05", label: "Formation" },
  { id: "contact", index: "06", label: "Contact" },
];

export function SectionLegend() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <nav
      aria-label="Légende de page"
      className="pointer-events-none fixed top-1/2 left-5 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto space-y-1 border-l border-[#DDD4C4] pl-3">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "group flex min-h-10 items-center gap-3 py-1 font-mono text-[11px] tracking-wider uppercase transition-[color,transform] duration-200",
                  isActive ? "text-[#0F6B5C]" : "text-[#4A4F57]/70 hover:text-[#16181D]"
                )}
              >
                <span
                  className={cn(
                    "block h-px w-4 transition-[width,background-color] duration-200",
                    isActive ? "w-8 bg-[#0F6B5C]" : "bg-[#DDD4C4] group-hover:w-6"
                  )}
                />
                <span className="tabular-nums">{section.index}</span>
                <span>{section.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M8 22 L8 10 L16 6 L24 10 L24 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16 L24 22 L16 26 L8 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
    </svg>
  );
}
