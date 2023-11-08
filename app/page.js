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
      <Header id="home" />
      <div className={styles["projects-header"]} id="projects">Projects</div>
      <div className={styles["projects"]}>
        <Link href="/sds-project">
          <Projects
            image="/sds-project-placeholder.svg"
            title="Service Design Studio x CPF"
            description="Redesigning CPF Mobile Application"
            className={`${styles["image-border"]} ${styles["project1-border"]}`}
          />
        </Link>
        <Link href="/infosys-project">
          <Projects
            image="/infosys-project-placeholder.svg"
            title="Grab & Go"
            description="Android Studios Mobile Application"
            className={`${styles["image-border"]} ${styles["project2-border"]}`}
          />
        </Link>
        <Link href="/compstruc-project">
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