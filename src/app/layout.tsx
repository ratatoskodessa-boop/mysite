import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "bistrosite — UI/UX Design & Web Development",
  description: "Перетворюю ідеї на круті цифрові продукти. Landing Pages, UI/UX Design, SEO-стратегія та більше.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white font-[var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}
