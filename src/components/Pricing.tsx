import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("free"),
      price: "0",
      subscribers: "500",
      emails: "2,000",
      features: [
        t("allFeatures"),
        "Email templates",
        "Basic analytics",
        "24/7 support",
      ],
      highlighted: false,
    },
    {
      name: t("premium"),
      price: "29",
      subscribers: "10,000",
      emails: "100,000",
      features: [
        t("allFeatures"),
        t("prioritySupport"),
        t("customDomain"),
        t("advancedAnalytics"),
        t("apiAccess"),
      ],
      highlighted: true,
    },
    {
      name: t("enterprise"),
      price: "99",
      subscribers: "Unlimited",
      emails: "Unlimited",
      features: [
        t("allFeatures"),
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "White-label options",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t("pricingTitle")}</h2>
          <p className="text-xl text-muted-foreground">{t("pricingSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted
                  ? "border-primary shadow-elegant scale-105"
                  : "border-border bg-card"
              } hover:-translate-y-2 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hero-gradient text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">{t("perMonth")}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {plan.subscribers} {t("subscribers")} • {plan.emails} {t("emails")}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-hero-gradient hover:opacity-90"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {t("selectPlan")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
