import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const description =
  "Мартен Ауто ЕООД – директен внос на автомобили от Европа. Доставка за 15–30 дни, 100% плащане по официална фирмена сметка и пълна правна гаранция. База в с. Драгичево (между Перник и София).";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Мартен Ауто - Внос на автомобили",
    template: "%s | Мартен Ауто",
  },
  description,
  keywords: [
    "внос на автомобили",
    "автомобили от Европа",
    "Мартен Ауто",
    "Marten Auto",
    "коли от Германия",
    "Драгичево",
    "Перник",
    "София",
  ],
  applicationName: "Мартен Ауто",
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: site.url,
    siteName: "Мартен Ауто",
    title: "Мартен Ауто - Внос на автомобили",
    description,
    images: [
      {
        url: "/brand/banner.jpg",
        width: 1368,
        height: 768,
        alt: "Мартен Ауто – За бъдещето си возило, елате при нас",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Мартен Ауто - Внос на автомобили",
    description,
    images: ["/brand/banner.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: site.legalName,
  alternateName: site.latinName,
  url: site.url,
  telephone: "+359876111490",
  image: `${site.url}/brand/banner.jpg`,
  logo: `${site.url}/brand/logo-framed.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Драгичево",
    addressRegion: "Перник",
    addressCountry: "BG",
  },
  sameAs: [site.links.facebook, site.links.mobile],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
