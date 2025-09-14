import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Search,
  Zap,
  Shield,
  Code,
  CreditCard,
  Users,
  Globe,
  Clock,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How does the virtual try-on technology work?",
    answer:
      "Our AI-powered virtual try-on uses advanced computer vision and machine learning algorithms. Customers upload a photo, select a product, and our AI instantly generates a realistic preview of how the item will look on them. The entire process takes just seconds and works with any standard photo.",
    category: "Technology",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: "2",
    question: "How long does it take to integrate the widget?",
    answer:
      "Integration is incredibly simple and takes less than 5 minutes. You just need to copy and paste a single line of code into your website. Our widget works with all major e-commerce platforms including Shopify, WooCommerce, Magento, and custom websites.",
    category: "Integration",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: "3",
    question: "What types of clothing work best with virtual try-on?",
    answer:
      "Our technology works excellently with tops, dresses, jackets, shirts, and most upper-body garments. We're continuously improving support for pants, shoes, and accessories. The AI performs best with items that have clear silhouettes and distinct patterns or colors.",
    category: "Technology",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    id: "4",
    question: "Is customer data secure and private?",
    answer:
      "Absolutely. We take privacy seriously and are GDPR compliant. Customer photos are processed securely and are never stored permanently. All data is encrypted in transit and at rest. Customers have full control over their data and can request deletion at any time.",
    category: "Privacy",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    id: "5",
    question: "What are the pricing plans?",
    answer:
      "We offer flexible pricing based on usage. Our Starter plan begins at $29/month for up to 1,000 try-ons, Professional at $99/month for 5,000 try-ons, and Enterprise plans for larger volumes. All plans include a 14-day free trial with no credit card required.",
    category: "Pricing",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    id: "6",
    question: "Can I customize the widget appearance?",
    answer:
      "Yes! The widget is fully customizable to match your brand. You can adjust colors, fonts, button styles, positioning, and even add your logo. Our dashboard provides an easy-to-use customization interface with real-time preview.",
    category: "Customization",
    icon: <Users className="h-4 w-4" />,
  },
  {
    id: "7",
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive support including detailed documentation, video tutorials, email support, and live chat. Enterprise customers get dedicated account management and priority support with guaranteed response times.",
    category: "Support",
    icon: <MessageCircle className="h-4 w-4" />,
  },
  {
    id: "8",
    question: "How accurate are the virtual try-on results?",
    answer:
      "Our AI achieves over 95% accuracy in realistic rendering. The technology accounts for body proportions, lighting, fabric drape, and fit. While results may vary based on photo quality and clothing type, most customers report high satisfaction with the accuracy.",
    category: "Technology",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: "9",
    question: "Do you offer analytics and reporting?",
    answer:
      "Yes! Our dashboard provides detailed analytics including try-on conversion rates, most popular products, user engagement metrics, and ROI tracking. You can see exactly how virtual try-on impacts your sales and customer behavior.",
    category: "Analytics",
    icon: <Search className="h-4 w-4" />,
  },
  {
    id: "10",
    question: "What's your uptime guarantee?",
    answer:
      "We maintain 99.9% uptime with redundant servers and CDN distribution. Our infrastructure is built on enterprise-grade cloud services with automatic failover and 24/7 monitoring to ensure your widget is always available to customers.",
    category: "Reliability",
    icon: <Clock className="h-4 w-4" />,
  },
];

const categories = [
  "All",
  "Technology",
  "Integration",
  "Pricing",
  "Privacy",
  "Support",
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation();

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

        <div
          ref={headerRef}
          className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="w-3 h-3 mr-1" />
            Frequently Asked Questions
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Got Questions?
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              We've Got Answers
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to know about TryOn AI virtual try-on
            technology, integration, and getting started.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div
          ref={faqRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
            faqVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <Card
                key={item.id}
                className={`border-0 bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300 ${
                  faqVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </button>

                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="pl-11 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No questions found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help
            you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Support
              </Button>
            </Link>
            <Link href="/widget-demo">
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-4 w-4" />
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
