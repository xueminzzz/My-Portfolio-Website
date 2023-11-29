import styles from "./page.module.css";
import Navigation from "@/app/components/navbar";
import Image from "next/image";

export default function SDS() {
    return (
        <div className={styles["main-container"]}>
            <Image
                src={"/sds-project-header.svg"} priority={true}
                width={0}
                height={0}
                className={styles["project-header"]}
            />
            <div className={styles["title-and-description"]}>
                <div className={styles["title"]}>Redesiging CPF Mobile Application</div>
                <div className={styles["collaborators"]}>SUTD x CPF x Goggle</div>
                <div className={styles["description-container"]}>
                    <div className={styles["sub-description-container"]}>
                        <div className={styles["sub-description"]}>Timeline:</div>
                        <div className={styles["sub-description-details"]}>May to August 2023</div>
                    </div>
                    <div className={styles["sub-description-container"]}>
                        <div className={styles["sub-description"]}>Tools used:</div>
                        <div className={styles["sub-description-details"]}>Ruby on Rails, Next JS, Selenium</div>
                    </div>
                </div>
            </div>
        </div>
    )
}