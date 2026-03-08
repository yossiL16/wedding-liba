import React, { useState } from 'react';
import PhotoCard from './components/PhotoCard';
import CountdownTimer from './components/CountdownTimer';
import './App.css';


export default function App() {
  const weddingDate = "2026-03-15T08:00:00"; // תאריך החתונה (בוקר)

  // הגדרת 8 הימים האחרונים עם תאריכי פתיחה ספציפיים
  const [cards] = useState([
    { id: 10, date: "2026-03-05T00:00:00", img: '/image/PH-10.jpeg' },
    { id: 9, date: "2026-03-06T00:00:00", img: "/image/PH-9.jpeg" },
    { id: 8, date: "2026-03-07T00:00:00", img: "/image/PH-8.jpeg" },
    { id: 7, date: "2026-03-08T00:00:00", img: "/image/PH-7.jpeg" },
    { id: 6, date: "2026-03-09T00:00:00", img: "/image/PH-6.jpeg" },
    { id: 5, date: "2026-03-10T00:00:00", img: "/image/PH-5.jpeg" },
    { id: 4, date: "2026-03-11T00:00:00", img: "/image/PH-4.jpeg" },
    { id: 3, date: "2026-03-12T00:00:00", img: "/image/PH-3.jpeg" },
    { id: 2, date: "2026-03-13T00:00:00", img: "/image/PH-2.jpeg" },
    { id: 1, date: "2026-03-14T00:00:00", img: "/image/PH-1.jpeg" },
  ]);

  

  const [openedCards, setOpenedCards] = useState(() => {
    const saved = localStorage.getItem('wedding_photos_opened');
    return saved ? JSON.parse(saved) : [];
  });

  const handleFlip = (id) => {
    const newOpened = [...openedCards, id];
    setOpenedCards(newOpened);
    localStorage.setItem('wedding_photos_opened', JSON.stringify(newOpened));
  };

  return (
    <div className="app-container">
      <CountdownTimer targetDate={weddingDate} />
      <div className="cards-grid">
        {cards.map((card) => (
          <PhotoCard 
            key={card.id}
            dayNumber={card.id}
            unlockDate={card.date}
            imageUrl={card.img}
            isFlipped={openedCards.includes(card.id)}
            onFlip={handleFlip}
          />
        ))}
      </div>
    </div>
  );
}