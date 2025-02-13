import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { Navbar, NavItem } from "@/components/navbar"
import { Container } from "@/components/container"
import Link from "next/link"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const nextLinks: NavItem[] = [
    { component: <Link href="/news">Newsroom</Link> },
    { component: <Link href="/about">About us</Link> },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <Navbar links={nextLinks} />
          <Container>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
