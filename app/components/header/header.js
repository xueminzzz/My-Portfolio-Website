"use client"
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles["main-container"]}>
            <div className={styles["header-container"]}>
                <Image
                    src={"/avatar.svg"} priority={true}
                    width={500}
                    height={500}
                    className={styles["avatar"]}
                />

                <div className={styles["information"]}>
                    <div className={styles["me"]}>Ng Xue Min</div>
                    <div className={styles["title"]}>Aspiring Software Developer</div>
                    <div className={styles["about-me-button"]}>
                        <Link href="/about-me">
                            <button className={styles["about-me"]}>About Me</button>
                        </Link>
                        <button className={styles["right-arrow"]}>About Me</button>
                    </div>
                </div>
            </div>
            <div className={styles["scroll-container"]}>
                <div className={styles["scroll"]}>scroll down to view projects</div>
                <div className={`${styles["scroll-down-arrow"]} ${styles["bounce"]}`}></div>
            </div>
        </div>
    )
}
