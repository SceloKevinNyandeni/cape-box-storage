import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anele",
      university: "CPUT student",
      text: "Cape Box Storage helped me store everything while I went home for the holidays. They picked it up from my res and returned it on time. 10/10 service.",
      rating: 5,
    },
    {
      name: "Thato",
      university: "UCT student",
      text: "They made the whole storage thing simple. Affordable and friendly. Highly recommend.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Students Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real students
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
