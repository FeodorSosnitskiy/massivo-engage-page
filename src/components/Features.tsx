import { Zap, Users, BarChart3, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import automationMinimal from "@/assets/automation-minimal.png";
import analyticsMinimal from "@/assets/analytics-minimal.png";

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
    <section id="features" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance tracking-tight leading-[1.1]">
            {t("featuresTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 lg:order-1 animate-fade-in">
            <img
              src={automationMinimal}
              alt="Automation Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Automate the entire process.</h3>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Set up intelligent workflows that run automatically. Save time and scale your campaigns effortlessly.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Track every metric that matters.</h3>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Get deep insights into campaign performance with beautiful, actionable analytics dashboards.
            </p>
          </div>

          <div className="animate-fade-in">
            <img
              src={analyticsMinimal}
              alt="Analytics Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
