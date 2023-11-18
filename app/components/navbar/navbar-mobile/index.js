"use client"
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar({ isOpen, toggle }) {

    return (
        <div className={styles["sidebar"]} style={{
            opacity: `${isOpen ? "1" : "0"}`,
        }}>
            <ul className={styles["navbar-ul"]} >
                <Link href="/" className={styles["projects-link"]}>
                    <li className={styles["nav-item"]} onClick={toggle}>Home</li>
                </Link>
                <Link href="#projects" className={styles["projects-link"]}>
                    <li className={styles["nav-item"]} onClick={toggle}>Projects</li>
                </Link>
                <li className={styles["nav-item"]} onClick={toggle}>Resume</li>
            </ul>
        </div>
    )
}
