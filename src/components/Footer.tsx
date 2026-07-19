import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg font-semibold tracking-tight">
          {site.brand}
        </p>
        <p className="text-sm text-muted">
          © {year} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
