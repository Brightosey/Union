import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Welcome from "./Component/Welcome/Welcome";
import OurStory from "./Component/OurStory/OurStory";
import EventDetails from "./Component/EventDetails/EventDetails";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";
import Faq from "./Component/Faq/Faq";

function App() {
  return (
    <div>
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

      <section id="Faq">
        <Faq />
      </section>

      <Footer />
    </div>
  );
}

export default App;
