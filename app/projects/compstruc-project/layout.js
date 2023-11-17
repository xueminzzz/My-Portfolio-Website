"use client"
import "../../globals.css";
import Navigation from "@/app/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  )
}
