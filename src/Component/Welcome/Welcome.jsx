import "./Welcome.scss";
import couple1 from "../../assets/Images/couple1.jpg";
import Countdown from "../Countdown/Countdown";
import love from "../../assets/Icon/love.png";
import flower from "../../assets/Icon/flower.png";

function Welcome() {
  return (
    <section className="welcome">
      <section className="welcome__text">
        <h1 className="welcome__heading">Damola &amp; Mayowa</h1>
        <div className="welcome__box">
          <img className="welcome__icon" src={flower} alt="flower" />
          <div className="welcome__message">
            <p className="welcome__date">we're getting</p>
            <p className="welcome__date"><strong>MARRIED</strong></p>
          </div>
          <img className="welcome__icon" src={love} alt="ring" />
        </div>
        <Countdown />
      </section>
      <figure className="welcome__image-wrapper">
        <img src={couple1} alt="Couple" className="welcome__image" />
      </figure>
    </section>
  );
}

export default Welcome;
