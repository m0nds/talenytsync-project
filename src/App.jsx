import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Ready from "./components/Ready";
import SocialProof from "./components/SocialProof";
import Support from "./components/Support";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";

export default function App() {
  return (
    <div className="mx-auto w-11/12">
      <Hero />
      <SocialProof />
      <Why />
      <Testimonial />
      <Support />
      <Ready />
      <ContactSection />
      <Footer />
    </div>
  );
}
