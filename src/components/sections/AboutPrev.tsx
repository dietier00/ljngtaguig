import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        <SectionHeading
          eyebrow="01 — About"
          title="A little about me."
          description="A quick overview of who I am, what I do, and the kind of problems I enjoy solving."
        />

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-xl leading-8 text-zinc-800 dark:text-zinc-200">
              I'm an Information Systems graduate focused on software
              development, interface design, and building practical digital
              solutions.
            </p>
          </div>

          <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              I enjoy working across both design and development, from
              planning an interface to implementing the underlying system.
            </p>

            <p>
              My interests include web development, UI/UX, data-driven
              applications, and interactive experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}