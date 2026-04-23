"use client";

import { motion } from "framer-motion";
import { ease, viewportOnce } from "@/lib/motion";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 md:pb-20">
      <div className="md:col-span-4 flex items-start gap-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[var(--text-xs)] text-accent tracking-[0.2em]"
        >
          {index}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="font-mono text-[var(--text-xs)] uppercase tracking-[0.2em] text-fg-muted"
        >
          {label}
        </motion.span>
      </div>
      <div className="md:col-span-8 flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="font-display text-[length:var(--text-4xl)] text-fg"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="text-fg-muted text-[length:var(--text-lg)] max-w-[60ch] leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
