export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Standard easing used across the hero — a slow-out cinematic curve. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
