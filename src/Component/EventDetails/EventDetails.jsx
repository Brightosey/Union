import "./EventDetails.scss";
import dateImage from "../../assets/Images/save-date.jpg";

function EventDetails() {
  return (
    <section className="event">
      <div className="event__top">
        <div className="event__save-box">
          <p className="event__save-text">
            SAVE
            <br />
            THE
            <br />
            DATE
          </p>
        </div>
        <img src={dateImage} alt="Save the date" className="event__top-image" />
      </div>

      <div className="event__date">DECEMBER 26, 2025</div>

      <div className="event__info-wrapper">
        <div className="event__info">
          <h3 className="event__info-title">CEREMONY</h3>
          <p className="event__info-text">
            27 Rosewood Lane
            <br />
            Victoria – V8V1Z8
          </p>
          <p className="event__info-time">2:00 PM</p>
        </div>
        <div className="event__divider" />
        <div className="event__info">
          <h3 className="event__info-title">RECEPTION</h3>
          <p className="event__info-text">
            100 Harbour Road
            <br />
            Victoria – V8V1Z8
          </p>
          <p className="event__info-time">4:30 PM</p>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
