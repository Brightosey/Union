import "./Gallery.scss";
import img1 from "../../assets/Images/the-beginning.jpg";
import img2 from "../../assets/Images/save-the-date.jpg";
import img3 from "../../assets/Images/bride-vibes.jpg";
import img4 from "../../assets/Images/grooms-goal.jpg";
import img5 from "../../assets/Images/better-togther.jpg";
import img6 from "../../assets/Images/laughter.jpg";
import img7 from "../../assets/Images/countdown.jpg";
import img8 from "../../assets/Images/made-for-each-other.jpg";
import img9 from "../../assets/Images/favourite-people.jpg";
import { useState, useEffect } from "react";

function Gallery() {
  const galleryImages = [
    { src: img1, title: "The Beginning" },
    { src: img2, title: "Save The Date" },
    { src: img3, title: "Bride Vibes" },
    { src: img4, title: "Groom's Goal" },
    { src: img5, title: "Better Together" },
    { src: img6, title: "Laughter" },
    { src: img7, title: "Countdown" },
    { src: img8, title: "Made for Each Other" },
    { src: img9, title: "Favourite People" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval (() => {
      setActiveIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);


  return (
    <section className="gallery">
      <div className="gallery__main">
        <img
          src={galleryImages[activeIndex].src}
          alt={`Slide ${activeIndex + 1}`}
          className="gallery__main-image"
        />
        <p className="gallery__caption">{galleryImages[activeIndex].title}</p>
      </div>

      <div className="gallery__dots">
        {galleryImages.map((_, index) => (
          <span
            key={index}
            className={`gallery__dot ${
              index === activeIndex ? "gallery__dot--active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
