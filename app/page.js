"use client"
import styles from "./page.module.css";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Background from "./components/background/background-animation";
import Navigation from "./components/navbar";
import Footer from "./components/footer/footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* <Background /> */}
      <Navigation />
      <Header />
      <div className={styles["projects-and-footer-container"]}>
        <div className={styles["projects-container"]} >
          <div className={styles["projects-header"]} id="projects">Projects</div>
          <div className={styles["projects"]} id="projects">
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
            {/* <Link href="/projects/compstruc-project" className={styles["projects-link"]}>
          <Projects
            image="/compstruc-project-placeholder.svg"
            title="NHOMP"
            description="Alchitry IO Logic Game"
            className={`${styles["image-border"]} ${styles["project3-border"]}`}
          />
        </Link> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
