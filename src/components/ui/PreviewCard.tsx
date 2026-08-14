interface ProjectPreviewCardProps {
  label: string;
  gradientClass: string;
  rotation: number;
  className?: string;
}

/** Angled project screenshot card used to flank the hero headline. */
export default function ProjectPreviewCard({
  label,
  gradientClass,
  rotation,
  className = "",
}: ProjectPreviewCardProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`h-64 w-40 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm transition-transform duration-500 hover:rotate-0 ${className}`}
    >
      {/* Replace with <Image src="/projects/..." fill className="object-cover" alt={label} /> */}
      <div className={`flex h-full w-full items-end p-3 ${gradientClass}`}>
        <span className="text-xs font-medium text-white/90">{label}</span>
      </div>
    </div>
  );
}