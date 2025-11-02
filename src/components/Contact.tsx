import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    residence: "",
    pickupDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Student Residence:* ${formData.residence}%0A*Pickup Date:* ${formData.pickupDate}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/27764233202?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp...",
      description: "You'll be redirected to WhatsApp to complete your booking.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      residence: "",
      pickupDate: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book? We're here to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="tel:0682791313"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <div className="text-muted-foreground">076 423 3202</div>
                  </div>
                </a>

                <a
                  href="mailto:capeboxstorage@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <div className="text-muted-foreground">capeboxstorage@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-green-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Location</div>
                    <div className="text-muted-foreground">Cape Town, Western Cape</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/27764233202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors group border-2 border-accent"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                    <div className="text-muted-foreground">Chat with us instantly</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Book Your Storage</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="residence" className="block text-sm font-medium mb-2 text-foreground">
                  Student Residence *
                </label>
                <Input
                  id="residence"
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                  required
                  placeholder="e.g., UCT Campus Residence"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium mb-2 text-foreground">
                  Preferred Pickup Date *
                </label>
                <Input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Additional Information
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your storage needs..."
                  rows={4}
                  className="bg-background"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-lg"
              >
                Send Booking Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll contact you via WhatsApp to confirm your booking
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
