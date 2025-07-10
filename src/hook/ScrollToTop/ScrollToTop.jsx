import "./ScrollToTop.scss";
import { useEffect, useState } from "react";
import upArrow from "../../assets/Icon/arrow-up.png";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleButton = () => {
      setShowButton(window.scrollY > 10);
    };

    handleButton();
    window.addEventListener("scroll", handleButton);
    window.addEventListener("resize", handleButton);

    return () => {
      window.removeEventListener("scroll", handleButton);
      window.removeEventListener("resize", handleButton);
    };
  }, []);

  return (
    <section className="scroll-to-top">
      {showButton && (
        <button
          className="scroll-to-top__button"
          onClick={() => setShowButton(window.scrollTo({ top: 0, behavior: "smooth" }))}
        >
          <img src={upArrow} alt="up arrow" className="scroll-to-top__icon" />
        </button>
      )}
    </section>
  );
}

export default ScrollToTop;
