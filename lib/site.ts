export const site = {
  name: "Мартен Ауто",
  legalName: "Мартен Ауто ЕООД",
  latinName: "Marten Auto LTD",
  eik: "205946138",
  manager: "Мартин Борисов",
  phone: "0876111490",
  phoneDisplay: "0876 111 490",
  phoneHref: "tel:+359876111490",
  domain: "martenauto.com",
  // Vercel sets this to the production domain (custom domain once attached, else *.vercel.app),
  // so share previews always point at a host that actually serves the og:image.
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://martenauto.com",
  location: "с. Драгичево",
  locationNote: "между Перник и София",
  links: {
    mobile: "https://martenauto1.mobile.bg/",
    facebook: "https://www.facebook.com/martenauto17/?locale=bg_BG",
    viber:
      "https://invite.viber.com/?g2=AQB9AWAmYTrnqlRsGLtOKQ7gdZcKQULWFWAC7rriS1ZkT1lZmyl87ueFc07Rs0DN",
    // Opens a private Viber chat with the manager's number.
    viberChat: "viber://chat?number=%2B359876111490",
  },
} as const;

export const navLinks = [
  { href: "#home", label: "Начало" },
  { href: "#deals", label: "Оферти" },
  { href: "#about", label: "За нас" },
  { href: "#process", label: "Процес на доставка" },
  { href: "#viber", label: "Горещи оферти" },
  { href: "#contact", label: "Контакти" },
] as const;
