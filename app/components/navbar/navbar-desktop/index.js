"use client"
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PageTransition from "@/app/page-to-page-animation";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import transition from "@/app/page-to-page-animation";

export default function Navbar({ isOpen, toggle }) {
    const router = useRouter();
    const TransitionLink = transition(motion.a);
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
                    {/* <TransitionLink> */}
                        {/* <motion.a
                            href="/test"
                            onClick={(e) => {
                                e.preventDefault();
                                router.push("/test");
                            }}
                            className={`${styles["projects-link"]} ${styles["nav-item"]}`}
                        >
                            Resume
                        </motion.a> */}
                    {/* </TransitionLink> */}
                    <Link href="/test" className={styles["projects-link"]}>
                        <li className={styles["nav-item"]}>Resume</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
