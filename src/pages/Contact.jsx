import { useEffect } from "react";

import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;