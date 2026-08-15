export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-10">

        <p>
          © {new Date().getFullYear()} LJ ng Taguig
        </p>

        <div className="flex gap-6">
          <a
            href="#home"
            className="transition-colors hover:text-foreground"
          >
            Back to top
          </a>

          <a
            href="https://github.com/dietier00"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>

        </div>

      </div>
    </footer>
  );
}