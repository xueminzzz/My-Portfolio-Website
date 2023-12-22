import styles from "./test.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Test1 from "../test1/test1";
import { useState } from "react";

const Test = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleTest1 = () => {
        setOpen(!isOpen)
    }

    console.log({ isOpen })

    return (
        // <div className={styles["main-container"]}>
        //     <motion.div
        //         initial={{ opacity: 1 }}
        //         animate={{ opacity: isOpen ? 0 : 1 }}
        //         exit={{ opacity: 0 }}
        //         transition={{ duration: 1 }}
        //     >
        //         <button onClick={toggleTest1} className={isOpen ? styles["test-1-open"] : styles["test-1-close"]}>OPEN</button>
        //     </motion.div>
        //     {<Test1 isOpen={isOpen} toggleTest1={toggleTest1} />}
        // </div>
        // <div className={styles["main-container"]}>
        //     <AnimatePresence>
        //         <motion.div
        //             key="modal"
        //             initial={{ opacity: 1 }}
        //             animate={{ opacity: isOpen ? 0 : 1 }}
        //             exit={{ opacity: 0 }}
        //             transition={{ duration: 1 }}
        //         >
        //             <button onClick={toggleTest1} className={isOpen ? styles["test-1-open"] : styles["test-1-close"]}>OPEN</button>
        //         </motion.div>
        //     </AnimatePresence>

        //     <Test1 isOpen={isOpen} toggleTest1={toggleTest1} />
        // </div>
        // <AnimatePresence>
        //     <motion.div
        //         key="modal"
        //         initial={{ opacity: 1 }}
        //         animate={{ opacity: isOpen ? 0 : 1 }}
        //         exit={{ opacity: 0 }}
        //         className={isOpen ? styles["test-close"] : styles["test-open"]}
        //         transition={{ duration: 1 }}
        //     >
        //         <button onClick={toggleTest1} className={styles["button"]}>OPEN</button>
        //     </motion.div>
        //     <Test1 isOpen={isOpen} toggleTest1={toggleTest1} />
        // </AnimatePresence>
        <div className={styles["main-container"]}>
            <button onClick={toggleTest1} className={isOpen ? styles["test-1-open"] : styles["test-1-close"]}>OPEN</button>
            <Test1 isOpen={isOpen} toggleTest1={toggleTest1} />
        </div>
    )
}

export default Test