import Image from "next/image";
import { ArrowUpRight, Car, Globe, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { FacebookIcon, ViberIcon } from "./BrandIcons";
import Reveal from "./Reveal";

const channels = [
  { href: site.links.facebook, label: "Facebook", note: "Новини и нови автомобили", icon: FacebookIcon },
  { href: site.links.mobile, label: "Mobile.bg", note: "Официален каталог с обяви", icon: Car },
  { href: site.links.viber, label: "Viber Общност", note: "Първи научавате за нови коли", icon: ViberIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/[0.05] bg-ink-2">
      {/* Contact call-to-action */}
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="rounded-3xl border border-edge/70 bg-carbon p-8 sm:p-14 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-silver">Контакти</p>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
                Готови ли сте за следващия си автомобил?
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
                Обадете се на {site.manager} – ще ви помогнем с избора и ще ви кажем реалния срок
                за доставка.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="bg-metal group flex items-center justify-between rounded-2xl px-6 py-5 text-ink transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="flex items-center gap-4">
                  <Phone className="size-5" strokeWidth={2} />
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
                      Обадете се
                    </span>
                    <span className="font-display text-2xl font-semibold tracking-tight">
                      {site.phoneDisplay}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-edge px-6 py-4 transition-colors duration-300 hover:border-silver/50 hover:bg-white/[0.03]"
                >
                  <span className="flex items-center gap-4">
                    <channel.icon className="size-5 text-silver-2" />
                    <span>
                      <span className="block text-sm font-medium text-white">{channel.label}</span>
                      <span className="block text-xs text-mute">{channel.note}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-silver transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hairline mx-auto max-w-7xl" />

      {/* Brand, legal details and navigation */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo.png"
            alt="Marten Auto"
            width={358}
            height={209}
            className="h-auto w-44"
          />
          <dl className="mt-8 space-y-1.5 text-sm">
            <div className="flex gap-2">
              <dt className="sr-only">Фирма</dt>
              <dd className="font-medium text-white">{site.legalName}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-mute">ЕИК</dt>
              <dd className="text-silver-2">{site.eik}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-mute">Управител:</dt>
              <dd className="text-silver-2">{site.manager}</dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Навигация в долния колонтитул">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-mute">Навигация</p>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-silver-2 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-mute">Последвайте ни</p>
          <ul className="mt-6 flex gap-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={channel.label}
                  className="flex size-11 items-center justify-center rounded-full border border-edge text-silver-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-silver/60 hover:text-white"
                >
                  <channel.icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 text-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-col gap-3 text-silver-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="size-3.5 text-silver" />
                {site.phone}
              </a>
            </li>
            <li className="hidden px-5 text-edge sm:block">|</li>
            <li>
              <a href={site.url} className="flex items-center gap-2 transition-colors hover:text-white">
                <Globe className="size-3.5 text-silver" />
                {site.domain}
              </a>
            </li>
            <li className="hidden px-5 text-edge sm:block">|</li>
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5 text-silver" />
              Драгичево (Перник/София)
            </li>
          </ul>
          <p className="text-xs text-mute">
            © {year} {site.legalName}. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
