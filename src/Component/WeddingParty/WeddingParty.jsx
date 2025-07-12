import "./WeddingParty.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Friends from "../../Data/Friends";
import { useEffect, useState } from "react";

function WeddingParty() {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 300;
  const spacing = 16;
  const effectiveCardWidth = cardWidth + spacing;

  const totalCards = Friends.length;

  // 🧠 Calculate how many possible full-slide positions exist
  const maxSlideIndex = Math.max(0, Math.ceil(totalCards / visibleCount) - 1);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setCurrentSlide(0); // reset to first slide
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1024) return 4; // Desktop
    if (width >= 768) return 3; // Tablet
    return 1; // Mobile
  }

  // 🧠 Smart offset: if it's the last slide, shift just enough to show final cards
  const lastVisibleCardIndex = Math.min(
    totalCards,
    (currentSlide + 1) * visibleCount
  );
  const offset = Math.min(
    currentSlide * visibleCount * effectiveCardWidth,
    totalCards * effectiveCardWidth - visibleCount * effectiveCardWidth
  );

  const handleNext = () => {
    if (currentSlide < maxSlideIndex) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Touch swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    const delta = touchStartX - touchEndX;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  return (
    <section className="wedding-party">
      <div className="wedding-party__header">
        <h1 className="wedding-party__title">Wedding Party</h1>
        <div className="wedding-party__controls">
          <button onClick={handlePrev} disabled={currentSlide === 0}>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} disabled={currentSlide >= maxSlideIndex}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        className="wedding-party__wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="wedding-party__track"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.4s ease-in-out",
          }}
        >
          {Friends.map((member, index) => (
            <div className="wedding-party__card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="wedding-party__image"
              />
              <div className="wedding-party__overlay">
                <h3 className="wedding-party__name">{member.name}</h3>
                <p className="wedding-party__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeddingParty;
