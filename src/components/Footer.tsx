import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="h-6 w-6 text-foreground" />
              <span className="text-xl font-bold tracking-tight">EmailMassivo</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Smart email marketing and automation platform for modern businesses.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-foreground h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-foreground h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-foreground h-9 w-9">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("product")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("company")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">{t("resources")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-xs">{t("copyright")}</p>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
