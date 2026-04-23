"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

function GithubIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .5C5.73.5.66 5.57.66 11.84c0 5.01 3.24 9.26 7.74 10.76.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.94-3.15.68-3.81-1.52-3.81-1.52-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.51-1.44.11-3 0 0 .96-.31 3.14 1.16a10.86 10.86 0 015.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.3-5.17 5.58.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.79.54A11.34 11.34 0 0023.34 11.84C23.34 5.57 18.27.5 12 .5z" />
    </svg>
  );
}
import { SectionHeader } from "./SectionHeader";
import { ease, viewportOnce } from "@/lib/motion";

const links = [
  {
    label: "azharuddin.cs@outlook.com",
    href: "mailto:azharuddin.cs@outlook.com",
    meta: "Email",
    icon: Mail,
  },
  {
    label: "github.com/Azhar-ud",
    href: "https://github.com/Azhar-ud",
    meta: "GitHub",
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-[var(--space-section)] border-t border-border">
      <div className="container-gutter">
        <SectionHeader
          index="04"
          label="Get in touch"
          title={
            <>
              Have something
              <br />
              <span className="italic text-fg-muted">worth building?</span>
            </>
          }
          description="Freelance, contract, or a conversation — I&#39;m open. The fastest path is email; I read everything."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 md:col-start-5 flex flex-col divide-y divide-border border-y border-border">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="group relative flex items-center justify-between gap-6 py-6 md:py-8 px-2 hover:px-6 transition-[padding] duration-500"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10 flex items-center gap-5">
                  <link.icon
                    size={18}
                    className="text-fg-dim group-hover:text-accent transition-colors"
                  />
                  <div className="flex flex-col">
                    <span className="font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-dim">
                      {link.meta}
                    </span>
                    <span className="font-display text-[length:var(--text-2xl)] text-fg group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={22}
                  className="relative z-10 text-fg-dim group-hover:text-accent transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container-gutter flex flex-col md:flex-row gap-4 md:items-end md:justify-between text-[var(--text-xs)] font-mono uppercase tracking-[0.18em] text-fg-dim">
        <span>© {new Date().getFullYear()} Azhar Ud Din</span>
        <span>Built with Next.js · Designed by hand</span>
      </div>
    </footer>
  );
}
