"use client"
import styles from "./page.module.css";
import Image from "next/image";
import Player from "@/app/components/video/infosys-video";

export default function IS() {
    return (
        <div className={styles["main-container"]}>
            <Image
                src={"/infosys-project-header.svg"} priority={true}
                width={0}
                height={0}
                className={styles["project-header"]}
            />
            <div className={styles["title-and-description"]}>
                <div className={styles["title"]}>Grab & Go</div>
                <div className={styles["collaborators"]}>SUTD</div>
                <div className={styles["description-container"]}>
                    <div className={styles["sub-description-container"]}>
                        <div className={styles["sub-description"]}>Timeline:</div>
                        <div className={styles["sub-description-details"]}>January to April 2023</div>
                    </div>
                    <div className={styles["sub-description-container"]}>
                        <div className={styles["sub-description"]}>Tools used:</div>
                        <div className={styles["sub-description-details"]}>Andriod Studios, Java</div>
                    </div>
                </div>
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>The Project</div>
                <div className={styles["summary"]}>
                    SUTD students and staff often find themselves queuing up for long periods of time
                    at the canteen, especially during peak hours. With limited time on their hands,
                    some may even choose to forgo meals, which is not conducive to their health and productivity.
                    Our mobile application aims to reduce the time spent queueing through pre-ordering meals.
                </div>
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>The Product</div>
                <Player />
            </div>
            <div className={styles["project-summary"]}>
                <div className={styles["project"]}>System Design</div>
                <div className={styles["summary"]}>
                    The app uses the Model-View-Controller framework. The diagram below summarizes the MVC framework
                    of our app.
                </div>
                <Image 
                    src={"/infosys-project-system-design.svg"} priority={true}
                    width={0}
                    height={0}
                    className={`${styles["project-header"]} ${styles["system-design"]}`}
                />
            </div>
        </div>
    )
}