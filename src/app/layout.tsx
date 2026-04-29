import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollListener from "@/components/ScrollListener";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Bistro-site — Дизайн та розробка сайтів для бізнесу",
  description: "Створюю красиві та функціональні сайти для вашого бізнесу. Landing pages, UI/UX дизайн, SEO-оптимізація та веб-розробка на Next.js.",
  keywords: [
    "веб-дизайн",
    "веб-розробка",
    "landing page",
    "UI/UX дизайн",
    "SEO-оптимізація",
    "Next.js",
    "сайти для бізнесу",
    "дизайн сайтів",
    "фронтенд-розробка",
    "React розробка",
  ],
  authors: [{ name: "Bistro-site" }],
  creator: "Bistro-site",
  publisher: "Bistro-site",
  metadataBase: new URL("https://bistro-site.online"),
  alternates: {
    canonical: "https://bistro-site.online",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://bistro-site.online",
    siteName: "Bistro-site",
    title: "Bistro-site — Дизайн та розробка сайтів",
    description: "Створюю красиві та функціональні сайти для вашого бізнесу. Landing pages, UI/UX дизайн, SEO-оптимізація.",
    images: [
      {
        url: "https://bistro-site.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bistro-site - Веб-дизайн та розробка",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bistro-site — Дизайн та розробка сайтів",
    description: "Створюю красиві та функціональні сайти для вашого бізнесу.",
    images: ["https://bistro-site.online/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bistro-site.online" />
      </head>
      <body className="min-h-full flex flex-col bg-white font-[var(--font-space-grotesk)]">
        <ScrollListener />
        {children}
      </body>
    </html>
  );
}
