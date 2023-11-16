"use client"
import styles from "./page.module.css";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Background from "./components/background/background-animation";
import Navbar from "./components/navbar/navbar-desktop/index";
import Sidebar from "./components/navbar/navbar-mobile/index";
// import Navigation from "./components/navbar";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("Toggle clicked! isOpen:", !isOpen);
  };

  return (
    <div>
      <Background />
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Header />
      <div className={styles["projects-header"]} id="projects">Projects</div>
      <div className={styles["projects"]}>
        <Link href="/projects/sds-project" className={styles["projects-link"]}>
          <Projects
            image="/sds-project-placeholder.svg"
            title="Service Design Studio x CPF"
            description="Redesigning CPF Mobile Application"
            className={`${styles["image-border"]} ${styles["project1-border"]}`}
          />
        </Link>
        <Link href="/projects/infosys-project" className={styles["projects-link"]}>
          <Projects
            image="/infosys-project-placeholder.svg"
            title="Grab & Go"
            description="Android Studios Mobile Application"
            className={`${styles["image-border"]} ${styles["project2-border"]}`}
          />
        </Link>
        <Link href="/projects/compstruc-project" className={styles["projects-link"]}>
          <Projects
            image="/compstruc-project-placeholder.svg"
            title="NHOMP"
            description="Alchitry IO Logic Game"
            className={`${styles["image-border"]} ${styles["project3-border"]}`}
          />
        </Link>
      </div>
    </div>
  )
}
