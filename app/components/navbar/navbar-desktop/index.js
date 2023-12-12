"use client"
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ isOpen, toggle }) {
    return (
        <div className={styles["main-container"]}>
            <div className={isOpen ? styles["hamburger-container-open"] : styles["hamburger-container-close"]}>
                <div className={isOpen ? styles["name-close"] : styles["name"]}>✿Xue Min✿</div>
                <button onClick={toggle} className={isOpen ? styles["close-button"] : styles["hamburger"]}>
                </button>
            </div>
            <nav className={styles["navbar"]}>
                <div className={styles["name"]}>✿Xue Min✿</div>
                <ul className={styles["navbar-ul"]}>
                    <Link href="/" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Home</li>
                    </Link>
                    <Link href="/#projects" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Projects</li>
                    </Link>
                    <Link href="test">
                        <li className={styles["nav-item"]}>Resume</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
