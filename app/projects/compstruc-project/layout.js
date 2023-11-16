"use client"
import "../../globals.css";
import Navbar from "../../components/navbar/navbar-desktop";
import Sidebar from "../../components/navbar/navbar-mobile";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggle clicked! isOpen:", !isOpen);
  };
  return (
    <html lang="en">
      <body>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        {children}
      </body>
    </html>
  )
}
