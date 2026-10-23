"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { ViberIcon } from "./BrandIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-white/[0.06] bg-ink/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#home" aria-label="Мартен Ауто – начало" className="relative shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Marten Auto"
              width={358}
              height={209}
              priority
              className="h-12 w-auto opacity-95 transition-opacity hover:opacity-100"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative px-3.5 py-2 text-[13px] font-medium tracking-wide text-mute transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute inset-x-3.5 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-slate-100 to-slate-400 transition-transform duration-500 ease-lux group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.links.viber}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-edge px-4 py-2 text-[13px] font-medium text-silver-2 transition-colors hover:border-silver/60 hover:text-white sm:inline-flex"
            >
              <ViberIcon className="size-4" />
              Viber Общност
            </a>
            <motion.a
              href={site.phoneHref}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-metal inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-ink"
            >
              <Phone className="size-3.5" strokeWidth={2.4} />
              <span className="hidden sm:inline">{site.phoneDisplay}</span>
              <span className="sm:hidden">Обади се</span>
            </motion.a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Затвори менюто" : "Отвори менюто"}
              aria-expanded={open}
              className="ml-1 inline-flex size-10 items-center justify-center rounded-full border border-edge text-white lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-0 bottom-0 top-[72px] bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col px-5 pt-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/[0.06]"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5 font-display text-2xl font-semibold tracking-tight text-white"
                  >
                    <span className="text-xs font-medium text-mute">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 px-5">
              <a
                href={site.links.viber}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-edge py-3.5 text-sm font-medium text-silver-2"
              >
                <ViberIcon className="size-4" />
                Viber Общност
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
