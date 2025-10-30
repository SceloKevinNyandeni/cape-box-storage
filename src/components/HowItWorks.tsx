import { Calendar, Package, Shield, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Online",
      description: "Reserve your space in just a few clicks. Choose your dates and storage duration.",
      color: "from-primary to-primary/80",
    },
    {
      icon: Truck,
      title: "We Pick Up",
      description: "Our team collects your boxes right from your student accommodation.",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: Shield,
      title: "We Store Securely",
      description: "Your items are stored in a clean, safe facility with 24/7 security.",
      color: "from-accent to-accent/80",
    },
    {
      icon: Package,
      title: "We Return When You Need",
      description: "Ready to move back in? We'll return your boxes when you're ready.",
      color: "from-primary to-accent",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to stress-free storage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-border hover:border-primary/50 hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
