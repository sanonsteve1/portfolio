// Direction artistique : Cartographie d’impact — réseau ouest-africain animé.
import { useReducedMotion } from "framer-motion";

const NODES = [
  { id: "tunis", label: "Tunis", sub: "IoT · formation", x: 228, y: 52, delay: "0.4s" },
  { id: "ouaga", label: "Ouagadougou", sub: "Base opérationnelle", x: 176, y: 218, delay: "0.2s", hub: true },
  { id: "abidjan", label: "Abidjan", sub: "Plateformes & e-Visa", x: 108, y: 318, delay: "0.7s" },
  { id: "cotonou", label: "Cotonou", sub: "SIG · électrification", x: 248, y: 342, delay: "0.9s" },
];

export function NetworkMap() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full min-h-[380px] overflow-hidden rounded-[1.35rem] bg-[#12151a]">
      <svg
        viewBox="0 0 360 420"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="atlasGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#0F6B5C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#12151a" stopOpacity="0" />
          </radialGradient>
          <pattern id="atlasGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0F6B5C" strokeOpacity="0.18" strokeWidth="0.6" />
          </pattern>
        </defs>

        <rect width="360" height="420" fill="url(#atlasGlow)" />
        <rect width="360" height="420" fill="url(#atlasGrid)" />

        {/* Contours abstraits du territoire */}
        <path
          d="M90 70 C140 40 230 30 280 78 C310 130 300 190 270 240 C300 290 290 350 230 380 C160 400 90 360 70 300 C40 230 50 140 90 70 Z"
          fill="none"
          stroke="#0F6B5C"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          pathLength={1}
          className={reduce ? undefined : "draw-path"}
        />

        <path
          d="M176 218 C176 160 210 90 228 52"
          fill="none"
          stroke="#C45C3E"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
          className={reduce ? undefined : "draw-path"}
          style={{ animationDelay: "0.35s" }}
        />
        <path
          d="M176 218 C150 260 128 292 108 318"
          fill="none"
          stroke="#7EB8AB"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
          className={reduce ? undefined : "draw-path"}
          style={{ animationDelay: "0.55s" }}
        />
        <path
          d="M176 218 C210 270 236 312 248 342"
          fill="none"
          stroke="#7EB8AB"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
          className={reduce ? undefined : "draw-path"}
          style={{ animationDelay: "0.7s" }}
        />

        {NODES.map((node) => (
          <g key={node.id} transform={`translate(${node.x} ${node.y})`}>
            {node.hub && !reduce && (
              <circle r="18" fill="none" stroke="#0F6B5C" strokeWidth="1" className="origin-center" style={{ animation: "pulse-ring 2.4s ease-out infinite" }} />
            )}
            <circle r={node.hub ? 6 : 4} fill={node.hub ? "#C45C3E" : "#0F6B5C"} />
            <circle r={node.hub ? 6 : 4} fill="none" stroke="#F3EEE4" strokeWidth="1" />
          </g>
        ))}
      </svg>

      {NODES.map((node) => (
        <div
          key={node.id}
          className="absolute hidden sm:block"
          style={{
            left: `${(node.x / 360) * 100}%`,
            top: `${(node.y / 420) * 100}%`,
            transform: node.x > 200 ? "translate(12px, -18px)" : "translate(-108px, -18px)",
          }}
        >
          <div className="rounded-md border border-white/10 bg-black/55 px-2 py-1 backdrop-blur-md">
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#E4F1ED]">{node.label}</div>
            <div className="font-mono text-[9px] text-white/55">{node.sub}</div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
          12°22'N / 01°31'W · Burkina Faso
        </div>
        <span className="rounded bg-[#0F6B5C] px-2 py-1 font-mono text-[10px] font-medium tracking-wider text-white">
          RÉSEAU ACTIF
        </span>
      </div>
    </div>
  );
}
