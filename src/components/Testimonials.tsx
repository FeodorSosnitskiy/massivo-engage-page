import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc",
      content: "EmailMassivo transformed our email campaigns. We saw a 300% increase in engagement within the first month.",
      rating: 5,
    },
    {
      name: "Miguel Rodriguez",
      role: "CEO",
      company: "Digital Ventures",
      content: "The automation features saved us countless hours. The interface is intuitive and the results speak for themselves.",
      rating: 5,
    },
    {
      name: "Ana Silva",
      role: "Growth Manager",
      company: "E-commerce Pro",
      content: "Best email marketing platform we've used. The analytics help us make data-driven decisions every day.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t("testimonialsTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-12 text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">10K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">50M+</div>
              <div className="text-sm">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
