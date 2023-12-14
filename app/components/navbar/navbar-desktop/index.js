"use client"
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ isOpen, toggle }) {
    return (
        <div className={styles["main-container"]}>
            <div className={isOpen ? styles["hamburger-container-open"] : styles["hamburger-container-close"]}>
                <Link href="/" className={styles["projects-link"]}>
                    <div className={isOpen ? styles["name-close"] : styles["name"]}>✿Xue Min✿</div>
                </Link>
                <button onClick={toggle} className={isOpen ? styles["close-button"] : styles["hamburger"]}>
                </button>
            </div>
            <nav className={styles["navbar"]}>
                <Link href="/" className={styles["projects-link"]}>
                    <div className={styles["name"]}>✿Xue Min✿</div>
                </Link>
                <ul className={styles["navbar-ul"]}>
                    <Link href="/" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Home</li>
                    </Link>
                    <Link href="/#projects" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Projects</li>
                    </Link>
                    <li className={styles["nav-item"]}>Resume</li>
                </ul>
            </nav>
        </div>
    )
}
