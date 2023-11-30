import Footer from "@/app/components/footer/footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function SDS() {
    return (
        <div className={styles["body-container"]}>
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
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>The Project</div>
                <div className={styles["summary"]}>
                    Many digitally vulnerable CPF members have to navigate through the complicated CPF application in order
                    to complete transactional and informational services offered online. The project focuses on improving
                    the user experience of the existing CPF app such that CPF members especially from the digitally vulnerable
                    groups can effectively embark on self-help.
                </div>
            </div>
        </div>
    )
}