
import React, { useRef, useEffect, useState } from "react";

const BacktoTop = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentPosition / totalHeight) * 100;
      setScrollProgress(progress);
      if (currentPosition > 200) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={elementRef}
      id="progress"
      style={{
        display: scrollDirection === "down" ? "none" : "grid",
        background: `conic-gradient(rgb(10, 150, 66) ${scrollProgress}%, rgb(215, 215, 215) ${scrollProgress}%)`
      }}
    >
      <span id="progress-value" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </span>
    </div>
  );
};

export default BacktoTop;

