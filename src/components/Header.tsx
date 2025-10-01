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
      <nav className="container mx-auto px-6 py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-6 w-6 text-foreground" />
            <span className="text-xl font-bold text-foreground tracking-tight">
              EmailMassivo
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("features")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("pricing")}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("testimonials")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("faq")}
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
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

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            <Button className="bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm px-5 h-9 rounded-lg">
              {t("getStarted")}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
