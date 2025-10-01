import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Send, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
              {t("heroTitle")}
              <br />
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                {t("heroSubtitle")}
              </span>
            </h1>

            <div className="space-y-4 text-lg text-muted-foreground">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                  1
                </div>
                <span>{t("heroStep1")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                  2
                </div>
                <span>{t("heroStep2")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                  3
                </div>
                <span>{t("heroStep3")}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-hero-gradient hover:opacity-90 transition-all text-lg px-8 py-6 shadow-elegant group"
            >
              {t("heroCTA")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Easy Upload</span>
              </div>
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Auto Send</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Deep Analytics</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroDashboard}
              alt="EmailMassivo Dashboard"
              className="relative rounded-2xl shadow-2xl border border-border hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
