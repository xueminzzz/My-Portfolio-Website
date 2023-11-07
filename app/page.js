"use client";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Background from "./components/background/background-animation";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Background />
      <nav className={styles.navbar}>
        <ul className={styles["navbar-ul"]}>
          <Link href="#home" className={styles["projects-link"]}>
            <li className={`${styles["nav-item-home"]} ${styles["nav-item"]}`}>Home</li>
          </Link>
          <Link href="#projects" className={styles["projects-link"]}>
            <li className={`${styles["nav-item-projects"]} ${styles["nav-item"]}`}>Projects</li>
          </Link>
          <li className={`${styles["nav-item-resume"]} ${styles["nav-item"]}`}>Resume</li>
        </ul>
      </nav>
      <Header id="home" />
      <div className={styles["projects-header"]} id="projects">Projects</div>
      <div className={styles["projects"]}>
        <Projects
          image="/sds-project-placeholder.svg"
          title="Service Design Studio x CPF"
          description="Redesigning CPF Mobile Application"
          className={`${styles["image-border"]} ${styles["project1-border"]}`}
        />
        <Projects
          image="/infosys-project-placeholder.svg"
          title="Grab & Go"
          description="Android Studios Mobile Application"
          className={`${styles["image-border"]} ${styles["project2-border"]}`}
        />
        <Projects
          image="/compstruc-project-placeholder.svg"
          title="NHOMP"
          description="Alchitry IO Logic Game"
          className={`${styles["image-border"]} ${styles["project3-border"]}`}
        />
      </div>
    </div>
  )
}