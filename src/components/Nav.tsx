import Link from "next/link";
import { site } from "@/data/site";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#stack", label: "stack" },
  { href: "#projetos", label: "projetos" },
  { href: "#contato", label: "contato" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="font-display text-xl tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-copper">.</span>
        </Link>

        <nav aria-label="Seções" className="hidden items-center gap-6 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2 transition-colors hover:text-copper"
            >
              <span className="mr-1.5 text-copper">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
