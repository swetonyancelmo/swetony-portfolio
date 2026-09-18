"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], { text: string; cls: string }> = {
  producao: { text: "em produção", cls: "text-olive" },
  "em-andamento": { text: "em andamento", cls: "text-copper" },
  estudo: { text: "estudo", cls: "text-ink-2" },
};

export function ProjectRow({
  project,
  defaultOpen = false,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const panelId = `project-${project.slug}`;
  const status = statusLabel[project.status];

  return (
    <li className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 text-left transition-colors hover:bg-surface sm:grid-cols-[3.5rem_1fr_8rem_2rem] sm:py-8"
      >
        <span className="font-mono text-[11px] tracking-[0.16em] text-copper">
          {project.index}
        </span>
        <span className="min-w-0">
          <span className="block font-display text-2xl leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </span>
          <span className="mt-1.5 block text-sm text-ink-2 sm:text-base">
            {project.summary}
          </span>
        </span>
        <span
          className={`hidden font-mono text-[10px] uppercase tracking-[0.14em] sm:block ${status.cls}`}
        >
          {status.text}
          <span className="mt-1 block text-ink-2">{project.year}</span>
        </span>
        <span
          aria-hidden
          className="justify-self-end font-display text-2xl text-ink-2 transition-transform duration-300 group-hover:text-copper"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 pb-10 pl-0 sm:pl-[calc(3.5rem+1rem)] lg:grid-cols-12">
              {project.image && (
                <div className="relative aspect-[16/9] overflow-hidden border border-line bg-surface lg:col-span-12">
                  <Image
                    src={project.image}
                    alt={`Captura do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2 lg:col-span-12">
                <span className="text-copper">papel:</span> {project.role}
              </p>

              <Block label="Problema" className="lg:col-span-4">
                {project.problem}
              </Block>
              <Block label="Solução" className="lg:col-span-4">
                {project.solution}
              </Block>
              <Block label="Resultado" className="lg:col-span-4">
                {project.result}
              </Block>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 lg:col-span-12">
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="Stack do projeto"
                >
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {project.links && (
                  <ul className="flex gap-5">
                    {project.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-copper font-mono text-[11px] uppercase tracking-[0.16em]"
                        >
                          {l.label} <span aria-hidden>↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function Block({
  label,
  children,
  className,
}: {
  label: string;
  children: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
        {label}
      </h3>
      <p className="text-sm leading-relaxed text-ink-2 sm:text-base">
        {children}
      </p>
    </div>
  );
}
