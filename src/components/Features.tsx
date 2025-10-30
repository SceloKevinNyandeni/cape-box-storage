import { DollarSign, Lock, Package, Clock, MapPin, MessageCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Student-Friendly Rates",
      description: "Budget-friendly options designed for students",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "24/7 security and CCTV monitoring",
      color: "from-primary to-cyan-500",
    },
    {
      icon: Package,
      title: "Free Pickup & Delivery",
      description: "We come to you - no hassle, no stress",
      color: "from-secondary to-orange-500",
    },
    {
      icon: Clock,
      title: "Flexible Durations",
      description: "Store for weeks or months - your choice",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Cape Town Based",
      description: "We know student needs and areas",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: MessageCircle,
      title: "Fast Support",
      description: "Chat, WhatsApp & Email help available",
      color: "from-accent to-green-500",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for hassle-free storage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
