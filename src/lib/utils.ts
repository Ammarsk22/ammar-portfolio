export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Standard easing used across the site: a slow-out cinematic curve. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Prefixes a public/ path with Vite's base URL so assets resolve on GitHub Pages. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\.?\//, "")}`;
}
