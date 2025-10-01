import { Moon, Sun, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              EmailMassivo
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("pricing")}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("testimonials")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("faq")}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("es")}>
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>
                  🇧🇷 Português
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button className="bg-hero-gradient hover:opacity-90 transition-opacity">
              {t("getStarted")}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
