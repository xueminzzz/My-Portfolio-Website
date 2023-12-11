// components/FadeInSection.js
import React from "react";
import styles from "./fade-in.module.css"

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className={isVisible ? styles["fade-in-section-visible"] : styles["fade-in-section"]} ref={domRef}>
        {props.children}
    </div>
  );
};

export default FadeInSection;
