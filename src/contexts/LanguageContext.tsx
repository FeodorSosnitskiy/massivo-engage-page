import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "pt";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    features: "Features",
    pricing: "Pricing",
    testimonials: "Testimonials",
    faq: "FAQ",
    getStarted: "Get Started Free",
    
    // Hero
    heroTitle: "Smart Email Marketing System.",
    heroSubtitle: "Create campaigns in minutes!",
    heroCTA: "Try Free",
    heroStep1: "Step 1: Upload your list",
    heroStep2: "Step 2: Create campaign",
    heroStep3: "Step 3: Analyze results",
    
    // Features
    featuresTitle: "Everything you need for email marketing, sales, and analytics",
    automation: "Automation",
    automationDesc: "Set up intelligent automated campaigns that work while you sleep",
    personalization: "Personalization",
    personalizationDesc: "Segment audiences and deliver relevant content at the perfect moment",
    analytics: "Analytics",
    analyticsDesc: "Track opens, clicks, and conversions with beautiful, actionable insights",
    templates: "Beautiful Templates",
    templatesDesc: "Drag-and-drop email builder with professional templates",
    
    // Pricing
    pricingTitle: "Simple, transparent pricing",
    pricingSubtitle: "Choose the plan that fits your business",
    free: "Free",
    premium: "Premium",
    enterprise: "Enterprise",
    perMonth: "/month",
    subscribers: "subscribers",
    emails: "emails/month",
    allFeatures: "All features included",
    prioritySupport: "Priority support",
    customDomain: "Custom domain",
    advancedAnalytics: "Advanced analytics",
    apiAccess: "API access",
    selectPlan: "Select Plan",
    
    // Testimonials
    testimonialsTitle: "Trusted by thousands of businesses",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    
    // Footer
    product: "Product",
    company: "Company",
    resources: "Resources",
    legal: "Legal",
    subscribe: "Subscribe to updates",
    subscribeDesc: "Get the latest features and tips",
    yourEmail: "Your email",
    subscribeButton: "Subscribe",
    copyright: "© 2025 EmailMassivo. All rights reserved.",
  },
  es: {
    // Navigation
    features: "Características",
    pricing: "Precios",
    testimonials: "Testimonios",
    faq: "Preguntas",
    getStarted: "Comenzar Gratis",
    
    // Hero
    heroTitle: "Sistema Inteligente de Email Marketing.",
    heroSubtitle: "¡Crea campañas en minutos!",
    heroCTA: "Probar Gratis",
    heroStep1: "Paso 1: Sube tu lista",
    heroStep2: "Paso 2: Crea campaña",
    heroStep3: "Paso 3: Analiza resultados",
    
    // Features
    featuresTitle: "Todo lo que necesitas para email marketing, ventas y analíticas",
    automation: "Automatización",
    automationDesc: "Configura campañas automáticas inteligentes que funcionan mientras duermes",
    personalization: "Personalización",
    personalizationDesc: "Segmenta audiencias y entrega contenido relevante en el momento perfecto",
    analytics: "Analíticas",
    analyticsDesc: "Rastrea aperturas, clics y conversiones con información visual y accionable",
    templates: "Plantillas Hermosas",
    templatesDesc: "Constructor de emails con arrastrar y soltar con plantillas profesionales",
    
    // Pricing
    pricingTitle: "Precios simples y transparentes",
    pricingSubtitle: "Elige el plan que se ajuste a tu negocio",
    free: "Gratis",
    premium: "Premium",
    enterprise: "Empresarial",
    perMonth: "/mes",
    subscribers: "suscriptores",
    emails: "emails/mes",
    allFeatures: "Todas las características incluidas",
    prioritySupport: "Soporte prioritario",
    customDomain: "Dominio personalizado",
    advancedAnalytics: "Analíticas avanzadas",
    apiAccess: "Acceso API",
    selectPlan: "Seleccionar Plan",
    
    // Testimonials
    testimonialsTitle: "Confiado por miles de negocios",
    
    // FAQ
    faqTitle: "Preguntas Frecuentes",
    
    // Footer
    product: "Producto",
    company: "Empresa",
    resources: "Recursos",
    legal: "Legal",
    subscribe: "Suscríbete a actualizaciones",
    subscribeDesc: "Obtén las últimas características y consejos",
    yourEmail: "Tu email",
    subscribeButton: "Suscribirse",
    copyright: "© 2025 EmailMassivo. Todos los derechos reservados.",
  },
  pt: {
    // Navigation
    features: "Recursos",
    pricing: "Preços",
    testimonials: "Depoimentos",
    faq: "FAQ",
    getStarted: "Começar Grátis",
    
    // Hero
    heroTitle: "Sistema Inteligente de Email Marketing.",
    heroSubtitle: "Crie campanhas em minutos!",
    heroCTA: "Experimentar Grátis",
    heroStep1: "Passo 1: Carregue sua lista",
    heroStep2: "Passo 2: Crie campanha",
    heroStep3: "Passo 3: Analise resultados",
    
    // Features
    featuresTitle: "Tudo que você precisa para email marketing, vendas e análises",
    automation: "Automação",
    automationDesc: "Configure campanhas automatizadas inteligentes que funcionam enquanto você dorme",
    personalization: "Personalização",
    personalizationDesc: "Segmente públicos e entregue conteúdo relevante no momento perfeito",
    analytics: "Análises",
    analyticsDesc: "Rastreie aberturas, cliques e conversões com insights visuais e acionáveis",
    templates: "Modelos Bonitos",
    templatesDesc: "Construtor de emails arrastar e soltar com modelos profissionais",
    
    // Pricing
    pricingTitle: "Preços simples e transparentes",
    pricingSubtitle: "Escolha o plano que se adapta ao seu negócio",
    free: "Grátis",
    premium: "Premium",
    enterprise: "Empresarial",
    perMonth: "/mês",
    subscribers: "assinantes",
    emails: "emails/mês",
    allFeatures: "Todos os recursos incluídos",
    prioritySupport: "Suporte prioritário",
    customDomain: "Domínio personalizado",
    advancedAnalytics: "Análises avançadas",
    apiAccess: "Acesso à API",
    selectPlan: "Selecionar Plano",
    
    // Testimonials
    testimonialsTitle: "Confiado por milhares de empresas",
    
    // FAQ
    faqTitle: "Perguntas Frequentes",
    
    // Footer
    product: "Produto",
    company: "Empresa",
    resources: "Recursos",
    legal: "Legal",
    subscribe: "Inscreva-se para atualizações",
    subscribeDesc: "Receba os recursos e dicas mais recentes",
    yourEmail: "Seu email",
    subscribeButton: "Inscrever-se",
    copyright: "© 2025 EmailMassivo. Todos os direitos reservados.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
