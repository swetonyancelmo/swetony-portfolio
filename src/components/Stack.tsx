import { depthHint, depthLabel, stack, type Depth } from "@/data/stack";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const depthStyle: Record<Depth, string> = {
  producao: "bg-olive-soft text-olive",
  projetos: "bg-copper-soft text-copper",
  estudo: "border border-line text-ink-2",
};

export function Stack() {
  return (
    <section
      id="stack"
      className="border-b border-line"
      aria-labelledby="stack-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel index="02" label="Stack técnica" />
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6">
            <h2
              id="stack-title"
              className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
            >
              Ferramentas, separadas pelo que{" "}
              <span className="italic">realmente</span> uso.
            </h2>
            <p className="mt-4 max-w-lg text-ink-2">
              Não é uma parede de logos. Cada linha diz onde eu de fato usei
              aquilo — e o que ainda é estudo fica marcado como estudo.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <dl className="space-y-2.5">
              {(Object.keys(depthLabel) as Depth[]).map((d) => (
                <div
                  key={d}
                  className="grid grid-cols-[auto_1fr] items-start gap-3"
                >
                  <dt
                    className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${depthStyle[d]}`}
                  >
                    {depthLabel[d]}
                  </dt>
                  <dd className="pt-1 text-xs leading-relaxed text-ink-2">
                    {depthHint[d]}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {stack.map((cat, ci) => (
            <Reveal key={cat.id} delay={0.05 * ci} as="div">
              <h3 className="flex items-baseline justify-between border-b border-ink pb-3 font-display text-2xl">
                <span>{cat.title}</span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-2">
                  {String(ci + 1).padStart(2, "0")}
                </span>
              </h3>
              <ul>
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-3 transition-colors hover:bg-surface"
                  >
                    <div className="min-w-0">
                      <span className="font-medium">{item.name}</span>
                      {item.note && (
                        <span className="ml-2 hidden text-sm text-ink-2 sm:inline">
                          — {item.note}
                        </span>
                      )}
                    </div>
                    <span
                      className={`whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] ${depthStyle[item.depth]}`}
                    >
                      {depthLabel[item.depth]}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
