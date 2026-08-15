import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    period: "2026",
    role: "IT / Software Development Intern",
    company: "Company Name",
    description:
      "Worked on internal applications, data visualization, automation, and system development.",
  },

  {
    period: "2025",
    role: "Student Developer",
    company: "Academic / Personal Projects",
    description:
      "Designed and developed web applications using modern frontend and backend technologies.",
  },
];

export default function Experience() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        <SectionHeading
          eyebrow="03 — Experience"
          title="Where I've worked."
        />

        <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">

          {experiences.map((experience) => (
            <div
              key={`${experience.period}-${experience.role}`}
              className="grid gap-6 py-10 md:grid-cols-[150px_1fr]"
            >
              <span className="text-sm text-zinc-500">
                {experience.period}
              </span>

              <div>
                <h3 className="text-2xl font-semibold">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {experience.company}
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}