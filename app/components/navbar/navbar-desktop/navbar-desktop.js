"use client"
import styles from "./navbar-desktop.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({toggle}) {
    return (
        <div className={styles["main-container"]} >
            <Image onClick={() => { toggle; console.log("Toggle clicked!"); }}
                src={"/hamburger-icon.svg"} priority={true}
                width={0}
                height={0}
                className={styles["hamburger"]}
            />
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
