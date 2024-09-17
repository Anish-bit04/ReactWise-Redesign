import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Publication";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        {/* <Projects /> */}
        <Workflow />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default App;
