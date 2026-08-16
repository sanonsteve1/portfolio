export function Footer() {
  return (
    <p className="pointer-events-none fixed right-4 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 text-[10px] text-ink/40 sm:right-10 sm:text-xs">
      Ouagadougou · {new Date().getFullYear()}
    </p>
  );
}
