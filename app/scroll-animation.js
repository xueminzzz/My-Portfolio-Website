import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
    exit: { opacity: 0 }
};


export default function Animation({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("exit");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={animationVariants}>
            {children}
        </motion.div>
    );
}