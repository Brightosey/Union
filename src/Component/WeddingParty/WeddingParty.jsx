import "./WeddingParty.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Friends from "../../Data/Friends";
import { useRef } from "react";

function WeddingParty() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth; // Scroll by full visible width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="wedding-party">
      <div className="wedding-party__header">
        <h1 className="wedding-party__title">Wedding Party</h1>
        <div className="wedding-party__controls">
          <button className="wedding-party__controls-button" onClick={() => handleScroll("left")}>
            <FaChevronLeft />
          </button>
          <button className="wedding-party__controls-button" onClick={() => handleScroll("right")}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="wedding-party__scroll-container" ref={scrollRef}>
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
    </section>
  );
}

export default WeddingParty;
