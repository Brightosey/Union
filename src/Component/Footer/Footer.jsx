import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__top">
        <div className="footer__logo">
          <a href="/" className="footer__logo-link">
            M&amp;D
          </a>
        </div>
        <div className="footer__nav">
          <a href="#Welcome" className="footer__link">
            Welcome
          </a>
          <a href="#Ourstory" className="footer__link">
            Our Story
          </a>
          <a href="#Eventdetails" className="footer__link">
            Event Details
          </a>
          <a href="#Contact" className="footer__link">
            Contact
          </a>
        </div>
      </section>

      <section className="footer__bottom">
        <p className="footer__copyright">&copy; M&amp;L</p>
        <div>
          <Link to="/policy" className="footer__link">Private Policy</Link>
          <strong className="footer__seperator"> | </strong>
          <Link to="/legal" className="footer__link">Legal Notice</Link>
        </div>
       {/*  <p className="footer__legal">Legal Notice | Privacy Policy</p> */}
      </section>
    </footer>
  );
}

export default Footer;
