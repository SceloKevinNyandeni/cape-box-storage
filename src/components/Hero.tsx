import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Cape Box Storage
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 font-semibold">
            Smart storage for students
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Safe, secure & affordable storage – made for students in Cape Town. We collect, store & return your boxes — stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("pricing")}
              className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8 py-6"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "500+", label: "Students Served" },
              { number: "24/7", label: "Security" },
              { number: "100%", label: "Satisfaction" },
              { number: "R150", label: "From per month" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
