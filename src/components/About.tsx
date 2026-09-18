import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const timeline = [
  {
    when: "2025",
    what: "Início em Análise e Desenvolvimento de Sistemas na UNIBRA. Primeiras APIs em Java e Spring Boot.",
  },
  {
    when: "nov/2025",
    what: "Estágio Full Stack na Marques Consult: sistemas de gestão em saúde em produção, com NestJS, Next.js e PostgreSQL.",
  },
  {
    when: "2026",
    what: "Projetos próprios em Clean Architecture e microsserviços; liderança técnica no sistema da Amigos do Nordeste.",
  },
  {
    when: "2027",
    what: "Previsão de conclusão do curso. Meta: consolidar a base e evoluir para júnior com foco em backend.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="border-b border-line"
      aria-labelledby="sobre-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
        <Reveal className="lg:col-span-3">
          <SectionLabel index="01" label="Sobre" />
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-5">
          <h2
            id="sobre-title"
            className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
          >
            Aprendo no ritmo de quem já mantém sistema em{" "}
            <span className="italic text-copper">produção</span>.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-2 sm:text-lg">
            <p>
              Sou desenvolvedor full stack, estagiário na Marques Consult desde
              novembro de 2025, onde trabalho em sistemas de missão crítica no
              setor de gestão em saúde — aplicações corporativas usadas por
              vários serviços internos. No dia a dia investigo inconsistências
              em relatórios de dados clínicos com SQL, corrijo bugs e implemento
              novos relatórios com NestJS e Next.js.
            </p>
            <p>
              Comecei em Java e Spring Boot, e é neles que faço meus projetos de
              estudo: microsserviços com Spring Cloud, uma API de clínica com
              RBAC e rate limiting, e o sistema de cadastro de famílias da
              Amigos do Nordeste, onde lidero a arquitetura. Curso Análise e
              Desenvolvimento de Sistemas na UNIBRA, com conclusão prevista para
              2027.
            </p>
            <p>
              O que me move é entender por que as coisas quebram e como
              deixá-las mais estáveis, testáveis e prontas para crescer. Meu
              objetivo é transformar essa vivência em uma base sólida: primeiro
              como júnior, depois como engenheiro backend sênior.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-10">
          <ol className="border-t border-line">
            {timeline.map((t) => (
              <li
                key={t.when}
                className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line py-4"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                  {t.when}
                </span>
                <span className="text-sm leading-relaxed text-ink-2">
                  {t.what}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
