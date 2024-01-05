import styles from "./test1.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Test from "../test/test";
import { useState } from "react";

const Test1 = ({ isOpen, toggleTest1 }) => {

    return (
        // <div className={styles["main-container"]}>
        //     <AnimatePresence>
        //         <motion.div
        //             key="modal1"
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: isOpen ? 1 : 0 }}
        //             exit={{ opacity: 0 }}
        //             // className={isOpen ? styles["test-1-open"] : styles["test-1-close"]}
        //             transition={{ duration: 1 }}
        //         >
        //             <div className={styles["test-1-open"]}>
        //                 <button onClick={toggleTest1}>X</button>
        //             </div>
        //         </motion.div>
        //     </AnimatePresence>
        // </div>
        <AnimatePresence>
            <motion.div
                key="modal1"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                className={styles["test-1-open"]}
                transition={{ duration: 1 }}
            >
                <div className={isOpen? styles["box"] : styles["box-closed"]}>
                    <button onClick={toggleTest1}>X</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Test1;
