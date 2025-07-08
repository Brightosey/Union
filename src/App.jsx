import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Welcome from "./Component/Welcome/Welcome";
import OurStory from "./Component/OurStory/OurStory";
import EventDetails from "./Component/EventDetails/EventDetails";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <OurStory />
      <EventDetails />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
