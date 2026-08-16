import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  if (!toggleTheme) return null;

  const light = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center text-ink transition-[color,transform] duration-200 hover:text-signal active:scale-[0.96]",
        className
      )}
      aria-label={light ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      <span
        className={cn(
          "absolute transition-[opacity,filter,scale] duration-300 [transition-timing-function:cubic-bezier(0.2,0,0,1)]",
          light ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"
        )}
      >
        <Moon className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "transition-[opacity,filter,scale] duration-300 [transition-timing-function:cubic-bezier(0.2,0,0,1)]",
          light ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
        )}
      >
        <Sun className="h-5 w-5" />
      </span>
    </button>
  );
}
