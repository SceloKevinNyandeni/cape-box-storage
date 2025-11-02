import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Boxes & Suitcases",
      description: "Perfect for clothes, books & bedding",
      price: "R150",
      period: "/month",
      features: [
        "1 large box: R150/month",
        "1 Month (2 boxes): R250",
        "2 Months (2 boxes): R350",
        "3 Months Holiday Special: R550",
        "Semester (6 months): R900",
        "Student Special: R400 (2 boxes, 3 months)",
      ],
      popular: true,
      note: "Sturdy Storage Boxes: Only R15 each",
    },
    {
      name: "Bar Fridges",
      description: "Small student fridges storage",
      price: "R350",
      period: "/month",
      features: [
        "1 Month: R350",
        "2 Months: R500",
        "3 Months Holiday Special: R700",
        "Semester (6 months): R1,200",
        "Free pickup & delivery",
        "24/7 security",
      ],
      popular: false,
    },
    {
      name: "Combo Deals",
      description: "Save with our bundle offers",
      price: "R750",
      period: "/2 months",
      features: [
        "Fridge + 1 Box: R750 (2 months)",
        "Best value combo",
        "Free pickup & delivery",
        "Secure storage",
        "24/7 security",
        "Priority support",
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            All packages include: pickup, storage, and return
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular
                  ? "border-primary scale-105 md:scale-110"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                Get Started
              </Button>

              {plan.note && (
                <p className="mt-4 text-sm text-center text-muted-foreground font-medium">
                  💡 {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom quote? <button onClick={scrollToContact} className="text-primary font-semibold hover:underline">Contact us</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
