import "./Gifts.scss";
import giftImage from "../../assets/Images/gift.jpg";
import paypalBarcode1 from "../../assets/Images/paypal.png";
import paypalBarcode2 from "../../assets/Images/paypal.png";

function Gifts() {
  return (
    <section className="gifts" id="gifts">
      <div className="gifts__image-wrapper">
        <img src={giftImage} className="gifts__image" alt="Wedding Gift Display" />
      </div>
      <div className="gifts__content">
        <div className="gifts__text">
          <h2 className="gifts__title">Our Wedding Gifts</h2>

          <p className="gifts__paragraph">
            Dear Family & Friends,
            <br />
            We are overjoyed to have you join us as we start this beautiful
            journey together!
          </p>
          <p className="gifts__paragraph">
            In place of physical gifts, we kindly request that any contributions
            be directed to our cash registry, helping us build a foundation for
            our new home.
          </p>

          <h3 className="gifts__subheading">🇳🇬 Nigerian Accounts (₦)</h3>
          <div className="gifts__accounts">
            <div className="gifts__account">
              <p>
                <strong>Eniola – GTBank</strong>
                <br />
                0122823142
              </p>
            </div>
            <div className="gifts__account">
              <p>
                <strong>Timilehin – Access Bank</strong>
                <br />
                0690806193
              </p>
            </div>
          </div>

          <h3 className="gifts__subheading">🇨🇦 Canadian Accounts (CAD)</h3>
          <div className="gifts__accounts">
            <div className="gifts__account">
              <p>
                <strong>Damola – CIBC</strong>
                <br />
                Transit: 00016 • Institution: 010
                <br />
                Acct: 99999999 • SWIFT: CIBCCATT
              </p>
            </div>
            <div className="gifts__account">
              <p>
                <strong>Mayowa – Scotia</strong>
                <br />
                Transit: 20016 • Institution: 002
                <br />
                Acct: 99999999 • SWIFT: NOSCCATT
              </p>
            </div>
          </div>

          <h3 className="gifts__subheading">🌍 PayPal</h3>
          <p className="gifts__paragraph">
            Scan a barcode to give from anywhere:
          </p>
          <div className="gifts__barcodes">
            <img src={paypalBarcode1} alt="PayPal Mayowa" />
            <img src={paypalBarcode2} alt="PayPal Damola" />
          </div>

          <p className="gifts__closing">
            We pray blessings overflow in your life as you’ve poured into ours.
            Amen.
          </p>
          <p className="gifts__signature">
            With all our love, <br />
            Damola & Mayowa
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gifts;
