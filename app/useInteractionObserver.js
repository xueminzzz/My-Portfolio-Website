import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (
  threshold = 0
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log({ entry });
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasRendered) {
          if (count > 1) setHasRendered(true);
          else setCount((prevCount) => ++prevCount);
        }
        else if (!entry.isIntersecting) {
          setHasRendered(false);
        }
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, hasRendered, count]);

  // console.log({ isIntersecting, hasRendered });

  return [isIntersecting || hasRendered, ref];
};

export default useIntersectionObserver;
