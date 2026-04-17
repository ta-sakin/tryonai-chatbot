import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Zap,
  Crown,
  Rocket,
  Users,
  BarChart3,
  Shield,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started",
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    popular: false,
    features: [
      "Up to 1,000 try-ons per month",
      "1 website integration",
      "Basic widget customization",
      "Email support",
      "Basic analytics dashboard",
      "Mobile responsive widget",
    ],
    limitations: ["No custom branding", "Standard processing speed"],
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing e-commerce stores",
    icon: Crown,
    color: "from-purple-500 to-purple-600",
    popular: true,
    features: [
      "Up to 5,000 try-ons per month",
      "Up to 3 website integrations",
      "Advanced widget customization",
      "Priority email & chat support",
      "Advanced analytics & insights",
      "A/B testing capabilities",
      "Custom branding options",
      "Faster processing speed",
      "API access",
    ],
    limitations: [],
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large businesses with high volume needs",
    icon: Rocket,
    color: "from-emerald-500 to-emerald-600",
    popular: false,
    features: [
      "Unlimited try-ons",
      "Unlimited website integrations",
      "White-label solution",
      "Dedicated account manager",
      "Custom analytics & reporting",
      "Advanced A/B testing",
      "Priority processing",
      "Full API access",
      "Custom integrations",
      "SLA guarantee (99.9% uptime)",
      "Phone support",
    ],
    limitations: [],
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Multi-user Dashboard",
    description: "Collaborate with your team using role-based access controls",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track conversion rates, user engagement, and ROI metrics",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help when you need it with our dedicated support team",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our free trial and scale as you grow. No hidden fees, no
            surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular ? "border-primary shadow-lg scale-105" : ""
                  } transition-all duration-300 hover:shadow-lg`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Start Free Trial"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {plan.name === "Enterprise"
                        ? "Custom pricing available"
                        : "14-day free trial • No credit card required"}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include these powerful features to help you maximize
              conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-8">
            {[
              {
                question: "What happens when I exceed my monthly try-on limit?",
                answer:
                  "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional try-ons at $0.05 per try-on.",
              },
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No setup fees! All plans include free setup and onboarding support to get you started quickly.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We offer email support for all plans, chat support for Professional and above, and phone support for Enterprise customers.",
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer:
                  "Yes! Our Enterprise plan includes custom integrations, white-label solutions, and dedicated account management. Contact our sales team for details.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your E-commerce?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of retailers already using TryOn AI to boost their
            sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/widget-demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/80 bg-primary-foreground/10 backdrop-blur text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
