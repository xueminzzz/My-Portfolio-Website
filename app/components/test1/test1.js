import styles from "./test1.module.css";
import { motion, MotionConfig } from "framer-motion";

const Test1 = ({ isOpen, isClosed }) => {

    return (
        // <MotionConfig >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                exit={{ opacity: 0 }} 
                className={styles["main-container"]}
                transition={{ duration: 1 }}
            />
        // </MotionConfig>
    );
};

export default Test1;
