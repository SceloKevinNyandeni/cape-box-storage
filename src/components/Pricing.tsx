import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Box",
      description: "Store up to 2 boxes",
      price: "From R150",
      period: "/month",
      features: [
        "Up to 2 boxes",
        "Free pickup",
        "Secure storage",
        "Free return delivery",
        "24/7 security",
      ],
      popular: false,
    },
    {
      name: "Mid Pack",
      description: "Store up to 4 boxes + delivery",
      price: "From R250",
      period: "/month",
      features: [
        "Up to 4 boxes",
        "Free pickup & delivery",
        "Secure storage",
        "Priority support",
        "24/7 security",
        "Flexible dates",
      ],
      popular: true,
    },
    {
      name: "Holiday Hold",
      description: "Ideal for long breaks (3 months+)",
      price: "From R400",
      period: "/3 months",
      features: [
        "Up to 6 boxes",
        "Free pickup & delivery",
        "Extended storage",
        "Best value for holidays",
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
