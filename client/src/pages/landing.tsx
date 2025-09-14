import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Check,
  Eye,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  ShoppingCart,
  Globe,
  Code,
  BarChart3,
  Shield,
  Clock,
  Star,
  Upload,
  Camera,
  Wand2,
  Download,
  MousePointer,
  Smartphone,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
} from "lucide-react";

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Scroll animations
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: demoRef, isVisible: demoVisible } = useScrollAnimation();
  const { elementRef: featuresRef, isVisible: featuresVisible } =
    useScrollAnimation();
  const { elementRef: integrationRef, isVisible: integrationVisible } =
    useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } =
    useScrollAnimation();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Parallax Background Elements */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        {/* Floating geometric shapes with parallax */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit animate-pulse">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI-Powered Virtual Try-On
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                  See Yourself in
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Any Outfit
                  </span>
                  <br />
                  Before You Buy
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-delay">
                  Revolutionary AI technology that lets customers try on clothes
                  virtually with just a photo.
                  <span className="font-semibold text-foreground bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Boost sales by 40% and reduce returns by 30%
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="group transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/widget-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-accent group"
                  >
                    <Eye className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    See It In Action
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm animate-fade-in-delay-3">
                <div className="flex items-center space-x-2 group">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Setup in 2 minutes</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Works on any website</span>
                </div>
                <div className="flex items-center space-x-2 group">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Instant AI results</span>
                </div>
              </div>
            </div>

            {/* Interactive Demo Preview */}
            <div className="relative">
              {/* Floating elements with parallax */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
              />

              {/* Interactive Widget Demo */}
              <Card className="overflow-hidden shadow-2xl border-0 bg-card/50 backdrop-blur transform hover:scale-105 transition-all duration-500">
                {/* Mock Website Header */}
                <div className="bg-muted/50 px-4 py-3 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100" />
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200" />
                    <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground ml-4">
                      yourstore.com
                    </div>
                  </div>
                </div>

                {/* Mock Website Content with Animation */}
                <CardContent className="p-6 h-96 relative">
                  <div className="relative mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                      alt="Fashion clothing display"
                      className="w-full h-32 object-cover rounded-lg transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    Premium Designer Dress
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Perfect for any occasion - see how it looks on you!
                  </p>

                  {/* Animated Try-On Widget */}
                  <div className="absolute bottom-6 right-6">
                    <div className="relative">
                      <Button className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-bounce bg-gradient-to-r from-blue-500 to-purple-500">
                        <Wand2 className="h-5 w-5" />
                      </Button>

                      {/* Pulsing rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
                      <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-50 delay-1000" />
                    </div>
                  </div>

                  {/* Floating success indicators */}
                  <div className="absolute top-4 right-4 opacity-80">
                    <Badge
                      variant="secondary"
                      className="text-xs animate-pulse"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Try On Ready
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Virtual Try-On Works - Animated Demo */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div
          ref={demoRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            demoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Wand2 className="w-3 h-3 mr-1" />
              See The Magic
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How Virtual Try-On Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Watch how customers transform their shopping experience in just 4
              simple steps
            </p>
            <p className="text-sm text-muted-foreground">
              Click on any step or use the controls to navigate • Auto-play:{" "}
              {isAutoPlaying ? "ON" : "OFF"}
            </p>
          </div>

          {/* Animated Step-by-Step Demo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  icon: <Camera className="h-6 w-6" />,
                  title: "Upload Photo",
                  description:
                    "Customer takes or uploads a photo of themselves",
                  color: "blue",
                },
                {
                  step: 2,
                  icon: <MousePointer className="h-6 w-6" />,
                  title: "Select Product",
                  description: "Choose any clothing item from your catalog",
                  color: "purple",
                },
                {
                  step: 3,
                  icon: <Wand2 className="h-6 w-6" />,
                  title: "AI Magic",
                  description:
                    "Our AI instantly generates a realistic try-on result",
                  color: "green",
                },
                {
                  step: 4,
                  icon: <ShoppingCart className="h-6 w-6" />,
                  title: "Purchase Decision",
                  description:
                    "Customer sees exactly how they look and buys with confidence",
                  color: "orange",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentStep(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-full flex items-start space-x-4 p-4 rounded-lg transition-all duration-500 text-left group cursor-pointer ${
                    currentStep === index
                      ? "bg-gradient-to-r from-primary/10 to-secondary/10 scale-105 shadow-lg"
                      : "hover:bg-muted/50 hover:scale-102"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      currentStep === index
                        ? `bg-${item.color}-500 text-white scale-110`
                        : `bg-${item.color}-100 text-${item.color}-600 dark:bg-${item.color}-900/20 dark:text-${item.color}-400 group-hover:scale-110`
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-lg transition-colors duration-500 ${
                        currentStep === index
                          ? "text-primary"
                          : "group-hover:text-primary"
                      }`}
                    >
                      Step {item.step}: {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        currentStep === index
                          ? "text-primary translate-x-1"
                          : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Visual Demo */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Animated content based on current step */}
                    {currentStep === 0 && (
                      <div className="text-center animate-fade-in">
                        <Camera className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-pulse" />
                        <p className="text-sm text-muted-foreground">
                          Customer uploads photo
                        </p>
                      </div>
                    )}
                    {currentStep === 1 && (
                      <div className="text-center animate-fade-in">
                        <MousePointer className="h-16 w-16 text-purple-500 mx-auto mb-4 animate-bounce" />
                        <p className="text-sm text-muted-foreground">
                          Selects product to try
                        </p>
                      </div>
                    )}
                    {currentStep === 2 && (
                      <div className="text-center animate-fade-in">
                        <Wand2 className="h-16 w-16 text-green-500 mx-auto mb-4 animate-spin" />
                        <p className="text-sm text-muted-foreground">
                          AI processes the image
                        </p>
                        <div className="mt-4 flex justify-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    )}
                    {currentStep === 3 && (
                      <div className="text-center animate-fade-in">
                        <div className="relative">
                          <ShoppingCart className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ready to purchase!
                        </p>
                      </div>
                    )}

                    {/* Progress indicator with navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {[0, 1, 2, 3].map((step) => (
                        <button
                          key={step}
                          onClick={() => {
                            setCurrentStep(step);
                            setIsAutoPlaying(false);
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                            step === currentStep
                              ? "bg-primary scale-125"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                          }`}
                          aria-label={`Go to step ${step + 1}`}
                        />
                      ))}
                    </div>

                    {/* Navigation arrows */}
                    <button
                      onClick={() => {
                        setCurrentStep((prev) => (prev - 1 + 4) % 4);
                        setIsAutoPlaying(false);
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 shadow-lg"
                      aria-label="Previous step"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>

                    <button
                      onClick={() => {
                        setCurrentStep((prev) => (prev + 1) % 4);
                        setIsAutoPlaying(false);
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 shadow-lg"
                      aria-label="Next step"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    {/* Play/Pause button */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="absolute top-2 right-2 w-8 h-8 bg-background/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-background transition-all duration-200 shadow-lg"
                      aria-label={
                        isAutoPlaying ? "Pause auto-play" : "Resume auto-play"
                      }
                    >
                      {isAutoPlaying ? (
                        <Pause className="h-3 w-3" />
                      ) : (
                        <Play className="h-3 w-3 ml-0.5" />
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section with Parallax */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-fade-in">
              <BarChart3 className="w-3 h-3 mr-1" />
              Proven Results
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-delay">
              Why Customers Love Virtual Try-On
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
              Real results from real businesses using our virtual try-on
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur hover:-translate-y-2 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <h3 className="text-xl font-semibold mb-4">
                  Higher Conversions
                </h3>
                <p className="text-muted-foreground">
                  Customers are 40% more likely to purchase when they can see
                  how products look on them first.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  85%
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Customer Satisfaction
                </h3>
                <p className="text-muted-foreground">
                  Customers report higher satisfaction and confidence in their
                  purchases with virtual try-on.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  30%
                </div>
                <h3 className="text-xl font-semibold mb-4">Fewer Returns</h3>
                <p className="text-muted-foreground">
                  Dramatically reduce return rates when customers know exactly
                  how items will fit and look.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Customer Testimonial */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "Since implementing TryOn AI, our conversion rate increased by
                  45% and returns dropped by 35%. Our customers love being able
                  to see how clothes look on them before buying!"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">
                      CEO, FashionForward
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Integration Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-fade-in">
              <Code className="w-3 h-3 mr-1" />
              Simple Integration
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-delay">
              Get Started in Under 5 Minutes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
              No technical expertise required - our widget works with any
              website
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4 group animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 block">
                    1
                  </span>
                  <Upload className="h-4 w-4 text-blue-600 mx-auto mt-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sign Up & Customize</h3>
              <p className="text-muted-foreground">
                Create your account in 30 seconds and customize the widget to
                match your brand colors and style
              </p>
            </div>

            <div className="text-center space-y-4 group animate-fade-in-up delay-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400 block">
                    2
                  </span>
                  <Code className="h-4 w-4 text-green-600 mx-auto mt-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Copy & Paste Code</h3>
              <p className="text-muted-foreground">
                Add one simple script tag to your website - works with Shopify,
                WooCommerce, or any platform
              </p>
            </div>

            <div className="text-center space-y-4 group animate-fade-in-up delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 block">
                    3
                  </span>
                  <TrendingUp className="h-4 w-4 text-purple-600 mx-auto mt-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">Start Selling More</h3>
              <p className="text-muted-foreground">
                Watch your conversion rates soar as customers gain confidence in
                their purchases
              </p>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 bg-gray-900 text-green-400 font-mono text-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Integration Code</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-900/20 text-green-400 border-green-400/20"
                  >
                    Copy & Paste Ready
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-500">
                    {"<!-- Add this to your product pages -->"}
                  </div>
                  <div>
                    {
                      '<script src="https://cdn.tryon-ai.com/widget.js"></script>'
                    }
                  </div>
                  <div>
                    {
                      '<div id="tryon-widget" data-product-id="your-product-id"></div>'
                    }
                  </div>
                  <div className="text-gray-500">
                    {"<!-- That's it! Widget is now live -->"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Platform Support Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Globe className="w-3 h-3 mr-1" />
              Universal Compatibility
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Works with Any Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with your existing e-commerce setup
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Shopify", icon: "🛍️" },
              { name: "WooCommerce", icon: "🔧" },
              { name: "Magento", icon: "🏪" },
              { name: "Custom Sites", icon: "⚡" },
            ].map((platform) => (
              <Card
                key={platform.name}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="font-semibold">{platform.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section with Counter Animation */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        />

        <div
          ref={statsRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Thousands of Retailers
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the virtual try-on revolution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 group">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-muted-foreground font-medium">
                Active Websites
              </div>
              <div className="text-xs text-muted-foreground/70">
                Growing daily
              </div>
            </div>
            <div className="space-y-2 group">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                5M+
              </div>
              <div className="text-muted-foreground font-medium">
                Try-Ons Generated
              </div>
              <div className="text-xs text-muted-foreground/70">This month</div>
            </div>
            <div className="space-y-2 group">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                40%
              </div>
              <div className="text-muted-foreground font-medium">
                Avg. Conversion Boost
              </div>
              <div className="text-xs text-muted-foreground/70">
                Proven results
              </div>
            </div>
            <div className="space-y-2 group">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-muted-foreground font-medium">Uptime</div>
              <div className="text-xs text-muted-foreground/70">
                Always available
              </div>
            </div>
          </div>

          {/* Social Proof Logos */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-8">
              Trusted by leading brands worldwide
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-2xl font-bold">FASHION+</div>
              <div className="text-2xl font-bold">StyleCo</div>
              <div className="text-2xl font-bold">TrendWear</div>
              <div className="text-2xl font-bold">ModernFit</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div
          ref={faqRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            faqVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="w-3 h-3 mr-1" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about getting started with virtual
              try-on
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "1",
                question: "How does the virtual try-on technology work?",
                answer:
                  "Our AI uses advanced computer vision to analyze your photo and realistically overlay clothing items. The process takes just seconds and works with any standard photo.",
              },
              {
                id: "2",
                question: "How long does integration take?",
                answer:
                  "Integration is incredibly simple - just copy and paste one line of code. Most customers are up and running in under 5 minutes.",
              },
              {
                id: "3",
                question: "What types of clothing work best?",
                answer:
                  "Our technology works excellently with tops, dresses, jackets, and shirts. We're continuously improving support for other garment types.",
              },
              {
                id: "4",
                question: "Is customer data secure?",
                answer:
                  "Absolutely. We're GDPR compliant, photos are processed securely and never stored permanently. All data is encrypted and customers have full control.",
              },
            ].map((item, index) => (
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
                    onClick={() =>
                      setOpenFAQ(openFAQ === item.id ? null : item.id)
                    }
                    className="w-full p-6 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {item.question}
                    </h3>
                    {openFAQ === item.id ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </button>

                  {openFAQ === item.id && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have more questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <Button variant="outline" size="lg">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  View All FAQs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Parallax */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        {/* Animated background elements */}
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-float"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.08}px)`,
            animationDelay: "2s",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 animate-pulse"
              >
                <Clock className="w-3 h-3 mr-1" />
                Limited Time: 50% Off First Month
              </Badge>

              <h2 className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Ready to Revolutionize
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Your Sales?
                </span>
              </h2>

              <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                Join over 10,000 retailers who've already transformed their
                customer experience.
                <span className="font-semibold text-yellow-300">
                  See results in your first week.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
              <Link href="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-yellow-50 transform hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-4 text-lg font-semibold group"
                >
                  Start Free Trial Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/widget-demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg group"
                >
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  See Live Demo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm opacity-90 animate-fade-in-delay-3">
              <div className="flex items-center justify-center space-x-2 group">
                <Shield className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2 group">
                <Star className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2 group">
                <Clock className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>

            {/* Urgency indicator */}
            <div className="mt-8 p-4 bg-white/10 backdrop-blur rounded-lg border border-white/20 max-w-md mx-auto animate-pulse">
              <div className="flex items-center justify-center space-x-2 text-yellow-300">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">
                  🔥 247 businesses signed up this week
                </span>
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
