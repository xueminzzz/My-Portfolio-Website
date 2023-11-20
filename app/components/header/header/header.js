"use client"
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export default function Header() {

    const [Open, IsOpen] = useState(false);

    const toggleAboutMe = () => {
        IsOpen((prevOpen) => !prevOpen);
        console.log("About Me clicked! isOpen:", !Open);
    };

    return (
        <div className={styles["main-container"]}>
            <HeaderContext.Provider value={{ Open }}>
                <AboutMe />
            </HeaderContext.Provider>
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
                    {/* <Link href="/about-me" className={styles["link"]}> */}
                    <div className={styles["about-me-container"]}>
                        <button className={styles["about-me-button"]} onClick={toggleAboutMe}>About Me</button>
                        <button className={styles["right-arrow"]} onClick={toggleAboutMe}></button>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className={styles["scroll-container"]}>
                <div className={styles["scroll"]}>scroll down to view projects</div>
                <div className={`${styles["scroll-down-arrow"]} ${styles["bounce"]}`}></div>
            </div>
        </div>
    )
}

function AboutMe() {
    let { Open } = useContext(HeaderContext);
    return (
        <div className={styles["random-text"]}>
            <p style={{
                opacity: `${Open ? "1" : "0"}`,
            }}>HELLO</p>
        </div>
    )
}

