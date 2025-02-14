import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { ThemesProvider } from "@workspace/ui/components/customs/themes-provider";
import {
  BeamHeader,
  NavItem,
} from "@workspace/ui/components/beam-components/header";
import { BeamFooter } from "@workspace/ui/components/beam-components/footer";
import Link from "next/link";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextLinks: NavItem[] = [
    { component: <Link href="/news">Newsroom</Link> },
    { component: <Link href="/about">About us</Link> },
  ];

  // const nextLinks: NavItem[] = [
  //   { component: <Link href="/news">Newsroom</Link> },
  //   { component: <Link href="/about">About us</Link> },
  //   { component: <Link href="/services">Services</Link> },
  //   { component: <Link href="/contact">Contact</Link> },
  // ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ThemesProvider>
          <main className="flex flex-col h-screen">
            <BeamHeader links={nextLinks} />
            <div className="flex-1 w-full pt-20">
              {children}
              <BeamFooter />
            </div>
          </main>
        </ThemesProvider>
      </body>
    </html>
  );
}
