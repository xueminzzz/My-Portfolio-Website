import { motion } from "framer-motion";
import styles from "./page-to-page-animation.module.css"

const transition = (OgComponent) => {
    return () => {
        <>
            <OgComponent />
            <motion.a
                className={styles["slide-in"]}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.a
                className={styles["slide-out"]}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    }
}

export default transition