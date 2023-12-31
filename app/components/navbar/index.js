"use client";
import { useState } from "react";
import Navbar from "./navbar-desktop/index";
import Sidebar from "./navbar-mobile/index";

export default function Navigation() {
  console.log("Navigation component rendered");
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggle clicked! isOpen:", !isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
    </>
  );
};
