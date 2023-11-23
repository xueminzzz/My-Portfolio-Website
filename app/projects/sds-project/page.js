import styles from "./page.module.css";
import Navigation from "@/app/components/navbar";
import Image from "next/image";

export default function SDS() {
    return (
        <div className={styles["main-container"]}>
            <Image
                src={""} priority={true}
                width={0}
                height={0}
                className={styles["project-header"]}
            />
            <div className={styles["title"]}>Redesiging CPF Mobile Application</div>
            <div className={styles["collaborators"]}>SUTD x CPF x Goggle</div>
        </div>
    )
}