import SectionHeading from "../ui/SectionHeading";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "PHP",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GSAP",
  "UI/UX",
  "Figma",
];

export default function Skills() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        <SectionHeading
          eyebrow="04 — Skills"
          title="Tools I work with."
        />

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}