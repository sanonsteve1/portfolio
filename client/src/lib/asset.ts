/** Préfixe les fichiers de `public/` pour GitHub Pages (`/portfolio/`). */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  const file = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${file}`;
}
