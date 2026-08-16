import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex min-h-dvh items-center justify-center bg-void px-6 text-center">
      <div>
        <p className="mb-3 text-sm font-semibold text-signal">404</p>
        <h1 className="mb-4 text-3xl font-bold text-ink">Page introuvable</h1>
        <button
          onClick={() => setLocation("/")}
          className="text-sm text-ink/70 transition-colors duration-200 hover:text-signal"
        >
          Retour à l’accueil
        </button>
      </div>
    </div>
  );
}
