import Image from 'next/image';
import styles from './projects.module.css'
import '@/app/globals.css'

export default function Projects(props) {
    return (
        <div className={styles["projects-card"]}>
            <Image
                src={props.image}
                width={900}
                height={900}
                className={props.className}
            />
            <div className={styles["project-title"]}>{props.title}</div>
            <div className={styles["project-description"]}>{props.description}</div>
        </div>
    )
}
