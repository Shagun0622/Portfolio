import { useEffect, useRef } from "react";

export const ElasticCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const speed = 0.12; // ⬅️ smaller = more delay (premium feel)

    const moveCursor = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      requestAnimationFrame(moveCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    moveCursor();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={cursorRef} className="cursor-follower" />;
};
