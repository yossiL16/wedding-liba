import React, { useState, useEffect } from 'react';

export default function CountdownTimer ({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      ימים: Math.floor(difference / (1000 * 60 * 60 * 24)),
      שעות: Math.floor((difference / (1000 * 60 * 60)) % 24),
      דקות: Math.floor((difference / 1000 / 60) % 60),
      שניות: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-container">
      {!timeLeft ? (
        <h1 className="today-msg">Today is the Day!!! 💍</h1>
      ) : (
        <>
          <h2 className="timer-title">החתונה מתקרבת!</h2>
          <div className="timer-display">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="timer-unit">
                <span className="unit-value">{value}</span>
                <span className="unit-label">{unit}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};