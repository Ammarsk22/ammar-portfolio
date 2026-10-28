import { Moon, Sun } from "lucide-react";
import type { Theme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  /** "labelled" shows the target theme as text, "icon" is a compact round button. */
  variant?: "labelled" | "icon";
  className?: string;
}

export default function ThemeToggle({ theme, onToggle, variant = "icon", className }: ThemeToggleProps) {
  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  if (variant === "labelled") {
    return (
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between rounded-lg border border-edge px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-glass hover:text-ink",
          className
        )}
      >
        <span>{next === "light" ? "Light theme" : "Dark theme"}</span>
        <Icon className="h-4 w-4 text-accent2" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${next} theme`}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink transition-colors hover:bg-glass",
        className
      )}
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
    </button>
  );
}
