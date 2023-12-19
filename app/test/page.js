// // Import necessary dependencies and styles
"use client"
import styles from "./page.module.css";
import transition from "../page-to-page-animation";
import Test from "../components/test/test";

const TestPage = () => {
  return (
    <>
      <Test />
    </>
  )
}

export default TestPage

// import withLazyLoad from "../withLazyLoad";

// const TextComponent = () => (
//   <div className={styles["main1"]}>
//     hello
//   </div>
// );

// const LazyLoadedText = withLazyLoad(TextComponent);

// export default function HomePage() {
//   return (
//     <div>
//       <div className={styles["main"]}>
//         <div>
//           there
//         </div>
//       </div>
//         <LazyLoadedText />
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const animationVariants = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
//   hidden: { opacity: 0, scale: 0 },
//   exit: { opacity: 0, y: "100%" }
// };

// function Animation({ children }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("exit");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div ref={ref} animate={controls} initial="hidden" variants={animationVariants}>
//       {children}
//     </motion.div>
//   );
// }

// const Test = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//   setCount(prevCount => {
//     console.log("Previous Count:", prevCount);
//     return prevCount + 1;
//   });
// };


//   return (
//     <div className={styles["App"]}>
//       <h1>Scroll Down</h1>
//       <button onClick={incrementCount}>+</button>
//       <p>{count}</p>
//     </div>
//   );
// }

// export default Test;