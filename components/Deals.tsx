"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { eur } from "@/lib/format";
import { ViberIcon } from "./BrandIcons";

type Deal = {
  make: string;
  model: string;
  mobilePrice: number;
  ourPrice: number;
  image: string;
};

// Example deals: lowest asking price on Mobile.bg vs. our final price delivered to the client.
const deals: Deal[] = [
  {
    make: "Kia",
    model: "Niro",
    mobilePrice: 18000,
    ourPrice: 14000,
    image: "/cars/kia.jpg",
  },
  {
    make: "Hyundai",
    model: "Kona",
    mobilePrice: 20500,
    ourPrice: 15500,
    image: "/cars/hunday.jpg",
  },
];

const perks = ["Доставка до клиента", "Плащане по фирмена сметка", "Без скрити такси"];

export default function Deals() {
  return (
    <section id="deals" className="relative border-t border-white/[0.05] bg-ink-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Реални примери
            </p>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
              Спестете <span className="whitespace-nowrap text-emerald-300">над € 4 000</span> за
              мечтания си автомобил.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
              Намираме го и го внасяме от чужбина вместо вас. Същата кола – значително по-евтино от
              най-ниската цена в Mobile.bg.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-silver-2">
            {perks.map((perk) => (
              <li key={perk} className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-emerald-400" strokeWidth={2.6} />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {deals.map((car, i) => {
            const saved = car.mobilePrice - car.ourPrice;
            const percent = Math.round((saved / car.mobilePrice) * 100);
            return (
              <motion.li
                key={car.model}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-edge/70 bg-carbon transition-colors duration-500 hover:border-emerald-400/40">
                  {/* Light "showroom" floor; multiply blends the photos' white backdrop into it. */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#f4f6f8] to-[#d9dee5]">
                    <Image
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-contain p-6 mix-blend-multiply transition-transform duration-700 ease-lux group-hover:scale-[1.04] sm:p-10"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3.5 py-1.5 font-display text-sm font-bold text-white shadow-lg sm:left-5 sm:top-5 sm:text-base">
                      −{percent}%
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-semibold text-white sm:right-5 sm:top-5 sm:text-sm">
                      Спестявате {eur(saved)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-mute">{car.make}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {car.make} {car.model}
                    </h3>

                    <dl className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <dt className="text-xs leading-snug text-mute">Най-ниска цена в Mobile.bg</dt>
                        <dd className="mt-2 font-display text-xl tracking-tight text-mute line-through decoration-red-400/70 decoration-2 sm:text-2xl">
                          {eur(car.mobilePrice)}
                        </dd>
                      </div>
                      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.07] p-4">
                        <dt className="text-xs leading-snug text-emerald-200">При нас, доставена до клиента</dt>
                        <dd className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {eur(car.ourPrice)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          id="offer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/[0.14] via-carbon to-carbon p-7 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Кажете ни коя кола търсите – ще ви направим оферта.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-silver-2 sm:text-lg">
                Марка, модел и бюджет – останалото е наша работа. Офертата е безплатна и без
                ангажимент. <span className="font-semibold text-white">Нищо не губите.</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <motion.a
                href={site.phoneHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-emerald-500 px-5 py-4 text-sm font-semibold sm:px-7 sm:text-base text-white shadow-[0_10px_30px_-10px_rgb(16_185_129/0.6)] transition-colors hover:bg-emerald-400"
              >
                <Phone className="size-4" strokeWidth={2.4} />
                Обадете се: {site.phoneDisplay}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              <a
                href={site.links.viberChat}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-edge px-7 py-4 text-sm font-medium text-white transition-colors hover:border-silver/60 hover:bg-white/[0.03]"
              >
                <ViberIcon className="size-4" />
                Пишете ни във Viber
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mt-5 text-xs leading-relaxed text-mute/80">
          Примерни цени към момента на публикуване. Крайната цена зависи от конкретния автомобил,
          година, пробег и оборудване.
        </p>
      </div>
    </section>
  );
}
