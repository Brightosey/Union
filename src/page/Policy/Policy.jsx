import "./Policy.scss";
import previous from "../../assets/Icon/previous.png";
import {Link} from "react-router-dom";

function Policy() {
  return (
    <section className="policy">
      <Link to="/" className="policy__back-container" ><img src={previous} className="policy__back" alt="back-icon" /></Link>
      <h1 className="policy__title">Privacy Policy</h1>

      <section className="policy__section">
        <h2 className="policy__heading">An Overview of Data Protection</h2>
        <p className="policy__text">
          The following gives a simple overview of what kind of personal information we collect, why we collect them and how we handle your data when you are visiting or using our website. Personal information is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy found below.
        </p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Data Collection on Our Website</h2>

        <h3 className="policy__subheading">Who is responsible for the data collection on this website?</h3>
        <p className="policy__text">The data collected on this website are processed by the website operator. The operator's contact details can be found in the website's required legal notice.</p>

        <h3 className="policy__subheading">How do we collect your data?</h3>
        <p className="policy__text">Some data are collected when you provide them to us (e.g. in a contact form). Other data are collected automatically by our IT systems when you visit the site. These include technical data like your browser, operating system, and the time you accessed the site.</p>

        <h3 className="policy__subheading">What do we use your data for?</h3>
        <p className="policy__text">Some data are collected to ensure proper website functionality. Others may be used to analyze user behavior.</p>

        <h3 className="policy__subheading">What rights do you have regarding your data?</h3>
        <p className="policy__text">You may request access, correction, blocking, or deletion of your personal data at any time free of charge. You also have the right to file a complaint with a regulatory authority.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Analytics and Third-party Tools</h2>
        <p className="policy__text">Your browsing behavior may be statistically analyzed through cookies and analytics. This analysis is generally anonymous. You can object to or prevent this by not using certain tools.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">General Information and Mandatory Information</h2>
        <h3 className="policy__subheading">Data Protection</h3>
        <p className="policy__text">We treat your personal data confidentially and in accordance with legal data protection regulations. Note that internet data transmission (e.g., email) may be vulnerable to security breaches.</p>

        <h3 className="policy__subheading">Responsible Party</h3>
        <p className="policy__text">The responsible party is the person or organization deciding the means and purpose of processing personal data.</p>

        <h3 className="policy__subheading">Revocation of Consent</h3>
        <p className="policy__text">You may revoke your consent to data processing at any time. Data processed before your request may remain legally valid.</p>

        <h3 className="policy__subheading">Right to File Complaints</h3>
        <p className="policy__text">If you believe your data protection rights have been violated, you may file a complaint with regulatory authorities.</p>

        <h3 className="policy__subheading">Right to Data Portability</h3>
        <p className="policy__text">You may request your data in a machine-readable format, or request a direct transfer to another responsible party where technically feasible.</p>

        <h3 className="policy__subheading">SSL or TLS Encryption</h3>
        <p className="policy__text">We use SSL/TLS encryption to protect data transmission. You’ll see a lock icon or “https://” in your browser’s address bar when encryption is active.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Encrypted Payments</h2>
        <p className="policy__text">If you enter payment info on our site, that data is processed via encrypted SSL/TLS connections. Your data cannot be accessed by third parties during encrypted transmission.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Information, Blocking, Deletion</h2>
        <p className="policy__text">You may request access to your stored personal data and ask for its correction, blocking, or deletion at any time. Contact us via the legal notice address.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Opposition to Promotional Emails</h2>
        <p className="policy__text">Use of published contact information for unsolicited advertisements is strictly prohibited. We reserve the right to take legal action against spammers.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Cookies</h2>
        <p className="policy__text">Our site uses cookies to improve usability and security. Most cookies are deleted after your visit. Others remain until you delete them manually. You can configure your browser to accept or reject cookies as desired.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Server Log Files</h2>
        <p className="policy__text">We automatically collect data such as browser type, OS, referrer, IP address, and time of access. These are stored for security and statistical purposes.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Contact Form</h2>
        <p className="policy__text">When you contact us through a form, we store the data you provide to answer your questions. We do not share this without your consent.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Processing of Customer & Contract Data</h2>
        <p className="policy__text">We process your data only as needed to fulfill contracts. Your data will be deleted after completion unless legal retention periods apply.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Data Transfers During Online Purchases</h2>
        <p className="policy__text">We share your data with third parties (e.g., delivery or payment providers) only as necessary to fulfill a contract. No marketing data sharing without consent.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Analytics and Advertising: Matomo</h2>
        <p className="policy__text">We use Matomo (open-source) for web analytics. It uses cookies, but your IP address is anonymized. You can disable tracking through browser settings or opt-out features.</p>
      </section>

      <section className="policy__section">
        <h2 className="policy__heading">Newsletter</h2>
        <p className="policy__text">To subscribe, we require your email and confirmation of consent. You can unsubscribe at any time via the link in our emails. Your data will not be shared without permission.</p>
      </section>
    </section>
  );
}

export default Policy;
