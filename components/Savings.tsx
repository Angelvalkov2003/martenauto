"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

type Example = {
  make: string;
  model: string;
  details: string;
  marketPrice: number;
  ourPrice: number;
  image: string;
  position?: string;
  credit?: string;
};

// Illustrative figures only: typical Bulgarian asking price vs. the same car imported through us.
const examples: Example[] = [
  {
    make: "BMW",
    model: "320i M Sport",
    details: "Нов автомобил · 2025 · Бензин · 184 к.с.",
    marketPrice: 58000,
    ourPrice: 49300,
    image: "/cars/bmw-320i.jpg",
    position: "50% 60%",
    credit: "Снимка: M3C30, CC BY-SA 4.0",
  },
  {
    make: "Audi",
    model: "A4 40 TDI quattro S line",
    details: "2022 · 45 000 км · Дизел · 204 к.с.",
    marketPrice: 39900,
    ourPrice: 33900,
    image: "/cars/audi-a4.jpg",
    position: "50% 55%",
    credit: "Снимка: Vauxford, CC BY-SA 4.0",
  },
  {
    make: "Mercedes-Benz",
    model: "E 220 d AMG Line",
    details: "2022 · 60 000 км · Дизел · 197 к.с.",
    marketPrice: 52000,
    ourPrice: 44200,
    image: "/cars/mercedes-e.jpg",
  },
];

// Formatted by hand so server and browser render identical thousands separators.
const eur = (value: number) => `€ ${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;

export default function Savings() {
  return (
    <section id="cars" className="border-t border-white/[0.05] bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Примерни автомобили"
          title="Колко спестяват нашите клиенти"
          lead="Сравнение между ориентировъчната цена на същия автомобил на българския пазар и крайната цена при внос чрез Мартен Ауто."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {examples.map((car, i) => {
            const saved = car.marketPrice - car.ourPrice;
            const percent = Math.round((saved / car.marketPrice) * 100);
            return (
              <motion.li
                key={car.model}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-edge/70 bg-carbon transition-colors duration-500 hover:border-silver/40">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover"
                      style={{ objectPosition: car.position }}
                    />
                    {car.credit && (
                      <span className="absolute bottom-2 right-3 text-[9px] text-white/60 [text-shadow:0_1px_2px_rgb(0_0_0/0.8)]">
                        {car.credit}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-mute">{car.make}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-white">
                      {car.model}
                    </h3>
                    <p className="mt-2 text-sm text-mute">{car.details}</p>

                    <dl className="mt-7 space-y-4 border-t border-white/[0.06] pt-6">
                      <PriceRow label="Цена в България" value={eur(car.marketPrice)} width={100} muted />
                      <PriceRow label="Чрез Мартен Ауто" value={eur(car.ourPrice)} width={100 - percent} />
                    </dl>

                    <div className="mt-6 flex items-baseline justify-between rounded-xl bg-white/[0.04] px-4 py-3.5">
                      <span className="text-sm text-silver-2">Спестявате</span>
                      <span className="font-display text-lg font-semibold tracking-tight text-white">
                        {eur(saved)}
                        <span className="ml-2 text-sm font-medium text-mute">({percent}%)</span>
                      </span>
                    </div>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-mute">
            Цените са ориентировъчни и служат само за сравнение. Реалната разлика зависи от
            конкретния автомобил, държавата на закупуване и пазара в момента.
          </p>
          <a
            href={site.links.mobile}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white"
          >
            Актуални обяви в Mobile.bg
            <ArrowUpRight className="size-4 text-silver transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PriceRow({
  label,
  value,
  width,
  muted = false,
}: {
  label: string;
  value: string;
  width: number;
  muted?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <dt className="text-sm text-mute">{label}</dt>
        <dd
          className={`font-display tracking-tight ${
            muted ? "text-base text-mute line-through decoration-mute/50" : "text-2xl font-semibold text-white"
          }`}
        >
          {value}
        </dd>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${muted ? "bg-edge" : "bg-gradient-to-r from-slate-300 to-slate-100"}`}
        />
      </div>
    </div>
  );
}
