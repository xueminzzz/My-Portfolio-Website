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
      <div className={styles["projects"]}>
        <div className={styles["projects-header"]}>Projects</div>
        <Projects
          image="/cpf-project-placeholder.png"
          title="CREAITIVESTUDIOS x CPF"
          description="Redesigning CPF Mobile Application"
        />
        <Projects
          image="/grab&go-project-placeholder.png"
          title="Grab & Go"
          description="Android Studios Mobile Application"
        />
      </div>
    </div>
  )
}
