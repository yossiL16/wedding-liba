import confetti from 'canvas-confetti'; 

export default function PhotoCard({ dayNumber, unlockDate, imageUrl, isFlipped, onFlip }) {
  const now = new Date();
  const unlock = new Date(unlockDate);
  const isLocked = now < unlock;

  const handleCardClick = () => {
    if (isLocked) {
      alert(`כרטיס זה ייפתח רק ב-${unlock.toLocaleDateString('he-IL')}`);
      return;
    }
    
    if (!isFlipped) {
      // --- אפקט קונפטי ---
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4081', '#ff80ab', '#ffffff'] // צבעים של חתונה
      });
      
      onFlip(dayNumber);
    }
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''} ${isLocked ? 'is-locked' : ''}`} onClick={handleCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <span className="day-count">{dayNumber}</span>
          <span className="status-text">{isLocked ? "🔒" : "לחצי לפתיחה"}</span>
        </div>
        <div className="card-back">
          {/* התמונה עכשיו תתאים את עצמה בזכות ה-CSS המעודכן */}
          <img src={imageUrl} alt={`יום ${dayNumber}`} />
        </div>
      </div>
    </div>
  );
}