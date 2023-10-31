import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'
import Projects from '@/components/projects/projects'
import Background from '@/components/background/background-animation'

export default function HomePage() {
  return (
    <div>
      <Background />
      <Navbar />
      <Header />
      <div className={styles["projects-header"]}>Projects</div>
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
