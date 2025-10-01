import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroMinimal from "@/assets/hero-minimal.png";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-40 pb-32 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] text-balance tracking-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl">
              {t("heroSubtitle")}
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 transition-all text-base px-8 py-6 rounded-lg group"
              >
                {t("heroCTA")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up flex justify-end">
            <img
              src={heroMinimal}
              alt="EmailMassivo Illustration"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
