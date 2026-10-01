import Footer from "./sections/Footer";
import LiveMap from "./sections/LiveMap";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LiveMap />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
