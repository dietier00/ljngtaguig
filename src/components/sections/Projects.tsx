import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    number: "01",
    title: "Skye Blinds",
    category: "Web Application",
    description:
      "An e-commerce and ordering management system with analytics and AI-assisted functionality.",
    technologies: ["Laravel", "React", "MySQL"],
  },

  {
    number: "02",
    title: "Motor Pool Management",
    category: "Enterprise Application",
    description:
      "A vehicle information and maintenance management system with QR-based vehicle access.",
    technologies: ["Laravel", "React", "MySQL"],
  },

  {
    number: "03",
    title: "Portfolio",
    category: "Web Design",
    description:
      "A personal portfolio focused on interaction, motion, typography, and modern web design.",
    technologies: ["Next.js", "TypeScript", "GSAP"],
  },
];

export default function Projects() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        <SectionHeading
          eyebrow="02 — Projects"
          title="Things I've built."
          description="Selected projects showcasing my experience in development, design, and system building."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex min-h-90 flex-col justify-between rounded-2xl border border-zinc-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <div>
                <span className="text-sm text-zinc-500">
                  {project.number}
                </span>

                <p className="mt-8 text-xs uppercase tracking-widest text-zinc-500">
                  {project.category}
                </p>

                <h3
                  className="mt-2 text-3xl font-bold"
                  style={{ fontFamily: "astra" }}
                >
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}