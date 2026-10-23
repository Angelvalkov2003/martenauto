import { BadgeCheck, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { icon: Landmark, label: "Юридическо лице", value: site.legalName, note: `ЕИК ${site.eik}` },
  { icon: BadgeCheck, label: "Управител", value: site.manager, note: "Лична отговорност към всеки клиент" },
  { icon: MapPin, label: "Логистична база", value: site.location, note: site.locationNote },
  { icon: ShieldCheck, label: "Плащане", value: "Само по фирмена сметка", note: "Без плащания в брой и към трети лица" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <div>
          <SectionHeading eyebrow="За нас" title="Внос, зад който стои име" />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-mute sm:text-lg">
            <p>
              {site.legalName} е регистриран вносител на автомобили. Работим директно с търговци и
              собственици в Европа и поемаме целия процес – от избора на автомобил до транспорта до
              България.
            </p>
            <p>
              Всяко плащане минава по официалната банкова сметка на фирмата. Така сделката ви е
              документирана и защитена от първия до последния ден.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-px self-start overflow-hidden rounded-2xl border border-edge/70 bg-edge/50 sm:grid-cols-2">
          {facts.map((fact, i) => (
            <li key={fact.label} className="bg-ink">
              <Reveal delay={i * 0.08} className="group h-full p-7 transition-colors duration-500 hover:bg-carbon/60 sm:p-8">
                <fact.icon className="size-5 text-silver transition-colors duration-500 group-hover:text-white" strokeWidth={1.5} />
                <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.28em] text-mute">
                  {fact.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm text-mute">{fact.note}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
