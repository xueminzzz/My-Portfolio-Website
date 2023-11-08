import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <div className={styles["main-container"]}>
            <div className={styles["hamburger-icon"]}>
                <Image
                    src={"/hamburger-icon.svg"} priority={true}
                    width={0}
                    height={0}
                    className={styles["hamburger"]}
                />
            </div>
            <nav>
                <ul className={styles["navbar-ul"]}>
                    <Link href="/" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Home</li>
                    </Link>
                    <Link href="#projects" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Projects</li>
                    </Link>
                    <li className={styles["nav-item"]}>Resume</li>
                </ul>
            </nav>
        </div>

    )
}