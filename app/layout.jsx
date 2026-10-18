import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://acleybujune.com";

const description =
  "Acley Bujune is a software engineer building distributed systems, full-stack applications, and AI-powered tools. Explore projects, experience, and contact information.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Acley Bujune · Software Engineer",
    template: "%s · Acley Bujune",
  },
  description,
  applicationName: "Acley Bujune",
  authors: [{ name: "Acley Bujune", url: siteUrl }],
  creator: "Acley Bujune",
  publisher: "Acley Bujune",
  keywords: [
    "Acley Bujune",
    "Software Engineer",
    "Portfolio",
    "Next.js",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Acley Bujune",
    title: "Acley Bujune · Software Engineer",
    description,
    images: [
      {
        url: "/headshot.svg",
        width: 1024,
        height: 1280,
        alt: "Acley Bujune — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acley Bujune · Software Engineer",
    description,
    images: ["/headshot.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Acley Bujune",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description,
  image: `${siteUrl}/headshot.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madison",
    addressRegion: "SD",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/acleybujune",
    "https://linkedin.com/in/acley-bujune",
  ],
  email: "mailto:acleybujune@gmail.com",
};

// Runs before first paint: tags the doc as JS-capable (gates reveal-hiding
// styles) and decides whether the boot intro shows this session. Must stay
// inline so there is no flash of unstyled/hidden state.
const bootScript = `(function(){try{var d=document.documentElement;d.classList.add("js");var rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!rm&&!sessionStorage.getItem("kc-boot")){d.classList.add("intro-pending");}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${archivo.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
