"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ease, viewportOnce } from "@/lib/motion";
import { projects, type Project } from "@/data/projects";

const sizeClass: Record<Project["size"], string> = {
  lg: "md:col-span-7 md:row-span-2",
  md: "md:col-span-5",
  sm: "md:col-span-5",
};

const accentGradient: Record<Project["accent"], string> = {
  warm: "from-[oklch(30%_0.09_82)] via-transparent to-transparent",
  cool: "from-[oklch(28%_0.06_230)] via-transparent to-transparent",
  neutral: "from-[oklch(22%_0.02_80)] via-transparent to-transparent",
};

export function Projects() {
  return (
    <section id="projects" className="relative py-[var(--space-section)]">
      <div className="container-gutter">
        <SectionHeader
          index="03"
          label="Selected Work"
          title={
            <>
              A few things
              <br />
              <span className="italic text-fg-muted">I&apos;ve shipped.</span>
            </>
          }
          description="Small set — things I&#39;m happy to point at. More on GitHub."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(280px,auto)] gap-4 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-16 flex justify-center md:justify-end"
        >
          <a
            href="https://github.com/Azhar-ud"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-muted hover:text-accent transition-colors"
          >
            All repositories on GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between p-8 md:p-10 border border-border bg-bg-raised overflow-hidden hover:border-border-bright transition-colors duration-500 ${sizeClass[project.size]}`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 -z-0 bg-gradient-to-br ${accentGradient[project.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-dim">
            {project.year} · {project.role}
          </span>
          <h3 className="font-display text-[length:var(--text-3xl)] text-fg leading-[1]">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={22}
          className="text-fg-dim group-hover:text-accent transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-6 mt-10">
        <p className="text-fg-muted text-[length:var(--text-base)] leading-relaxed max-w-[48ch]">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[var(--text-xs)] uppercase tracking-[0.14em] text-fg-dim">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
