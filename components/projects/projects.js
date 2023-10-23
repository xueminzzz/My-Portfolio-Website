import Image from 'next/image';
import styles from './projects.module.css'
import '@/app/globals.css'

export default function Projects(props) {
    return (
        <div className={styles["projects-card"]}>
            <Image
                src={"/cpf-project-placeholder.png"}
                width={500}
                height={500}
                className={styles["project-placeholder"]}
            />
            <div className={styles["project-title"]}>{props.title}</div>
            <div className={styles["project-description"]}>{props.description}</div>
        </div>
    )
}