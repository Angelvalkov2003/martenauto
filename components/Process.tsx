"use client";

import { motion } from "framer-motion";
import { Handshake, Landmark, Route, Truck, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";

type Step = {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
};

const steps: Step[] = [
  {
    icon: Handshake,
    title: "Избор & Консултация",
    body: "Избирате автомобил с наше съдействие.",
  },
  {
    icon: Landmark,
    title: "Заплащане",
    body: (
      <>
        100% плащане по банков път само и единствено по официална сметка на{" "}
        <span className="text-white">&ldquo;Мартен Ауто ЕООД&rdquo;</span> (ЕИК: {site.eik}) с пълна
        правна гаранция.
      </>
    ),
  },
  {
    icon: Truck,
    title: "Логистика & Транспорт",
    body: (
      <>
        Срок за доставка 15-30 дни (според държавата на закупуване). Пристигане в базата ни в{" "}
        <span className="text-white">с. Драгичево</span> (между Перник и София).
      </>
    ),
  },
  {
    icon: Route,
    title: "Вътрешен Транспорт",
    body: (
      <>
        Съдействие за репатриране/транспорт до всяка точка на България (заплаща се директно на
        превозвача, Мартен Ауто <span className="text-white">НЕ</span> взема комисиона за
        вътрешен транспорт).
      </>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Процес на доставка"
          title="Как работим"
          lead="От първия разговор до момента, в който автомобилът е във вашия двор – знаете какво се случва, кога и къде."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-edge/70 bg-edge/50 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col bg-ink p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <step.icon className="size-5 text-silver" strokeWidth={1.5} />
                <span className="font-display text-sm font-semibold text-mute">0{i + 1}</span>
              </div>
              <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-mute">
                Стъпка {i + 1}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
