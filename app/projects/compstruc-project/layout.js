import "../../globals.css";
import Navbar from "../../components/navbar/nav/navbar";
import Sidebar from "../../components/navbar/sidebar/sidebar";

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
