"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ease } from "@/lib/motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.3 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-bg/70 border-b border-border"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-gutter flex items-center justify-between py-5">
          <a
            href="#home"
            className="font-display text-[length:var(--text-xl)] text-fg hover:text-accent transition-colors"
            aria-label="Home"
          >
            Azhar<span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-muted hover:text-fg transition-colors relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent group-hover:w-full transition-[width] duration-400" />
              </a>
            ))}
          </nav>

          <a
            href="mailto:azharuddin.cs@outlook.com"
            className="hidden md:inline-flex font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg px-4 py-2.5 border border-border-bright hover:border-accent hover:text-accent transition-colors"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 text-fg"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="container-gutter flex items-center justify-between py-5 border-b border-border">
              <span className="font-display text-[length:var(--text-xl)] text-fg">
                Azhar<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 text-fg"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="container-gutter flex flex-col gap-2 py-12 flex-1" aria-label="Mobile">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                  className="font-display text-[length:var(--text-3xl)] text-fg py-3 border-b border-border"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-gutter py-8 border-t border-border">
              <a
                href="mailto:azharuddin.cs@outlook.com"
                className="font-mono text-[var(--text-xs)] uppercase tracking-[0.18em] text-fg-muted"
              >
                azharuddin.cs@outlook.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
