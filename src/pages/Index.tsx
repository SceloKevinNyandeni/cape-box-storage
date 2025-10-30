import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <About />
      <Pricing />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
