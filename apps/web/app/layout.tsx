import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { ThemesProvider } from "@workspace/ui/components/customs/themes-provider";
import {
  BeamHeader,
  NavItem,
} from "@workspace/ui/components/beam-components/header";
import { BeamFooter } from "@workspace/ui/components/beam-components/footer";
import { BeamLogoDark } from "@workspace/ui/components/beam-components/icons";
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
    { component: <Link href="/">Newsroom</Link> },
    { component: <Link href="/about">About us</Link> },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <ThemesProvider>
          <main className="flex flex-col h-screen">
            <BeamHeader
              links={nextLinks}
              homeLogo={
                <Link href="/">
                  <BeamLogoDark className="h-auto w-auto" />
                </Link>
              }
            />
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
