import { GraduationCap, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Cape Box Storage
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground">Cape Box Storage</strong> is a student-first storage company based in Cape Town.
                </p>
                <p>
                  We help students pack light, store safely, and move smarter. Whether you're going home for the holidays or switching accommodation, we offer secure and affordable storage for your personal items — without the hassle.
                </p>
                <p>
                  We know student life is busy, so we come to you, store your boxes, and bring them back when you're ready.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Made for Students",
                  description: "We understand student needs and budgets",
                },
                {
                  icon: Heart,
                  title: "Stress-Free Service",
                  description: "We handle everything from pickup to return",
                },
                {
                  icon: Sparkles,
                  title: "Cape Town Local",
                  description: "Based in Cape Town, serving all student areas",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
