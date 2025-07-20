import "./Contact.scss";
import { useState } from "react";
import contactImage from "../../assets/Images/contact-image.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isPhoneValid(phone) {
    return /^\+?[0-9\s\-()]{7,15}$/.test(phone);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isEmailValid(email)) {
      alert("Please enter a valid Email");
      return;
    }

    if (!isPhoneValid(phone)) {
      alert("Please enter a valid number");
      return;
    }

    alert("Form submitted successfully!");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="contact">
      <div className="contact__image-wrapper">
        <img src={contactImage} alt="contact" className="contact__image" />
      </div>

      <div className="contact__content">
        <h1 className="contact__title">Will you attend?</h1>
        <p className="contact__description">
          Please let us know if you’ll be joining us to celebrate this special
          day. If you have any questions or need further information, feel free
          to reach out using the form below.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            className="contact__input"
            required
          />
          <input
            type="tel"
            name="phone"
            value={phone}
            placeholder="Your Phone"
            onChange={(e) => setPhone(e.target.value)}
            className="contact__input"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="contact__input"
            required
          />
          <textarea
            name="message"
            value={message}
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            className="contact__textarea"
            required
          />

          <button type="submit" className="contact__button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
