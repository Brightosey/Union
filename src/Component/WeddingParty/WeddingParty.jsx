import "./WeddingParty.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Friends from "../../Data/Friends";
import { useEffect, useState } from "react";

function WeddingParty() {
  const slideAmount = 300; // Width of one full card
  const getVisibleCount = () => Math.floor(window.innerWidth / slideAmount);

  const [offset, setOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const totalSlides = Math.ceil(Friends.length / visibleCount); // e.g., 9 cards / 3 per screen = 3 pages
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setCurrentSlide(0);
      setOffset(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      setOffset(-slideAmount * visibleCount * newSlide);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      setOffset(-slideAmount * visibleCount * newSlide);
    }
  };

  return (
    <section className="wedding-party">
      <div className="wedding-party__header">
        <h1 className="wedding-party__title">Wedding Party</h1>
        <div className="wedding-party__controls">
          <button
            className="wedding-party__button"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <FaChevronLeft />
          </button>
          <button
            className="wedding-party__button"
            onClick={handleNext}
            disabled={currentSlide >= totalSlides - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="wedding-party__wrapper">
        <div
          className="wedding-party__track"
          style={{
            transform: `translateX(${offset}px)`,
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
