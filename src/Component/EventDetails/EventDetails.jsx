import "./EventDetails.scss";
import champagne from "../../assets/Icon/champagne.png";
import ring from "../../assets/Icon/wedding-ring.png";
import dateImage from "../../assets/Images/save-date.jpg";

/* function EventDetails() {
  return (
    <section className="event-details">
      <h1 className="event-details__title">Event Details</h1>
      <section className="event-details__cards">
        <article className="event-details__card">
          <img src={ring} alt="wedding-ring" className="event-details__icon" />
          <h2 className="event-details__heading">The Ceremony</h2>
          <p className="event-details__date">Saturday, September 21, 2025</p>
          <p className="event-details__time">02:00 PM - 03:30 PM</p>
          <p className="event-details__location">
            27 Rosewood Lane <br />
            Victoria - V8V1Z8, Canada
          </p>
        </article>
        <article className="event-details__card">
          <img src={champagne} alt="champagne" className="event-details__icon" />
          <h2 className="event-details__heading">The Reception</h2>
          <p className="event-details__date">Saturday, September 21, 2025</p>
          <p className="event-details__time">04:30 PM - 11:30 PM</p>
          <p className="event-details__location">
            100 Harbour Road <br />
            Victoria - V8V1Z8, Canada
          </p>
        </article>
      </section>
    </section>
  );
} */


function EventDetails() {
  return (
    <section className="event">
      <div className="event__top">
        <div className="event__save-box">
          <p className="event__save-text">SAVE<br />THE<br />DATE</p>
        </div>
        <img src={dateImage} alt="Save the date" className="event__top-image" />
      </div>

      <div className="event__date">DECEMBER 26, 2025</div>

      <div className="event__info-wrapper">
        <div className="event__info">
          <h3 className="event__info-title">CEREMONY</h3>
          <p>27 Rosewood Lane<br />Victoria – V8V1Z8</p>
          <p className="event__info-time">2:00 PM</p>
        </div>
        <div className="event__divider" />
        <div className="event__info">
          <h3 className="event__info-title">RECEPTION</h3>
          <p>100 Harbour Road<br />Victoria – V8V1Z8</p>
          <p className="event__info-time">4:30 PM</p>
        </div>
      </div>
    </section>
  );
}



export default EventDetails;
