import { Zap, Users, BarChart3, Palette, Shield, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import emailBuilder from "@/assets/email-builder.jpg";

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t("automation"),
      description: t("automationDesc"),
    },
    {
      icon: Users,
      title: t("personalization"),
      description: t("personalizationDesc"),
    },
    {
      icon: BarChart3,
      title: t("analytics"),
      description: t("analyticsDesc"),
    },
    {
      icon: Palette,
      title: t("templates"),
      description: t("templatesDesc"),
    },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {t("featuresTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
          <div className="order-2 lg:order-1 animate-fade-in">
            <img
              src={emailBuilder}
              alt="Email Builder Interface"
              className="rounded-2xl shadow-2xl border border-border hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
            <h3 className="text-4xl font-bold">Beautiful Email Builder</h3>
            <p className="text-lg text-muted-foreground">
              Create stunning emails with our intuitive drag-and-drop builder. No coding required.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Professional Templates</div>
                  <div className="text-muted-foreground">Start with beautiful, tested designs</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Rocket className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">AI-Powered Content</div>
                  <div className="text-muted-foreground">Generate engaging copy instantly</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
