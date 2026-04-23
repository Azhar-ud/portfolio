"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { ease, lineReveal, stagger } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-28 pb-10"
      aria-label="Introduction"
    >
      <HeroBackdrop />

      <motion.div style={{ y: yParallax, opacity }} className="relative z-10 container-gutter w-full flex flex-col gap-16 flex-1 justify-center">
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-4 text-[var(--text-xs)] font-mono uppercase tracking-[0.2em] text-fg-dim">
            <RevealWord delay={0}>Portfolio</RevealWord>
            <span aria-hidden className="h-px flex-1 max-w-[120px] bg-border-bright" />
            <RevealWord delay={0.1}>2026</RevealWord>
          </div>

          <h1 className="font-display text-[length:var(--text-display)] text-fg max-w-[16ch]">
            <Line delay={0.15}>Full-stack</Line>
            <Line delay={0.28}>
              <span className="italic text-fg-muted">developer</span>{" "}
              <span className="text-accent">·</span>
            </Line>
            <Line delay={0.42}>crafting the web.</Line>
          </h1>

          <motion.div
            variants={stagger(0.55, 0.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end max-w-5xl"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
              }}
              className="text-[length:var(--text-lg)] text-fg-muted max-w-[52ch] leading-relaxed"
            >
              I&apos;m Azhar Ud Din. I build considered, performant web
              products — Python backends, TypeScript on the front, and the
              occasional D3 detour when data wants to be seen.
            </motion.p>

            <motion.a
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
              }}
              href="#projects"
              className="group inline-flex items-center gap-3 font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg px-5 py-4 border border-border-bright hover-lift hover:border-accent hover:text-accent"
            >
              View Selected Work
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container-gutter w-full"
      >
        <div className="flex justify-between items-end text-[var(--text-xs)] font-mono uppercase tracking-[0.2em] text-fg-dim">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Based in Pakistan · Remote-friendly
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="hidden sm:inline"
          >
            Scroll ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        variants={lineReveal}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function RevealWord({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,160,80,0.06),_transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border-bright to-transparent"
      />
      <svg
        aria-hidden
        className="absolute top-1/2 right-8 -translate-y-1/2 -z-10 opacity-20 hidden lg:block"
        width="360"
        height="360"
        viewBox="0 0 360 360"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="360" height="360" fill="url(#grid)" className="text-fg-dim" />
        <motion.circle
          cx="180"
          cy="180"
          r="140"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-accent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.4, ease, delay: 0.6 }}
        />
      </svg>
    </>
  );
}
