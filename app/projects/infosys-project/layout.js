"use client"
import "../../globals.css";
import Navigation from "@/app/components/navbar";
import Footer from "@/app/components/footer/footer";
import styles from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className={styles["body-and-footer-container"]}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
