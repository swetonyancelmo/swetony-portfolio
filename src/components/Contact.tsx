import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const links = [
  {
    label: "GitHub",
    href: site.github,
    handle: site.github.replace("https://", ""),
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    handle: site.linkedin.replace("https://www.", ""),
  },
];

export function Contact() {
  return (
    <footer id="contato" aria-labelledby="contato-title">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <Reveal>
          <SectionLabel index="04" label="Contato" />
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <h2
            id="contato-title"
            className="font-display text-3xl leading-tight text-ink-2 sm:text-4xl"
          >
            {site.quote}
          </h2>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2">
            Tem uma vaga júnior, um projeto ou só quer trocar ideia? Chama no
            LinkedIn ou manda um e-mail.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="link-copper mt-6 inline-block break-all font-display text-[clamp(1.6rem,6vw,5rem)] leading-[1.05] tracking-[-0.02em]"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-16 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between border-b border-line pb-3 transition-colors hover:border-copper"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2">
                  {l.label}
                </span>
                <span className="mt-1 block text-sm">{l.handle}</span>
              </span>
              <span
                aria-hidden
                className="font-display text-xl text-ink-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
              >
                ↗
              </span>
            </a>
          ))}
          <div className="flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2 sm:flex-col sm:items-end sm:justify-end">
            <span>{site.location}</span>
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
