import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  /* ---------------- INITIAL SETUP ---------------- */
  useEffect(() => {
    generateStars();
    generateMeteors();

    window.addEventListener("resize", generateStars);

    // regenerate meteors occasionally for natural randomness
    const meteorInterval = setInterval(generateMeteors, 12000);

    return () => {
      window.removeEventListener("resize", generateStars);
      clearInterval(meteorInterval);
    };
  }, []);

  /* ---------------- STARS ---------------- */
  const generateStars = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newStars = [];
    const smallCount  = Math.min((width * height) / 6000, 120);
const mediumCount = Math.min((width * height) / 12000, 60);
const bigCount    = Math.min((width * height) / 30000, 25);


    // ⭐ Small stars
    for (let i = 0; i < smallCount; i++) {
      newStars.push({
        id: `small-${i}`,
        size: Math.random() * 1.5 + 0.5,
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.4 + 0.2,
        duration: Math.random() * 4 + 4,
      });
    }

    // ⭐ Medium stars
    for (let i = 0; i < mediumCount; i++) {
      newStars.push({
        id: `medium-${i}`,
        size: Math.random() * 2 + 1.5,
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.5 + 0.4,
        duration: Math.random() * 3 + 3,
      });
    }

    // ⭐ Big stars
    for (let i = 0; i < bigCount; i++) {
      newStars.push({
        id: `big-${i}`,
        size: Math.random() * 3 + 2.5,
        x: Math.random() * width,
        y: Math.random() * height,
        opacity: Math.random() * 0.3 + 0.7,
        duration: Math.random() * 2 + 2,
      });
    }

    setStars(newStars);
  };

  /* ---------------- METEORS ---------------- */
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: -(Math.random() * 15), // 👈 negative delay = already moving
        duration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle animate-star-float"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* 🌠 Meteors (dark mode only) */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor dark:block hidden"
          style={{
            width: `${meteor.size * 50}px`,
            height: "2px",
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};