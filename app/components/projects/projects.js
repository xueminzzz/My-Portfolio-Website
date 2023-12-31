import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects(props) {
    return (
        <div className={styles["projects-card"]}>
            <Image
                src={props.image}
                width={0}
                height={0}
                className={props.className}
            />
            <div className={styles["project-title"]}>{props.title}</div>
            <div className={styles["project-description"]}>{props.description}</div>
        </div>
    )
}