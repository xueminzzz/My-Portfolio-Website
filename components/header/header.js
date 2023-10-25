'use client'
import Image from 'next/image';
import styles from './header.module.css'
import '@/app/globals.css'
import AboutMe from '@/app/about-me/page.js'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <Image
                src={"/avatar.svg"}
                width={900}
                height={900}
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
    )
}
