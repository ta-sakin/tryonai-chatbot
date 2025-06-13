import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Eye, TrendingUp, Users, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 AI-Powered Virtual Try-On
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Virtual Try-On
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                    {" "}Chatbot
                  </span>
                  {" "}for Any Website
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Embed our AI-powered virtual fitting room on your e-commerce site. Let customers try on clothes virtually using just their photo and increase conversions by 40%.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/widget-demo">
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No coding required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Works with any platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>AI-powered results</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Mock Website with Embedded Widget */}
              <Card className="overflow-hidden shadow-2xl">
                {/* Mock Website Header */}
                <div className="bg-slate-100 px-4 py-3 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="bg-white rounded px-3 py-1 text-xs text-slate-500 ml-4">
                      fashionstore.com
                    </div>
                  </div>
                </div>
                
                {/* Mock Website Content */}
                <CardContent className="p-6 h-96 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Fashion clothing display" 
                    className="w-full h-32 object-cover rounded-lg mb-4" 
                  />
                  <h3 className="font-semibold text-lg mb-2">Premium Cotton T-Shirt</h3>
                  <p className="text-slate-600 text-sm mb-4">Comfortable and stylish everyday wear</p>
                  
                  {/* Embedded TryOn Widget (Collapsed State) */}
                  <div className="absolute bottom-6 right-6">
                    <Button className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Why Choose TryOn AI?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Boost your e-commerce sales with cutting-edge virtual try-on technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Increase Conversions</h3>
                <p className="text-slate-600">
                  Studies show 40% higher conversion rates when customers can virtually try on products before buying.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Better User Experience</h3>
                <p className="text-slate-600">
                  Give your customers confidence in their purchases with realistic virtual try-on experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reduce Returns</h3>
                <p className="text-slate-600">
                  Lower return rates by up to 30% when customers know exactly how items will look on them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Store?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of retailers using TryOn AI to boost sales and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/widget-demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
