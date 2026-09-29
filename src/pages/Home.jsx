import Hero from "../components/Hero";
import Services from "../components/Services";
import CompanyOverview from "../components/CompanyOverview";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CompanyOverview />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default Home;