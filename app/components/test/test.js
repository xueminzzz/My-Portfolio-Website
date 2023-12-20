import styles from "./test.module.css";
import { motion } from "framer-motion";
import Test1 from "../test1/test1";
import { useState } from "react";

const Test = () => {
    const [isOpen, setOpen] = useState(false);

    const showTest1 = () => {
        setOpen(!isOpen)
    }

    return (
        <div className={styles["main-container"]}>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <button onClick={showTest1} className={isOpen ? styles["test-1-open"] : styles["test-1-close"]}>OPEN</button>
            </motion.div>
            {<Test1 isOpen={isOpen} showTest1={showTest1} />}
        </div>
    )
}

export default Test