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
    <section id="pricing" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{t("pricingTitle")}</h2>
          <p className="text-xl text-muted-foreground font-light">{t("pricingSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-xl border bg-card ${
                plan.highlighted
                  ? "border-foreground shadow-minimal"
                  : "border-border"
              } transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-6">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{t("perMonth")}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {plan.subscribers} {t("subscribers")} • {plan.emails} {t("emails")}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
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
