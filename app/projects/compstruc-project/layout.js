"use client"
import "../../globals.css";
import Navigation from "@/app/components/navbar";
import Footer from "@/app/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
