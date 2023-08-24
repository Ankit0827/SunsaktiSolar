import React, { useState, useEffect } from "react";
import '../../../CSS/Achievement.css'

const Achievements = () => {
  const [isInView, setIsInView] = useState(false);
  const [animateDiv, setAnimateDiv] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetNumbers = [300, 60, 6, 50];

  const Heading = [
    "Total Projects",
    "Mega Watts Installed",
    "Awards",
    "Team members",
  ];

  useEffect(() => {
    const handleScroll = (entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
        setAnimateDiv(true)
      }
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 1.0 });

    observer.observe(document.querySelector(".Achievement-div"));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const animationDuration = 1000;

    if (isInView) {
      const intervals = targetNumbers.map((target, index) => {
        if (counts[index] < target) {
          const timePerStep = Math.ceil(
            animationDuration / (target - counts[index])
          );
          return setInterval(() => {
            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              if (newCounts[index] < target) {
                newCounts[index] = Math.min(newCounts[index] + 1, target);
              }
              return newCounts;
            });
          }, timePerStep);
        }
        return null;
      });

      return () => {
        intervals.forEach((interval) => {
          if (interval) {
            clearInterval(interval);
          }
        });
      };
    }
  }, [isInView, counts, targetNumbers]);

  return (
    <div
      className="Achievement-div"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#b87720"
      }}
    >
      <div
        className="achievemnt-div-heading"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white"
        }}
      >
        <h2 style={{
          borderBottom: "2px solid white"
        }}>Achievements</h2>
      </div>
      <div
        className="count-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {counts.map((count, index) => (
          <div key={index} className={animateDiv ? "count-container" : "count-container-animate"}>
            <p
              className="count"
              style={{
                fontSize: "3rem",
                fontWeight: "600",
                width: "14rem",
                textAlign: "center",
                color: "white",
              }}
            >
              {count + "+"}
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "600",
                color: "white"
              }}
            >
              {Heading[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
