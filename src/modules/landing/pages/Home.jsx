import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";


function Home() {

  return (

    <div className="min-h-screen bg-white">

      <Navbar />
      <Hero />
      <CTASection />

    </div>

  );
}

export default Home;