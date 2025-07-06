import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Upload, 
  Camera, 
  Shirt, 
  Wand2, 
  X, 
  Minimize2, 
  Link, 
  ImageIcon, 
  MessageCircle,
  Send,
  Bot,
  User,
  Sparkles,
  ShoppingBag,
  Heart,
  Star
} from "lucide-react";
import { TryOnResultModal } from "./try-on-result-modal";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  metadata?: {
    productImage?: string;
    tryOnResult?: string;
    suggestions?: string[];
  };
}

interface ChatbotWidgetProps {
  appId?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme?: "default" | "dark" | "minimal";
  isDemo?: boolean;
  brandName?: string;
  brandColor?: string;
  welcomeMessage?: string;
}

export function ChatbotWidget({ 
  appId = "demo", 
  position = "bottom-right",
  theme = "default",
  isDemo = false,
  brandName = "Fashion Store",
  brandColor = "#6366F1",
  welcomeMessage = "Hi! I'm your virtual styling assistant. I can help you try on clothes virtually!"
}: ChatbotWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(isDemo);
  const [currentView, setCurrentView] = useState<'chat' | 'tryon'>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      content: welcomeMessage,
      timestamp: new Date(),
      metadata: {
        suggestions: ['Try on clothes', 'Browse products', 'Get styling tips']
      }
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [userImage, setUserImage] = useState<string>("");
  const [clothingImage, setClothingImage] = useState<string>("");
  const [clothingImageUrl, setClothingImageUrl] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>("");
  const [isDraggingUser, setIsDraggingUser] = useState(false);
  const [isDraggingClothing, setIsDraggingClothing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const userFileInputRef = useRef<HTMLInputElement>(null);
  const clothingFileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6", 
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  const themeClasses = {
    default: "bg-white border-gray-200",
    dark: "bg-gray-900 border-gray-700 text-white",
    minimal: "bg-white border-gray-100 shadow-sm"
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-detect product images on page load
  useEffect(() => {
    if (!isDemo) return;

    const detectProductImage = () => {
      const selectors = [
        'img[src*="product"]',
        'img[alt*="product"]',
        '.product img',
        '[class*="product"] img',
        'img[src*="fashion"]',
        'img[src*="clothing"]'
      ];
      const image = document.querySelector(selectors.join(', ')) as HTMLImageElement;
      if (image && image.src) {
        setClothingImageUrl(image.src);
        // Add a bot message about detected product
        addBotMessage(
          "I found a product on this page! Would you like to try it on?",
          { productImage: image.src }
        );
      }
    };

    setTimeout(detectProductImage, 2000);
  }, [isDemo]);

  const tryOnMutation = useMutation({
    mutationFn: async (data: { userImage: string; clothingImage?: string; clothingImageUrl?: string; appId: string }) => {
      const response = await apiRequest("POST", "/api/try-on", data);
      return response.json();
    },
    onSuccess: (data) => {
      setResultImage(data.resultImage);
      setShowResult(true);
      addBotMessage(
        "Amazing! Here's how the outfit looks on you. What do you think?",
        { 
          tryOnResult: data.resultImage,
          suggestions: ['Try another item', 'Save this look', 'Share with friends', 'Buy this item']
        }
      );
      toast({
        title: "Try-on complete!",
        description: "Your virtual try-on result is ready.",
      });
    },
    onError: (error) => {
      console.error("Try-on failed:", error);
      addBotMessage("Sorry, something went wrong with the try-on. Please try again!");
      toast({
        title: "Try-on failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const addBotMessage = (content: string, metadata?: ChatMessage['metadata']) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      metadata
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000 + Math.random() * 2000);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    addUserMessage(inputMessage);
    const userMsg = inputMessage.toLowerCase();
    setInputMessage("");

    simulateTyping();

    setTimeout(() => {
      // Simple AI responses based on keywords
      if (userMsg.includes('try on') || userMsg.includes('virtual') || userMsg.includes('fitting')) {
        addBotMessage(
          "Great! I'd love to help you try on clothes virtually. First, please upload a photo of yourself, then select or upload the clothing item you want to try.",
          { suggestions: ['Upload my photo', 'Select clothing item', 'How does it work?'] }
        );
        setCurrentView('tryon');
      } else if (userMsg.includes('how') && userMsg.includes('work')) {
        addBotMessage(
          "It's simple! Upload your photo, choose a clothing item, and I'll use AI to show you how it looks on you. The whole process takes just a few seconds!",
          { suggestions: ['Start try-on', 'See example', 'What can I try on?'] }
        );
      } else if (userMsg.includes('product') || userMsg.includes('clothes') || userMsg.includes('item')) {
        addBotMessage(
          "I can help you try on various clothing items like shirts, dresses, jackets, and more! You can upload an image or I can detect items from this page.",
          { suggestions: ['Try on clothes', 'Browse categories', 'Upload clothing image'] }
        );
      } else if (userMsg.includes('help') || userMsg.includes('support')) {
        addBotMessage(
          "I'm here to help! I can assist you with virtual try-ons, product recommendations, and styling advice. What would you like to do?",
          { suggestions: ['Virtual try-on', 'Product info', 'Styling tips', 'Size guide'] }
        );
      } else if (userMsg.includes('size') || userMsg.includes('fit')) {
        addBotMessage(
          "Virtual try-on helps you see how clothes look, but for the best fit, I recommend checking the size guide. Would you like me to show you how the item looks on you first?",
          { suggestions: ['Try it on', 'Size guide', 'Fit tips'] }
        );
      } else {
        // Default response
        addBotMessage(
          "I'd be happy to help! I specialize in virtual try-ons and fashion advice. Would you like to try on some clothes?",
          { suggestions: ['Try on clothes', 'Get styling tips', 'Browse products'] }
        );
      }
    }, 1000 + Math.random() * 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    addUserMessage(suggestion);
    
    simulateTyping();
    
    setTimeout(() => {
      if (suggestion.includes('Try on') || suggestion.includes('try-on')) {
        setCurrentView('tryon');
        addBotMessage("Perfect! Let's get you set up for a virtual try-on. Please upload your photo first.");
      } else if (suggestion.includes('Upload my photo')) {
        setCurrentView('tryon');
        addBotMessage("Great! Click the camera icon below to upload your photo.");
      } else if (suggestion.includes('How does it work')) {
        addBotMessage(
          "Virtual try-on uses AI to realistically show how clothes look on you. Just upload your photo and select a clothing item - it's that simple!",
          { suggestions: ['Start now', 'See example', 'What can I try?'] }
        );
      } else if (suggestion.includes('Save this look')) {
        addBotMessage("I'd love to help you save this look! You can download the image or share it with friends.");
      } else if (suggestion.includes('Buy this item')) {
        addBotMessage(
          "Ready to make it yours? I can help you find where to purchase this item!",
          { suggestions: ['Find store', 'Check price', 'Similar items'] }
        );
      } else {
        addBotMessage("Thanks for your interest! How else can I help you today?");
      }
    }, 1000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: "user" | "clothing") => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file, type);
    }
  };

  const processFile = (file: File, type: "user" | "clothing") => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === "user") {
        setUserImage(result);
        addBotMessage("Perfect! I can see your photo. Now please select or upload the clothing item you want to try on.");
      } else {
        setClothingImage(result);
        setClothingImageUrl("");
        addBotMessage("Great choice! Now I have both images. Ready to see how it looks on you?");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = useCallback((e: React.DragEvent, type: "user" | "clothing") => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "user") {
      setIsDraggingUser(true);
    } else {
      setIsDraggingClothing(true);
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent, type: "user" | "clothing") => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "user") {
      setIsDraggingUser(false);
    } else {
      setIsDraggingClothing(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, type: "user" | "clothing") => {
    e.preventDefault();
    e.stopPropagation();
    
    if (type === "user") {
      setIsDraggingUser(false);
    } else {
      setIsDraggingClothing(false);
    }

    const files = Array.from(e.dataTransfer.files);
    
    if (files.length > 0) {
      const file = files[0];
      processFile(file, type);
    }
  }, []);

  const handleTryOn = () => {
    if (!userImage) {
      addBotMessage("I need your photo first! Please upload a picture of yourself.");
      return;
    }

    if (!clothingImage && !clothingImageUrl) {
      addBotMessage("Please select or upload a clothing item you want to try on.");
      return;
    }

    addBotMessage("Processing your virtual try-on... This will just take a moment! ✨");

    tryOnMutation.mutate({
      userImage,
      clothingImage: clothingImage || undefined,
      clothingImageUrl: clothingImageUrl || undefined,
      appId
    });
  };

  const clearUserPhoto = () => {
    setUserImage("");
    if (userFileInputRef.current) {
      userFileInputRef.current.value = "";
    }
  };

  const clearClothingItem = () => {
    setClothingImage("");
    setClothingImageUrl("");
    if (clothingFileInputRef.current) {
      clothingFileInputRef.current.value = "";
    }
  };

  if (!isExpanded) {
    return (
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <Button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 rounded-full shadow-2xl hover:shadow-xl transition-all transform hover:scale-110"
          style={{ backgroundColor: brandColor }}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`fixed ${positionClasses[position]} z-50 w-96 h-[600px] flex flex-col`}>
        <Card className={`${themeClasses[theme]} shadow-2xl border h-full flex flex-col`}>
          {/* Header */}
          <CardHeader className="rounded-t-lg p-4 flex-shrink-0" style={{ backgroundColor: brandColor }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white text-lg">{brandName} Assistant</CardTitle>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-xs opacity-90">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Navigation Tabs */}
          <div className="px-4 pt-2 flex-shrink-0">
            <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as 'chat' | 'tryon')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chat" className="text-xs">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Chat
                </TabsTrigger>
                <TabsTrigger value="tryon" className="text-xs">
                  <Shirt className="h-3 w-3 mr-1" />
                  Try On
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Content Area */}
          <CardContent className="p-0 flex-1 flex flex-col min-h-0">
            {currentView === 'chat' ? (
              <>
                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                          <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.type === 'user' 
                                ? 'bg-gray-200' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-600'
                            }`}>
                              {message.type === 'user' ? (
                                <User className="h-4 w-4 text-gray-600" />
                              ) : (
                                <Bot className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div className={`rounded-lg p-3 ${
                              message.type === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              <p className="text-sm">{message.content}</p>
                              {message.metadata?.productImage && (
                                <img 
                                  src={message.metadata.productImage} 
                                  alt="Product" 
                                  className="mt-2 w-20 h-20 object-cover rounded"
                                />
                              )}
                              {message.metadata?.suggestions && (
                                <div className="mt-2 space-y-1">
                                  {message.metadata.suggestions.map((suggestion, index) => (
                                    <Button
                                      key={index}
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleSuggestionClick(suggestion)}
                                      className="text-xs mr-1 mb-1"
                                    >
                                      {suggestion}
                                    </Button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 px-10">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="p-4 border-t flex-shrink-0">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      style={{ backgroundColor: brandColor }}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Try-On Interface */
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                {/* User Photo Upload */}
                <div>
                  <Label className="text-sm font-medium">Your Photo</Label>
                  <div 
                    className={`mt-2 border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
                      isDraggingUser 
                        ? "border-primary bg-primary/20" 
                        : userImage 
                          ? "border-green-300 bg-green-50" 
                          : "border-primary/30 bg-primary/5 hover:bg-primary/10"
                    }`}
                    onDragOver={(e) => handleDragOver(e, "user")}
                    onDragLeave={(e) => handleDragLeave(e, "user")}
                    onDrop={(e) => handleDrop(e, "user")}
                    onClick={() => userFileInputRef.current?.click()}
                  >
                    <input
                      ref={userFileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "user")}
                      className="hidden"
                    />
                    {userImage ? (
                      <div className="space-y-2">
                        <img src={userImage} alt="Your photo" className="w-16 h-16 object-cover rounded-lg mx-auto" />
                        <p className="text-sm text-green-600 font-medium">Photo uploaded</p>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearUserPhoto();
                          }}
                          className="text-xs text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-3 w-3 mr-1" />
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Camera className="h-8 w-8 text-primary mx-auto" />
                        <p className="text-sm text-primary font-medium">
                          {isDraggingUser ? "Drop your photo here" : "Upload or drag your photo"}
                        </p>
                        <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clothing Item */}
                <div>
                  <Label className="text-sm font-medium">Clothing Item</Label>
                  <Tabs defaultValue="upload" className="mt-2">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upload" className="text-xs">
                        <Upload className="h-3 w-3 mr-1" />
                        Upload
                      </TabsTrigger>
                      <TabsTrigger value="detected" className="text-xs">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Detected
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="upload" className="mt-2">
                      <div 
                        className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
                          isDraggingClothing 
                            ? "border-secondary bg-secondary/20" 
                            : clothingImage 
                              ? "border-green-300 bg-green-50" 
                              : "border-secondary/30 bg-secondary/5 hover:bg-secondary/10"
                        }`}
                        onDragOver={(e) => handleDragOver(e, "clothing")}
                        onDragLeave={(e) => handleDragLeave(e, "clothing")}
                        onDrop={(e) => handleDrop(e, "clothing")}
                        onClick={() => clothingFileInputRef.current?.click()}
                      >
                        <input
                          ref={clothingFileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, "clothing")}
                          className="hidden"
                        />
                        {clothingImage ? (
                          <div className="space-y-2">
                            <img src={clothingImage} alt="Clothing item" className="w-16 h-16 object-cover rounded-lg mx-auto" />
                            <p className="text-sm text-green-600 font-medium">Item uploaded</p>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                clearClothingItem();
                              }}
                              className="text-xs text-gray-500 hover:text-gray-700"
                            >
                              <X className="h-3 w-3 mr-1" />
                              Remove
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <ImageIcon className="h-8 w-8 text-secondary mx-auto" />
                            <p className="text-sm text-secondary font-medium">
                              {isDraggingClothing ? "Drop clothing image here" : "Upload clothing image"}
                            </p>
                            <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="detected" className="mt-2">
                      {clothingImageUrl ? (
                        <div className="space-y-3">
                          <div className="border rounded-lg p-3 bg-blue-50">
                            <div className="flex items-center space-x-3">
                              <img 
                                src={clothingImageUrl} 
                                alt="Detected item" 
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <p className="text-sm font-medium">Product detected on page</p>
                                <p className="text-xs text-gray-500">Ready to try on</p>
                              </div>
                              <Badge variant="secondary">Auto-detected</Badge>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <Sparkles className="h-8 w-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No products detected on this page</p>
                          <p className="text-xs">Try uploading an image instead</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Try On Button */}
                <Button 
                  onClick={handleTryOn}
                  disabled={tryOnMutation.isPending || !userImage || (!clothingImage && !clothingImageUrl)}
                  className="w-full"
                  style={{ backgroundColor: brandColor }}
                >
                  {tryOnMutation.isPending ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Wand2 className="h-4 w-4" />
                      <span>Try On Now</span>
                    </div>
                  )}
                </Button>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView('chat')}
                    className="text-xs"
                  >
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Ask Question
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                  >
                    <Heart className="h-3 w-3 mr-1" />
                    Save Look
                  </Button>
                </div>
              </div>
            )}
          </CardContent>

          {/* Footer */}
          <div className="px-4 py-2 border-t bg-gray-50 text-center flex-shrink-0">
            <p className="text-xs text-gray-500">
              Powered by <span className="font-semibold">TryOn AI</span>
            </p>
          </div>
        </Card>
      </div>

      <TryOnResultModal
        isOpen={showResult}
        onClose={() => setShowResult(false)}
        originalImage={userImage}
        resultImage={resultImage}
      />
    </>
  );
}