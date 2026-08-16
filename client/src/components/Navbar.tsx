import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCube, type CubeFace } from "@/components/CubeScene";
import { ThemeToggle } from "@/components/ThemeToggle";
import { asset } from "@/lib/asset";

const LINKS: { name: string; face: CubeFace }[] = [
  { name: "Accueil", face: "home" },
  { name: "À propos", face: "about" },
  { name: "Projets", face: "projects" },
  { name: "Parcours", face: "path" },
  { name: "Contact", face: "contact" },
];

export function Navbar() {
  const { face, setFace } = useCube();
  const [open, setOpen] = useState(false);

  const go = (next: CubeFace) => {
    setFace(next);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--hairline)] bg-void">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => go("home")}
          className="shrink-0 text-lg font-bold tracking-tight text-ink transition-[color,transform] duration-200 hover:text-signal active:scale-[0.96] sm:text-xl"
        >
          Steve Sanon<span className="text-signal">.</span>
        </button>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-2">
          {LINKS.map((link) => (
            <button
              key={link.face}
              type="button"
              onClick={() => go(link.face)}
              className={cn(
                "relative min-h-10 px-2.5 text-sm font-semibold transition-colors duration-200 xl:px-3.5 xl:text-[0.95rem]",
                face === link.face ? "text-signal" : "text-ink hover:text-signal"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute right-3 bottom-1 left-3 h-[2px] rounded-full bg-signal transition-[opacity,transform] duration-200",
                  face === link.face ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                )}
              />
            </button>
          ))}
          <a
            href={asset("CV_Steve_Sanon_ETC_2026.docx")}
            download
            className="ml-2 inline-flex min-h-10 items-center rounded-lg border-2 border-signal px-3 text-sm font-semibold text-signal transition-[color,background-color,transform] duration-200 hover:bg-signal hover:text-on-signal active:scale-[0.96]"
          >
            CV
          </a>
          <ThemeToggle className="ml-1" />
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative flex min-h-10 min-w-10 items-center justify-center text-ink"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={cn(
                "absolute transition-[opacity,filter,scale] duration-300 [transition-timing-function:cubic-bezier(0.2,0,0,1)]",
                open ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"
              )}
            >
              <X className="h-7 w-7" />
            </span>
            <span
              className={cn(
                "transition-[opacity,filter,scale] duration-300 [transition-timing-function:cubic-bezier(0.2,0,0,1)]",
                open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
              )}
            >
              <Menu className="h-7 w-7" />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-void transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96 border-b border-[var(--hairline)]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-5 pb-5">
          {LINKS.map((link) => (
            <button
              key={link.face}
              type="button"
              onClick={() => go(link.face)}
              className={cn(
                "min-h-11 py-2 text-left text-base font-medium",
                face === link.face ? "text-signal" : "text-ink"
              )}
            >
              {link.name}
            </button>
          ))}
          <a
            href={asset("CV_Steve_Sanon_ETC_2026.docx")}
            download
            onClick={() => setOpen(false)}
            className="min-h-11 py-2 text-base font-medium text-signal"
          >
            Télécharger le CV
          </a>
        </nav>
      </div>
    </header>
  );
}
