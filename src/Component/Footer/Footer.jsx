import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__top">
        <div className="footer__logo">
          <a href="/" className="footer__logo-link">
            B&amp;L
          </a>
        </div>
        <div className="footer__nav">
          <a href="#welcome" className="footer__link">
            Welcome
          </a>
          <a href="#ourstory" className="footer__link">
            Our Story
          </a>
          <a href="#eventdetails" className="footer__link">
            Event Details
          </a>
          <a href="#contact" className="footer__link">
            Contact
          </a>
        </div>
      </section>

      <section className="footer__bottom">
        <p className="footer__copyright">&copy; B&amp;L</p>
        <p className="footer__legal">Legal Notice | Privacy Policy</p>
      </section>
    </footer>
  );
}

export default Footer;
