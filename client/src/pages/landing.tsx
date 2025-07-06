import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Eye, TrendingUp, Users, Zap, MessageCircle, Bot, Sparkles } from "lucide-react";

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
                  🤖 AI-Powered Virtual Try-On Chatbot
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Virtual Try-On
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                    {" "}Chatbot
                  </span>
                  {" "}for Any Website
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Embed our AI-powered conversational virtual fitting room on your e-commerce site. Let customers chat with an AI assistant and try on clothes virtually using just their photo. Increase conversions by 40%.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/chatbot-demo">
                  <Button size="lg" variant="outline">
                    Try Chatbot Demo
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
                  <span>AI-powered conversations</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Mock Website with Embedded Chatbot */}
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
                  
                  {/* Embedded Chatbot (Collapsed State) */}
                  <div className="absolute bottom-6 right-6">
                    <div className="relative">
                      <Button className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 bg-blue-600">
                        <MessageCircle className="h-5 w-5" />
                      </Button>
                      {/* Notification badge */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">1</span>
                      </div>
                      {/* Chat preview bubble */}
                      <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 w-48 border">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-800">Hi! I can help you try on this shirt virtually!</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
              Why Choose TryOn AI Chatbot?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Boost your e-commerce sales with conversational AI and cutting-edge virtual try-on technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Conversational Experience</h3>
                <p className="text-slate-600">
                  Customers chat naturally with an AI assistant that guides them through the virtual try-on process and answers questions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Increase Conversions</h3>
                <p className="text-slate-600">
                  Studies show 40% higher conversion rates when customers can chat and virtually try on products before buying.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Intelligence</h3>
                <p className="text-slate-600">
                  Smart product detection, personalized recommendations, and natural language understanding for better customer engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Better User Experience</h3>
                <p className="text-slate-600">
                  Give your customers confidence in their purchases with realistic virtual try-on experiences and instant support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reduce Returns</h3>
                <p className="text-slate-600">
                  Lower return rates by up to 30% when customers know exactly how items will look on them before purchasing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy Integration</h3>
                <p className="text-slate-600">
                  Add to any website with just one line of code. Works with WordPress, Shopify, and all e-commerce platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience the power of conversational virtual try-on technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chatbot-demo">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MessageCircle className="mr-2 h-4 w-4" />
                Try Chatbot Demo
              </Button>
            </Link>
            <Link href="/widget-demo">
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-4 w-4" />
                Widget Demo
              </Button>
            </Link>
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
            Join thousands of retailers using TryOn AI to boost sales and customer satisfaction with conversational virtual try-on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/chatbot-demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Try Chatbot Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}