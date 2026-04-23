"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ease, viewportOnce } from "@/lib/motion";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-[var(--space-section)] bg-bg-raised">
      <div className="container-gutter">
        <SectionHeader
          index="02"
          label="Capabilities"
          title={
            <>
              Tools I reach for
              <br />
              <span className="italic text-fg-muted">without thinking.</span>
            </>
          }
          description="A working, opinionated toolkit — grouped by where it lives. Most of what I ship is some composition of these."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease, delay: gi * 0.12 }}
              className="relative flex flex-col gap-8 p-8 border border-border bg-bg-elevated/50 hover:bg-bg-elevated hover:border-border-bright transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[length:var(--text-2xl)] text-fg">
                  {group.title}
                </span>
                <span className="font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-dim">
                  {String(gi + 1).padStart(2, "0")} · {group.kind}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{
                      duration: 0.5,
                      ease,
                      delay: gi * 0.12 + 0.2 + i * 0.04,
                    }}
                    className="px-3 py-1.5 text-[length:var(--text-sm)] text-fg-muted border border-border hover:border-accent hover:text-fg transition-colors duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                aria-hidden
                className="absolute left-0 top-0 h-px bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={viewportOnce}
                transition={{ duration: 1.2, ease, delay: gi * 0.12 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
