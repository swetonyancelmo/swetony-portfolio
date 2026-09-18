import { site } from "@/data/site";

export function Hero() {
  // Animação de entrada em CSS puro (classe .rise): não depende de hidratação,
  // então o h1 (elemento LCP) pinta assim que a fonte chega.
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
      aria-labelledby="hero-title"
    >
      <div
        className="grid-lines pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-28">
        {/* Coluna principal */}
        <div className="lg:col-span-8">
          <p
            style={{ animationDelay: "0s" }}
            className="rise mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-2"
          >
            {site.role} <span className="text-copper">/</span> estagiário na{" "}
            {site.company} <span className="text-copper">/</span> ADS · UNIBRA
          </p>

          <h1
            id="hero-title"
            style={{ animationDelay: "0.08s" }}
            className="rise font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em]"
          >
            {site.name.split(" ")[0]}
            <br />
            <span className="italic text-ink-2">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p
            style={{ animationDelay: "0.18s" }}
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl"
          >
            {site.tagline}
          </p>

          <div
            style={{ animationDelay: "0.28s" }}
            className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a href="#projetos" className="link-copper font-display text-2xl">
              Ver projetos <span aria-hidden>→</span>
            </a>
            <a
              href="#contato"
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-2 transition-colors hover:text-copper"
            >
              ou fale comigo <span aria-hidden>↘</span>
            </a>
          </div>
        </div>

        {/* Bloco "status do sistema" */}
        <aside
          style={{ animationDelay: "0.36s" }}
          className="rise self-end lg:col-span-4"
          aria-label="Resumo rápido"
        >
          <div className="border border-line bg-surface p-5 font-mono text-[12px] leading-6">
            <div className="mb-3 flex items-center justify-between border-b border-line pb-3 text-[10px] uppercase tracking-[0.18em] text-ink-2">
              <span>status.yaml</span>
              <span className="flex items-center gap-1.5 text-olive">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-olive" />
                online
              </span>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
              <dt className="text-ink-2">stack:</dt>
              <dd>nestjs · next.js · typeorm · postgres</dd>
              <dt className="text-ink-2">setor:</dt>
              <dd>gestão em saúde · desde {site.companySince}</dd>
              <dt className="text-ink-2">projetos:</dt>
              <dd>java 21 · spring boot · spring cloud</dd>
              <dt className="text-ink-2">estudando:</dt>
              <dd>clean arch · microsserviços · k8s</dd>
              <dt className="text-ink-2">objetivo:</dt>
              <dd>estagiário → backend sênior</dd>
              <dt className="text-ink-2">estado:</dt>
              <dd className="text-copper">{site.status}</dd>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
