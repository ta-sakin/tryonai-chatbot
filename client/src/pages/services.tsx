import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import {
  Zap,
  Code,
  Palette,
  BarChart3,
  Users,
  Shield,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Headphones,
  Rocket,
  Target,
  Settings,
  TrendingUp,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "virtual-tryon",
    title: "Virtual Try-On Widget",
    description:
      "AI-powered virtual fitting room that lets customers try on clothes using just their photo.",
    features: [
      "Real-time AI processing",
      "95%+ accuracy rate",
      "Works with any photo",
      "Instant results",
      "Mobile optimized",
    ],
    icon: <Zap className="h-6 w-6" />,
    color: "blue",
    popular: true,
  },
  {
    id: "custom-integration",
    title: "Custom Integration",
    description:
      "Tailored integration solutions for enterprise clients with specific requirements.",
    features: [
      "Custom API development",
      "White-label solutions",
      "Advanced customization",
      "Dedicated support",
      "SLA guarantees",
    ],
    icon: <Code className="h-6 w-6" />,
    color: "purple",
  },
  {
    id: "brand-customization",
    title: "Brand Customization",
    description:
      "Complete widget customization to match your brand identity and user experience.",
    features: [
      "Custom colors & fonts",
      "Logo integration",
      "UI/UX design",
      "Brand guidelines",
      "A/B testing",
    ],
    icon: <Palette className="h-6 w-6" />,
    color: "green",
  },
  {
    id: "analytics-insights",
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics dashboard to track performance and optimize conversions.",
    features: [
      "Real-time metrics",
      "Conversion tracking",
      "User behavior analysis",
      "ROI reporting",
      "Custom dashboards",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
    color: "orange",
  },
  {
    id: "consultation",
    title: "Strategy Consultation",
    description:
      "Expert consultation to optimize your virtual try-on implementation and maximize ROI.",
    features: [
      "Implementation strategy",
      "Best practices guidance",
      "Performance optimization",
      "Growth planning",
      "Success metrics",
    ],
    icon: <Users className="h-6 w-6" />,
    color: "indigo",
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    description:
      "Advanced security features and compliance for enterprise-grade implementations.",
    features: [
      "GDPR compliance",
      "SOC 2 certification",
      "Data encryption",
      "Privacy controls",
      "Audit trails",
    ],
    icon: <Shield className="h-6 w-6" />,
    color: "red",
  },
];

const additionalServices = [
  {
    title: "Multi-Platform Support",
    description: "Seamless integration across all major e-commerce platforms",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Mobile Optimization",
    description: "Optimized experience for mobile and tablet devices",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    title: "Performance Optimization",
    description: "Continuous optimization for speed and accuracy",
    icon: <Rocket className="h-5 w-5" />,
  },
];

export default function Services() {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: servicesRef, isVisible: servicesVisible } =
    useScrollAnimation();
  const { elementRef: additionalRef, isVisible: additionalVisible } =
    useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { elementRef: parallaxRef, offset } = useParallax(0.3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
          style={{ transform: `translateY(${offset}px)` }}
        />

        <div
          ref={headerRef}
          className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Our Services
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Virtual Try-On
            </span>
            <br />
            Solutions
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From basic widget integration to enterprise-grade custom solutions,
            we provide everything you need to transform your e-commerce
            experience.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div
          ref={servicesRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            servicesVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`relative border-0 bg-card/50 backdrop-blur hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                  servicesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-${service.color}-100 dark:bg-${service.color}-900/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div className={`text-${service.color}-600`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div
          ref={additionalRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            additionalVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every service comes with these essential features to ensure your
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className={`text-center border-0 bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  additionalVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              How we deliver exceptional virtual try-on solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We analyze your needs and requirements",
                icon: <Target className="h-6 w-6" />,
              },
              {
                step: "2",
                title: "Design",
                description: "Custom solution design and planning",
                icon: <Settings className="h-6 w-6" />,
              },
              {
                step: "3",
                title: "Development",
                description: "Implementation and integration",
                icon: <Code className="h-6 w-6" />,
              },
              {
                step: "4",
                title: "Optimization",
                description: "Testing, launch, and continuous improvement",
                icon: <TrendingUp className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div
          ref={ctaRef}
          className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss which service is right for your business and create a
            custom solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Users className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/widget-demo">
              <Button
                size="lg"
                variant="outline"
                className="border-white/80 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-primary"
              >
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
