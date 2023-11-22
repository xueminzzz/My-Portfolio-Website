"use client"
import styles from "./background-animation.module.css";
import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    console.log("component rendered");
    // Some random colors
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 30;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add(styles.ball);
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 90)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -1 : 1),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      )
    })
  }, [])
  return (
    <div></div>
  )
}
