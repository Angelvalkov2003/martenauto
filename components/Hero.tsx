"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { ViberIcon } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ["За", "бъдещето", "си", "возило,", "елате", "при", "нас"];

const stats = [
  { value: "€ 4 000+", label: "Спестявате" },
  { value: "15–30", label: "Дни Доставка" },
  { value: "Директен", label: "Внос" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const carsY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden pb-24 pt-[72px] sm:pb-32">
      {/* Soft key light from above so the black isn't flat. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(203,213,225,0.1),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <motion.a
          href="#deals"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="group mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 py-1.5 pl-1.5 pr-4 text-xs text-emerald-100 transition-colors hover:border-emerald-400/60 sm:text-sm"
        >
          <span className="shrink-0 rounded-full bg-emerald-500 px-2.5 py-1 font-semibold text-white">−22%</span>
          <span className="truncate">
            Kia Niro <b className="font-semibold text-white">€ 14 000</b>{" "}
            <s className="text-emerald-100/60">€ 18 000</s>
          </span>
          <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>

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

        <div className="relative mt-10 lg:min-h-[260px]">
          <div className="relative z-10 lg:max-w-[30rem]">
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
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                href="#deals"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-metal group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-ink"
              >
                Вижте колко спестявате
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href={site.links.viber}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#7360f2]/60 bg-[#7360f2]/10 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#7360f2]/20"
              >
                <ViberIcon className="size-4 text-[#b7adff]" />
                Горещи оферти във Viber
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Cars cut out of the brand banner and faded into the page background. */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease }}
            className="relative -mx-5 mt-12 sm:-mx-8 lg:absolute lg:bottom-[-2.5rem] lg:left-[33%] lg:right-[-4rem] lg:mx-0 lg:mt-0"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-[10%] bottom-[8%] h-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(203,213,225,0.12),transparent)] blur-2xl"
            />
            <motion.div
              style={{ y: carsY }}
              className="relative aspect-[1368/340] [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_88%,transparent),linear-gradient(to_bottom,transparent,#000_20%,#000_80%,transparent)]"
            >
              <Image
                src="/brand/hero-cars.webp"
                alt="Audi Q7, Mercedes E-Class и Škoda Octavia с регистрационни табели Marten Auto"
                fill
                priority
                sizes="(min-width: 1280px) 900px, 100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative z-10 mt-16 grid grid-cols-3 border-y border-white/[0.07]"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col py-6 sm:py-8 ${i > 0 ? "border-l border-white/[0.07] pl-4 sm:pl-8" : ""}`}
            >
              <dt className="order-2 mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-mute sm:text-xs">
                {stat.label}
              </dt>
              <dd className="font-display text-lg font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

    </section>
  );
}
