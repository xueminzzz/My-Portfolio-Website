import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        // <div className={styles["main-container"]}>
            <div className={styles["footer-container"]}>
                <div className={styles["lets-connect"]}>Let's Connect!</div>
                <div className={styles["social-media-icon"]}>
                    <Link href="/about-me#chat">
                        <button className={styles["mail"]}></button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ngxm" target="_blank">
                        <button className={styles["linkedin"]}></button>
                    </Link>
                    <Link href="https://github.com/dashboard" target="_blank">
                        <button className={styles["github"]}></button>
                    </Link>
                </div>
            </div>
        // </div>
    )
}
