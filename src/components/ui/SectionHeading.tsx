type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
        {eyebrow}
      </p>

      <h2
        className="text-4xl font-bold tracking-tight md:text-6xl"
        style={{ fontFamily: "astra" }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400"
          style={{ fontFamily: "opti" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}