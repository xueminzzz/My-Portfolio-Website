import "../../globals.css";
import Navbar from "../../components/navbar/navbar-desktop";
import Sidebar from "../../components/navbar/navbar-mobile";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
