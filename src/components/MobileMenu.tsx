"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type Link = { href: string; label: string };

const subscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

export function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const mounted = useMounted();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-copper"
      >
        <span
          aria-hidden
          className="absolute h-px w-4 bg-current transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "translateY(-3px)" }}
        />
        <span
          aria-hidden
          className="absolute h-px w-4 bg-current transition-transform duration-300"
          style={{ transform: open ? "rotate(-45deg)" : "translateY(3px)" }}
        />
      </button>

      {/* Portal: o backdrop-blur do header criaria um containing block para o painel fixed */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.nav
                id="mobile-nav"
                aria-label="Seções"
                key="menu"
                initial={reduce ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-x-0 top-14 bottom-0 z-30 border-t border-line bg-bg px-4 py-6 sm:px-6"
              >
                <ol>
                  {links.map((l, i) => (
                    <li key={l.href} className="border-b border-line">
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-5"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-[11px] tracking-[0.16em] text-copper">
                            0{i + 1}
                          </span>
                          <span className="font-display text-3xl tracking-tight">
                            {l.label}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="font-display text-xl text-ink-2"
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </motion.nav>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
