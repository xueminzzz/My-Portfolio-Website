import "./globals.css";
import Navbar from "./components/navbar/navbar-desktop";
import Background from "./components/background/background-animation";
import styles from "./page.module.css";
import Navigation from "./components/navbar";
import Footer from "./components/footer/footer";

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
