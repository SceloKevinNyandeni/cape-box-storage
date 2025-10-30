import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How many boxes can I store?",
      answer: "Each student can store up to 2–4 boxes depending on the package. We also offer custom solutions for larger storage needs.",
    },
    {
      question: "What type of items can I store?",
      answer: "Books, clothes, bedding, small appliances — no perishables or hazardous items. If you're unsure about a specific item, feel free to contact us!",
    },
    {
      question: "Can I access my stuff during storage?",
      answer: "You can request early delivery at a small fee. Just let us know when you need your items and we'll arrange it.",
    },
    {
      question: "What areas do you cover?",
      answer: "Cape Town student areas: Rondebosch, Bellville, Woodstock, Observatory, Claremont, Mowbray, and surrounding areas.",
    },
    {
      question: "How do I book your service?",
      answer: "Simply fill out our booking form, contact us via WhatsApp, or give us a call. We'll confirm your pickup date and handle everything from there.",
    },
    {
      question: "Is my stuff insured?",
      answer: "All stored items are kept in our secure facility with 24/7 security and CCTV monitoring. We take great care of your belongings.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
