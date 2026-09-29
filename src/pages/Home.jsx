import Hero from "../components/Hero";
import Services from "../components/Services";
import CompanyOverview from "../components/CompanyOverview";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CompanyOverview />
      <Pricing />
      <Testimonials />
      <Articles />
      <Footer />
    </div>
  );
}

export default Home;