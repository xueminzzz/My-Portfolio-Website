import styles from "./test1.module.css";
import { motion } from "framer-motion";
import Test from "../test/test";
import { useState } from "react";

const Test1 = ({ isOpen, showTest1 }) => {

    return (
        <div className={styles["main-container"]}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                className={isOpen ? styles["test-1-open"] : styles["test-1-close"]}
                transition={{ duration: 1 }}
            >
                <button onClick={showTest1}>X</button>
            </motion.div>
        </div>
    );
};

export default Test1;
