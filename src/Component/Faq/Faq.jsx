import "./Faq.scss";
import { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How do I find the venue?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate." },
    { question: "Where can I park?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate." },
    { question: "Is there a dress code for the event?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate." },
    { question: "Are children welcome at the wedding?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate." },
    { question: "Where can out-of-town guests stay?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate." },
  ];

  return (
    <section className="faq">
      <h1 className="faq__title">FAQ</h1>
      <div className="faq__list">
        {faqs.map((item, index) => (
          <div key={index} className={`faq__item ${index === activeIndex ? "faq__item--active" : ""}`}>
            <div
              className="faq__question"
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              <h2 className="faq__question-text">{item.question}</h2>
              <span className="faq__toggle-icon">
                {index === activeIndex ? "x" : "+"}
              </span>
            </div>

            {index === activeIndex && (
              <div className="faq__answer">
                <p className="faq__answer-text">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
