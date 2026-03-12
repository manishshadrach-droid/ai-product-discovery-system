import "./globals.css"
import type { Metadata } from "next"

import { Allura, Playfair_Display } from "next/font/google"

import Navbar from "./components/Navbar"
import CartDrawer from "./components/CartDrawer"
import Footer from "./components/Footer"
import ScrollIndicator from "./components/ScrollIndicator"
import WhatsAppFloat from "./components/WhatsAppFloat"
import MiniCart from "./components/MiniCart"


/* Brand Script Font */

const cursiveFont = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
  display: "swap"
})


/* Elegant Heading Font */

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600"],
  variable: "--font-heading",
  display: "swap"
})


export const metadata: Metadata = {
  title: "Woods & Grains",
  description: "Premium plywood and wood materials for modern interiors",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html
      lang="en"
      className={`${cursiveFont.variable} ${headingFont.variable}`}
    >

      <body className="bg-white text-black antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <CartDrawer />

        <ScrollIndicator />

        <Footer />

        <WhatsAppFloat />

        <MiniCart />

      </body>

    </html>

  )
}