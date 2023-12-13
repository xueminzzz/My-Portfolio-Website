// Import necessary dependencies and styles
"use client"
import styles from "./page.module.css";
import withLazyLoad from "../withLazyLoad";

const TextComponent = ({ text }) => (
  <div>
    {text}
  </div>
);

const LazyLoadedText = withLazyLoad(TextComponent);

export default function HomePage() {
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <div>
      <div className={styles["main"]}>
        <div>
          {text}
        </div>
      </div>
      <div className={styles["main1"]}>
        <LazyLoadedText text={text} />
      </div>
      {/* <div className={styles["main1"]}>
        <LazyLoadedText text={text} />
      </div> */}
    </div>
  );
}
