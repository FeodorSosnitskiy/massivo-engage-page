import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: "What email lists can I send to?",
      answer: "You can only send campaigns to lists you've collected yourself, where subscribers explicitly gave consent to receive emails from you. Sending to purchased or scraped lists is prohibited.",
    },
    {
      question: "How do I get started with my first campaign?",
      answer: "To send your first campaign, you need to add and verify your domain, upload your email list, and create your campaign. We have a step-by-step Quick Start guide to help you get up and running quickly.",
    },
    {
      question: "Can I import contacts from other services?",
      answer: "Yes! You can easily import your contacts from other email marketing platforms with just one click. We support imports from major services like Mailchimp, SendGrid, and others.",
    },
    {
      question: "How do I verify my domain?",
      answer: "Domain verification involves adding DNS records at your domain registrar. This is a required technical step that ensures your emails reach inboxes and don't get marked as spam. We provide detailed step-by-step instructions for this process.",
    },
    {
      question: "What pricing plans are available?",
      answer: "We offer three plans: Free (up to 500 subscribers, 2,000 emails/month), Premium ($29/month for 10,000 subscribers), and Enterprise (unlimited subscribers with custom features). All plans include our core features.",
    },
    {
      question: "Do you have an API?",
      answer: "Yes! We provide a full-featured API for developers. The free plan includes 100 API sends per month, with higher limits on paid plans. Full API documentation is available in your account.",
    },
  ];

  return (
    <section id="faq" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t("faqTitle")}</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
