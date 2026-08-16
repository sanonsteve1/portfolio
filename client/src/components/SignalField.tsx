// Signal calme — champ radar, unique motif visuel lié au SIG.
export function SignalField() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-[18%] rounded-full bg-[#5EEAD4]/15 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full" aria-hidden="true">
        <circle cx="200" cy="200" r="70" fill="none" stroke="#5EEAD4" strokeOpacity="0.14" className="ring-breathe" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#5EEAD4" strokeOpacity="0.12" />
        <circle cx="200" cy="200" r="168" fill="none" stroke="#5EEAD4" strokeOpacity="0.08" />
        <g className="orbit-slow">
          <circle cx="200" cy="200" r="120" fill="none" stroke="#5EEAD4" strokeOpacity="0.28" strokeDasharray="4 14" />
          <circle cx="320" cy="200" r="4" fill="#5EEAD4" />
          <circle cx="126" cy="280" r="3" fill="#5EEAD4" fillOpacity="0.7" />
        </g>
        <circle cx="200" cy="200" r="5" fill="#5EEAD4" />
      </svg>
    </div>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="25" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}
