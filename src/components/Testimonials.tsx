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
    <section id="testimonials" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{t("testimonialsTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                <div className="text-xs text-primary mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-16 text-muted-foreground">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground tracking-tight">10K+</div>
              <div className="text-sm mt-1">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground tracking-tight">50M+</div>
              <div className="text-sm mt-1">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground tracking-tight">99.9%</div>
              <div className="text-sm mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
