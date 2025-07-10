import "./Countdown.scss";
import { useEffect, useState } from "react";

function Countdown() {
  const getTimeLeft = () => {
    const eventDate = new Date("2025-12-20T00:00:00");
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <div className="countdown__item">
        <p className="countdown__number">{timeLeft.days}</p>
        <p className="countdown__label">DAYS</p>
      </div>
      <div className="countdown__item">
        <p className="countdown__number">{timeLeft.hours}</p>
        <p className="countdown__label">HOURS</p>
      </div>
      <div className="countdown__item">
        <p className="countdown__number">{timeLeft.minutes}</p>
        <p className="countdown__label">MINUTES</p>
      </div>
      <div className="countdown__item">
        <p className="countdown__number">{timeLeft.seconds}</p>
        <p className="countdown__label">SECONDS</p>
      </div>
    </section>
  );
}

export default Countdown;
