import "./LegalNotice.scss";
import previous from "../../assets/Icon/previous.png";
import {Link} from "react-router-dom";

function LegalNotice() {
  return (
    <div className="legal-notice">
        <Link to="/" className="legal-notice__back-container" ><img src={previous} className="legal-notice__back" alt="back-icon" /></Link>
      <h1>Legal Notice</h1>
      <p><strong>M&amp;D</strong></p>
      <p>
        724 Alder St<br />
        Edmonds Washington 98020
      </p>
      <p>
        <strong>Phone:</strong> 0123 - 456789<br />
        <strong>Email:</strong> <a href="mailto:sandl@example.com">sandl@example.com</a>
      </p>
    </div>
  );
}

export default LegalNotice;
