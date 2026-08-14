import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "muted";
}

export default function Badge({
  children,
  className,
  tone = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        tone === "default" &&
          "border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300",
        tone === "accent" &&
          "border-cyan-400/30 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300",
        tone === "muted" &&
          "border-transparent bg-zinc-100 text-zinc-500 dark:bg-zinc-800/60 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </span>
  );
}
