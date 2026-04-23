"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ease, viewportOnce } from "@/lib/motion";

const facts = [
  { k: "Years coding", v: "5+" },
  { k: "Primary stack", v: "Python · TS · React" },
  { k: "Focus", v: "Full-stack · Data-viz" },
  { k: "Availability", v: "Open to projects" },
];

export function About() {
  return (
    <section id="about" className="relative py-[var(--space-section)]">
      <div className="container-gutter">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              Engineering with
              <br />
              <span className="italic text-fg-muted">intent and clarity.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-7 md:col-start-5 flex flex-col gap-6 text-[length:var(--text-lg)] text-fg-muted leading-[1.75]"
          >
            <p>
              I work across the stack — designing APIs, shaping interfaces,
              and wiring the two together so the end product feels{" "}
              <span className="text-fg">fast, readable, and considered</span>.
              Most of my day-to-day is Python on the server, TypeScript on the
              client, and whatever glue is needed in between.
            </p>
            <p>
              I&apos;m drawn to problems where the UI has to communicate
              something non-trivial — dashboards, data stories, configuration
              surfaces — which is how I ended up spending evenings with D3.
              I care about performance budgets, reduced-motion, and the small
              details that separate a shipped product from a demo.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-6 pt-8 border-t border-border">
              {facts.map((f, i) => (
                <motion.div
                  key={f.k}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.06 }}
                  className="flex flex-col gap-1"
                >
                  <span className="font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-dim">
                    {f.k}
                  </span>
                  <span className="text-fg text-[length:var(--text-base)]">
                    {f.v}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
