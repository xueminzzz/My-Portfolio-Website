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
                    <Link href="/about-me" className={styles["link"]}>
                        <div className={styles["about-me-container"]}>
                            <button className={styles["about-me-button"]}>About Me</button>
                            <button className={styles["right-arrow"]}></button>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <div className={styles["scroll-container"]}>
                <div className={styles["scroll"]}>scroll down to view projects</div>
                <Link href="#projects">
                    <button className={`${styles["scroll-down-arrow"]} ${styles["bounce"]}`}></button>
                </Link>
            </div> */}
        </div>
    )
}

