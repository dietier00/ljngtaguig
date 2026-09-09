import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800" id="about">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          <SectionHeading
                  eyebrow="01 — About"
                  title="A little about me."
                  description="A quick overview of who I am, what I do, and the kind of problems I enjoy solving."
                />       

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-xl leading-8 text-zinc-800 dark:text-zinc-200"
              style={{ fontFamily: "epic" }}
              >
              An Information Systems graduate with hands-on experience in web development, data analysis,
              database management, and business process optimization.
            </p>
          </div>

          <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Focusing on solving real business problems, cleaning data, building dynamic dashboard,
              and creating automated reports that save time and insights for both business and stakeholders.
            </p>

            <p>
              My hobby is playing some SQL games such as DataLemur, SQLNoir-- I also play some Excel games
              like ExcelExerices and ExceJet. I also enjoy playing some online games like Dota2, MLBB, or any other strategy games.
              I love running/jogging and playing badminton and football.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}