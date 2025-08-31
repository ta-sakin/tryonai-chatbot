import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit animate-pulse">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI-Powered Virtual Try-On
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {" "}
                    E-commerce
                  </span>
                  <br />
                  with Virtual Try-On
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Embed our AI-powered virtual fitting room widget on any
                  website. Let customers try on clothes virtually using just
                  their photo and
                  <span className="font-semibold text-foreground">
                    {" "}
                    increase conversions by 40%
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="group transform hover:scale-105 transition-all duration-200"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/widget-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-accent"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Live Demo
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>No coding required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Works with any platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Real-time AI results</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />

              {/* Mock Website with Embedded Widget */}
              <Card className="overflow-hidden shadow-2xl border-0 bg-card/50 backdrop-blur">
                {/* Mock Website Header */}
                <div className="bg-muted/50 px-4 py-3 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground ml-4">
                      fashionstore.com
                    </div>
                  </div>
                </div>
                {/* Mock Website Content */}
                <CardContent className="p-6 h-96 relative">
                  <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg h-32 mb-4 flex items-center justify-center">
                    {/* <ShoppingCart className="h-8 w-8 text-muted-foreground" /> */}
                    <img
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;h=300"
                      alt="Fashion clothing display"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Premium Cotton T-Shirt
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comfortable and stylish everyday wear
                  </p>

                  {/* Embedded TryOn Widget (Collapsed State) */}
                  <div className="absolute bottom-6 right-6">
                    <Button className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-bounce">
                      <Zap className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <BarChart3 className="w-3 h-3 mr-1" />
              Proven Results
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose TryOn AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Boost your e-commerce sales with cutting-edge virtual try-on
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  40% Higher Conversions
                </h3>
                <p className="text-muted-foreground">
                  Studies show significant conversion rate increases when
                  customers can virtually try on products before buying.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Enhanced User Experience
                </h3>
                <p className="text-muted-foreground">
                  Give your customers confidence in their purchases with
                  realistic virtual try-on experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  30% Fewer Returns
                </h3>
                <p className="text-muted-foreground">
                  Lower return rates significantly when customers know exactly
                  how items will look on them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Code className="w-3 h-3 mr-1" />
              Simple Integration
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your e-commerce experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold">Sign Up & Configure</h3>
              <p className="text-muted-foreground">
                Create your account and customize the widget appearance to match
                your brand
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold">Add One Line of Code</h3>
              <p className="text-muted-foreground">
                Copy and paste a single script tag to your website - no complex
                integration required
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold">Watch Sales Grow</h3>
              <p className="text-muted-foreground">
                Monitor analytics and watch your conversion rates increase with
                virtual try-on
              </p>
            </div>
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

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400">
                10K+
              </div>
              <div className="text-muted-foreground">Active Websites</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400">
                2M+
              </div>
              <div className="text-muted-foreground">Try-Ons Generated</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400">
                40%
              </div>
              <div className="text-muted-foreground">Avg. Conversion Boost</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                <Clock className="w-3 h-3 mr-1" />
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Transform Your Store?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join thousands of retailers using TryOn AI to boost sales and
                customer satisfaction. Start your free trial today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/widget-demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 bg-white/10 backdrop-blur text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Try Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm opacity-80">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
