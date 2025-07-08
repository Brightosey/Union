import "./EventDetails.scss";
import champagne from "../../assets/Icon/champagne.png";
import ring from "../../assets/Icon/wedding-ring.png";

function EventDetails() {
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
}

export default EventDetails;
