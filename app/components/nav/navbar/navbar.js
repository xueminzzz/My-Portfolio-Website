import styles from './navbar.module.css'
import '@/app/globals.css'
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['navbar-ul']}>
                <li className={styles['nav-item']}>Home</li>
                <li className={styles['nav-item']}>Projects</li>
                <li className={styles['nav-item']}>Resume</li>
            </ul>
        </nav>
    )
}
