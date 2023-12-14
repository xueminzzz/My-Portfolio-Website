// // Import necessary dependencies and styles
"use client"
import styles from "./page.module.css";
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

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animationVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 0 },
  exit: { opacity: 0, y: "100%" }
};

function Animation({ children }) {
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

export default function Test() {
  return (
    <div className={styles["App"]}>
      <h1>Scroll Down</h1>

      <div className={styles["container"]}>
        <Animation>
          <div className={styles["text"]}>
            <strong>The Controller</strong> serves as the intermediary between the Model and View. It changes the View
            based on changes to the Model. Changes to the Model are triggered by user interactions with
            our app. For example, when the user adds an item to their cart, this will instantiate the
            onClick() function in the Controller which in turn triggers the Order class in the Model.
            An Order object will be created and the user will see a new order being created in their cart.
          </div>
        </Animation>
      </div>
      <div className={styles["container"]}>
        <Animation>
          <div className={styles["square"]}></div>
        </Animation>
      </div>
      <div className={styles["container"]}>
        <Animation>
          <div className={styles["square"]}></div>
        </Animation>
      </div>
      <div className={styles["container"]}>
        <Animation>
          <div className={styles["square"]}></div>
        </Animation>
      </div>
    </div>
  );
}