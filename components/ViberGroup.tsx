"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BellRing, Flame, Tag } from "lucide-react";
import { site } from "@/lib/site";
import { ViberIcon } from "./BrandIcons";

const reasons = [
  { icon: Flame, title: "Горещи оферти", body: "Най-изгодните коли публикуваме първо в групата." },
  { icon: BellRing, title: "Преди всички", body: "Научавате за нов автомобил, преди да е обявен другаде." },
  { icon: Tag, title: "Реални цени", body: "Крайна цена с доставка – без изненади и скрити такси." },
];

// Viber's brand purple, used only for this section's accents.
export default function ViberGroup() {
  return (
    <section id="viber" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[#7360f2]/35 bg-carbon p-7 sm:p-12 lg:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(115,96,242,0.35),transparent)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#7360f2]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b7adff]">
                <ViberIcon className="size-4" />
                Viber общност
              </p>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
                Най-горещите предложения са в нашата Viber група.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
                Влезте безплатно и разгледайте колите, които внасяме в момента. Хубавите оферти
                изчезват бързо – в групата ги виждате първи.
              </p>
              <motion.a
                href={site.links.viber}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#7360f2] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgb(115_96_242/0.7)] transition-colors hover:bg-[#8273f5] sm:w-auto"
              >
                <ViberIcon className="size-5" />
                Влезте във Viber групата
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </div>

            <ul className="grid gap-3">
              {reasons.map((reason) => (
                <li
                  key={reason.title}
                  className="flex gap-4 rounded-2xl border border-white/[0.06] bg-ink/60 p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#7360f2]/15 text-[#b7adff]">
                    <reason.icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-white">{reason.title}</span>
                    <span className="mt-0.5 block text-sm text-mute">{reason.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
