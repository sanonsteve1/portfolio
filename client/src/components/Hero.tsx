import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useCube } from "@/components/CubeScene";
import { easeOut, stagger } from "@/lib/motion";
import { asset } from "@/lib/asset";

const HERO_IMG = asset("hero-developer.png?v=2");

const ROLES = [
  "Full-Stack",
  "Web & Mobile",
  "IoT",
  "SIG",
  "Architecture & intégration",
];

const METIERS = [
  "Électrification",
  "Pharmacie",
  "e-Visa",
  "Banque",
  "Eau",
  "Smart Home",
];

const fade: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeOut },
  },
};

function useTypedRole(active: boolean, reduce: boolean | null) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!active) return;

    if (reduce) {
      const id = window.setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
      return () => window.clearInterval(id);
    }

    const word = ROLES[index];
    if (!deleting && text === word) {
      const pause = window.setTimeout(() => setDeleting(true), 1500);
      return () => window.clearTimeout(pause);
    }
    if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const delay = deleting ? 36 : 68;
    const tick = window.setTimeout(() => {
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => window.clearTimeout(tick);
  }, [active, deleting, index, reduce, text]);

  return reduce ? ROLES[index] : text;
}

export function Hero() {
  const { face, setFace } = useCube();
  const reduce = useReducedMotion();
  const typed = useTypedRole(face === "home", reduce);

  return (
    <div className="relative min-h-full">
      <div className="home-slash pointer-events-none absolute top-[72px] right-0 bottom-0 hidden w-[42%] overflow-hidden bg-signal xl:w-[48%] lg:block">
        <img
          src={HERO_IMG}
          alt="Illustration d’un développeur full-stack"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        />
      </div>

      <div className="face-shell relative z-10 justify-center">
        <div className="grid w-full items-center gap-6 lg:h-full lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
          <img
            src={HERO_IMG}
            alt=""
            className="h-44 w-full rounded-2xl object-cover object-[58%_center] outline outline-1 -outline-offset-1 outline-ink/10 sm:h-56 lg:hidden"
          />

          <motion.div initial={reduce ? false : "hidden"} animate="visible" variants={stagger} className="max-w-2xl">
            <motion.h1
              variants={fade}
              className="mb-2 text-[1.85rem] font-bold leading-[1.12] text-ink sm:mb-3 sm:text-4xl lg:text-[3.4rem]"
            >
              Bonjour, je suis <span className="text-signal">Steve Sanon</span>
            </motion.h1>

            <motion.h2 variants={fade} className="mb-2 text-base font-semibold text-ink sm:mb-3 sm:text-xl lg:text-2xl">
              Ingénieur informatique / Consultant IT
            </motion.h2>

            <motion.p
              variants={fade}
              className="mb-4 min-h-[1.75rem] text-base font-medium text-signal sm:mb-5 sm:text-lg lg:text-xl"
              aria-live="polite"
            >
              {reduce ? (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={typed}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="inline-block"
                  >
                    {typed}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <>
                  {typed}
                  <span className="caret-blink ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-signal align-middle" />
                </>
              )}
            </motion.p>

            <motion.div variants={fade} className="mb-4 flex flex-wrap gap-2 sm:mb-5 sm:gap-2.5">
              {METIERS.map((metier) => (
                <span
                  key={metier}
                  className="rounded-full border border-signal/40 bg-signal/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-signal uppercase sm:px-3.5 sm:py-1.5 sm:text-sm"
                >
                  {metier}
                </span>
              ))}
            </motion.div>

            <motion.p variants={fade} className="mb-5 text-sm leading-relaxed text-ink/85 sm:mb-7 sm:text-base lg:text-lg">
              Diplômé en Génie Logiciel &amp; Systèmes d’Information, avec plus de 3 ans d’expérience dans la conception,
              le développement et la mise en œuvre de solutions numériques en Afrique.
            </motion.p>

            <motion.div variants={fade} className="mb-5 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={() => setFace("projects")}
                className="btn-fill btn-fill-solid inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-signal bg-signal px-6 text-base font-semibold text-on-signal transition-[color,transform] duration-200 hover:text-signal active:scale-[0.96] sm:w-auto sm:min-w-[10rem]"
              >
                Mes projets
              </button>
              <a
                href={asset("CV_Steve_Sanon_ETC_2026.docx")}
                download
                className="btn-fill btn-fill-ghost inline-flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-signal bg-transparent px-6 text-base font-semibold text-signal transition-[color,transform] duration-200 hover:text-on-signal active:scale-[0.96] sm:w-auto sm:min-w-[10rem]"
              >
                Télécharger le CV
              </a>
            </motion.div>

            <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              <a
                href="mailto:sanonsteve1@gmail.com"
                className="inline-flex min-h-10 items-center gap-2.5 text-sm text-ink transition-colors duration-200 hover:text-signal sm:text-base"
              >
                <span className="sci-btn relative z-0 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-signal text-signal">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">sanonsteve1@gmail.com</span>
              </a>
              <a
                href="tel:+22674064010"
                className="inline-flex min-h-10 items-center gap-2.5 text-sm text-ink transition-colors duration-200 hover:text-signal sm:text-base"
              >
                <span className="sci-btn relative z-0 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-signal text-signal">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="tabular-nums">+226 74 06 40 10</span>
              </a>
            </motion.div>
          </motion.div>

          <div className="hidden h-full lg:block" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
