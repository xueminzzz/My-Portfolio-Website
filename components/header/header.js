import Image from 'next/image';
import styles from './header.module.css'
import '@/app/globals.css'

export default function Header() {
    return (
        <div className={styles["header-container"]}>
            <Image
                src="/avatar.svg"
                width={400}
                height={400}
                className={styles["avatar"]}
                priority
            />
            <div className={styles["information"]}>
                <div className={styles.me}>Ng Xue Min</div>
                <div className={styles.title}>Aspiring Software Developer</div>
                <div className={styles["about-me-button"]}>
                    <button className={styles["about-me"]}>About Me</button>
                    <button className={styles["right-arrow"]}>About Me</button>
                </div>
            </div>
        </div>
    )
}
