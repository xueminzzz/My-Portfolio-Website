"use client";
import { useState } from "react";
import Navbar from "./nav/navbar";
import Sidebar from "./sidebar/sidebar";

export default function Navigation() {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};
