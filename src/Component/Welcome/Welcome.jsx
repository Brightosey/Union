import "./Welcome.scss";
import couple1 from "../../assets/Images/couple1.jpg";
import Countdown from "../Countdown/Countdown";

function Welcome() {
  return (
    <section className="welcome">
      <section className="welcome__text">
        <h1 className="welcome__heading">Mayowa &amp; Damola</h1>
        <p className="welcome__date">We are getting married on Dec 20, 2025</p>
        <Countdown />
      </section>
      <figure className="welcome__image-wrapper">
        <img src={couple1} alt="Couple" className="welcome__image" />
      </figure>
    </section>
  );
}

export default Welcome;
