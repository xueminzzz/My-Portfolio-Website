"use client";
import { useState } from "react";
import Navbar from "./navbar-desktop/navbar-desktop";
import Sidebar from "./navbar-mobile/navbar-mobile";

export default function Navigation() {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggle clicked! isOpen:", !isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};
