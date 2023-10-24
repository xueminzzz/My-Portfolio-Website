import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'
import Projects from '@/components/projects/projects'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles["projects-header"]}>Projects</div>
      <div className={styles["projects"]}>
        
        <Projects
          image="/cpf-project-placeholder.svg"
          title="CREAITIVESTUDIOS x CPF"
          description="Redesigning CPF Mobile Application"
          className={`${styles["image-border"]} ${styles["project1-border"]}`}
        />
        <Projects
          image="/grab&go-project-placeholder.svg"
          title="Grab & Go"
          description="Android Studios Mobile Application"
          className={`${styles["image-border"]} ${styles["project2-border"]}`}
        />
      </div>
    </div>
  )
}
