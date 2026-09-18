import { projects } from "@/data/projects";
import { ProjectRow } from "./ProjectRow";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  return (
    <section
      id="projetos"
      className="border-b border-line"
      aria-labelledby="projetos-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel index="03" label="Projetos" />
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-7">
            <h2
              id="projetos-title"
              className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
            >
              Cases: o problema, o que fiz e o que{" "}
              <span className="italic text-copper">mudou</span>.
            </h2>
            <p className="mt-4 max-w-lg text-ink-2">
              Projetos de estudo e um sistema real a caminho de produção. Clique
              em cada linha para abrir o detalhe.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} as="div" className="mt-14">
          <ul className="border-t border-ink">
            {projects.map((p, i) => (
              <ProjectRow key={p.slug} project={p} defaultOpen={i === 0} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
