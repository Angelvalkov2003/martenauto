"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ["За", "бъдещето", "си", "возило,", "елате", "при", "нас"];

const stats = [
  { value: "100%", label: "Сигурност" },
  { value: "15–30", label: "Дни Доставка" },
  { value: "Директен", label: "Внос" },
];

export default function Hero() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.95, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="home" className="relative overflow-hidden pt-[72px]">
      {/* Soft key light from above so the black isn't flat. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(203,213,225,0.1),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-xs font-medium uppercase tracking-[0.24em] text-silver"
        >
          Директен внос на автомобили
        </motion.p>

        <h1 className="mt-8 max-w-5xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.5rem]">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.06, ease }}
                className="inline-block"
              >
                {word}
              </motion.span>
              {i < headline.length - 1 && " "}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="max-w-xl text-base leading-relaxed text-mute sm:text-lg"
          >
            Внасяме автомобили от Европа с прозрачен процес, плащане само по
            официалната сметка на фирмата и доставка до нашата база в{" "}
            <span className="text-silver-2">с. Драгичево</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href={site.links.mobile}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-metal group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-ink"
            >
              Разгледайте обявите в Mobile.bg
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-edge px-7 py-4 text-sm font-medium text-white transition-colors hover:border-silver/60 hover:bg-white/[0.03]"
            >
              Свържете се с нас
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 border-y border-white/[0.07]"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col py-6 sm:py-8 ${i > 0 ? "border-l border-white/[0.07] pl-4 sm:pl-8" : ""}`}
            >
              <dt className="order-2 mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-mute sm:text-xs">
                {stat.label}
              </dt>
              <dd className="font-display text-xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div ref={bannerRef} className="relative mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pb-32">
        <motion.div
          style={{ scale }}
          className="relative origin-bottom overflow-hidden rounded-2xl border border-white/[0.08] bg-carbon shadow-[0_40px_120px_-40px_rgba(203,213,225,0.25)] sm:rounded-[28px]"
        >
          <motion.div style={{ y: imageY }} className="relative aspect-[1368/768] scale-[1.12]">
            <Image
              src="/brand/banner.jpg"
              alt="Мартен Ауто – Audi Q7, Mercedes E-Class и Škoda Octavia с регистрационни табели Marten Auto"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
