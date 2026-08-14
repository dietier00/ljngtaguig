import { cn } from "@/lib/utils";
import Reveal from "@/components/animations/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-400">
        <span className="h-px w-8 bg-cyan-400/60" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}