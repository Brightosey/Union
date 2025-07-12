import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Welcome from "../../Component/Welcome/Welcome";
import OurStory from "../../Component/OurStory/OurStory";
import EventDetails from "../../Component/EventDetails/EventDetails";
import Gallery from "../../Component/Gallery/Gallery";
import Contact from "../../Component/Contact/Contact";
import Faq from "../../Component/Faq/Faq";
import Gifts from "../../Component/Gifts/Gifts";
import WeddingParty from "../../Component/WeddingParty/WeddingParty";

function HomePage() {
  return (
    <section>
      <Header />

      <section id="Welcome">
        <Welcome />
      </section>

      <section id="OurStory">
        <OurStory />
      </section>

      <section id="EventDetails">
        <EventDetails />
      </section>

      <section id="Gallery">
        <Gallery />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <section>
        <WeddingParty />
      </section>

      <section id="Faq">
        <Faq />
      </section>

      <section id="Gifts">
        <Gifts />
      </section>

      <Footer />
    </section>
  );
}

export default HomePage;
