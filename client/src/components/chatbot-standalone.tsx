import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

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

interface ChatbotConfig {
  publicKey: string;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme: 'default' | 'dark' | 'minimal';
  apiUrl: string;
  brandName: string;
  brandColor: string;
  welcomeMessage: string;
}

interface ChatbotState {
  userImage: string;
  clothingImage: string;
  clothingImageUrl: string;
  isProcessing: boolean;
  sessionToken: string | null;
  tokenExpiry: number | null;
  messages: ChatMessage[];
  currentView: 'chat' | 'tryon';
  inputMessage: string;
  isTyping: boolean;
}

const ChatbotStandaloneWidget: React.FC<{ config: ChatbotConfig }> = ({ config }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, setState] = useState<ChatbotState>({
    userImage: '',
    clothingImage: '',
    clothingImageUrl: '',
    isProcessing: false,
    sessionToken: null,
    tokenExpiry: null,
    messages: [
      {
        id: '1',
        type: 'bot',
        content: config.welcomeMessage,
        timestamp: new Date(),
        metadata: {
          suggestions: ['Try on clothes', 'Browse products', 'Get styling tips']
        }
      }
    ],
    currentView: 'chat',
    inputMessage: '',
    isTyping: false
  });
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);
  
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRefreshingRef = useRef(false);
  const mountedRef = useRef(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const themeClasses = {
    default: 'bg-white border-gray-200',
    dark: 'bg-gray-900 border-gray-700 text-white',
    minimal: 'bg-white border-gray-100 shadow-sm'
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages]);

  // Parse JWT token to get expiry time
  const parseTokenExpiry = useCallback((token: string): number | null => {
    try {
      const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
      const payload = JSON.parse(decoded.payload);
      return payload.exp * 1000;
    } catch (error) {
      console.error('Failed to parse token expiry:', error);
      return null;
    }
  }, []);

  // Initialize widget with secure token
  const initializeWidget = useCallback(async (isRefresh = false) => {
    if (isRefreshingRef.current && isRefresh) {
      return;
    }

    if (isRefresh) {
      isRefreshingRef.current = true;
    }

    try {
      const domain = window.location.hostname;
      const response = await fetch(`${config.apiUrl}/api/widget/init`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: config.publicKey,
          domain: domain
        })
      });

      if (response.ok) {
        const data = await response.json();
        const tokenExpiry = parseTokenExpiry(data.sessionToken);
        
        if (mountedRef.current) {
          setState(prev => ({ 
            ...prev, 
            sessionToken: data.sessionToken,
            tokenExpiry: tokenExpiry
          }));
          
          if (!isRefresh) {
            setIsInitialized(true);
          }
          
          if (isRefresh && error) {
            setError('');
          }
        }
      } else {
        const errorData = await response.json();
        if (mountedRef.current) {
          setError(errorData.error || 'Widget initialization failed');
        }
      }
    } catch (error) {
      console.error('Widget initialization error:', error);
      if (mountedRef.current) {
        setError('Failed to initialize widget');
      }
    } finally {
      if (isRefresh) {
        isRefreshingRef.current = false;
      }
    }
  }, [config, parseTokenExpiry, error]);

  // Setup automatic token refresh
  const setupTokenRefresh = useCallback(() => {
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current);
    }

    if (!state.tokenExpiry) return;

    const now = Date.now();
    const timeUntilExpiry = state.tokenExpiry - now;
    const refreshTime = Math.max(0, timeUntilExpiry - 5 * 60 * 1000);

    refreshIntervalRef.current = setTimeout(async () => {
      if (mountedRef.current && !isRefreshingRef.current) {
        await initializeWidget(true);
        if (mountedRef.current) {
          setupTokenRefresh();
        }
      }
    }, refreshTime);
  }, [state.tokenExpiry, initializeWidget]);

  // Initial widget initialization
  useEffect(() => {
    initializeWidget();
    
    return () => {
      mountedRef.current = false;
      if (refreshIntervalRef.current) {
        clearTimeout(refreshIntervalRef.current);
      }
    };
  }, [initializeWidget]);

  // Setup token refresh when token changes
  useEffect(() => {
    if (state.sessionToken && state.tokenExpiry) {
      setupTokenRefresh();
    }

    return () => {
      if (refreshIntervalRef.current) {
        clearTimeout(refreshIntervalRef.current);
      }
    };
  }, [state.sessionToken, state.tokenExpiry, setupTokenRefresh]);

  // Auto-detect product images on page load
  useEffect(() => {
    if (!isInitialized) return;

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
        setState(prev => ({ ...prev, clothingImageUrl: image.src }));
        addBotMessage(
          "I found a product on this page! Would you like to try it on?",
          { productImage: image.src }
        );
      }
    };

    setTimeout(detectProductImage, 2000);
  }, [isInitialized]);

  const addBotMessage = (content: string, metadata?: ChatMessage['metadata']) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      metadata
    };
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const simulateTyping = () => {
    setState(prev => ({ ...prev, isTyping: true }));
    setTimeout(() => {
      setState(prev => ({ ...prev, isTyping: false }));
    }, 1000 + Math.random() * 2000);
  };

  const handleSendMessage = () => {
    if (!state.inputMessage.trim()) return;

    addUserMessage(state.inputMessage);
    const userMsg = state.inputMessage.toLowerCase();
    setState(prev => ({ ...prev, inputMessage: '' }));

    simulateTyping();

    setTimeout(() => {
      if (userMsg.includes('try on') || userMsg.includes('virtual') || userMsg.includes('fitting')) {
        addBotMessage(
          "Great! I'd love to help you try on clothes virtually. First, please upload a photo of yourself, then select or upload the clothing item you want to try.",
          { suggestions: ['Upload my photo', 'Select clothing item', 'How does it work?'] }
        );
        setState(prev => ({ ...prev, currentView: 'tryon' }));
      } else if (userMsg.includes('how') && userMsg.includes('work')) {
        addBotMessage(
          "It's simple! Upload your photo, choose a clothing item, and I'll use AI to show you how it looks on you. The whole process takes just a few seconds!",
          { suggestions: ['Start try-on', 'See example', 'What can I try on?'] }
        );
      } else {
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
        setState(prev => ({ ...prev, currentView: 'tryon' }));
        addBotMessage("Perfect! Let's get you set up for a virtual try-on. Please upload your photo first.");
      } else if (suggestion.includes('Upload my photo')) {
        setState(prev => ({ ...prev, currentView: 'tryon' }));
        addBotMessage("Great! Click the camera icon below to upload your photo.");
      } else {
        addBotMessage("Thanks for your interest! How else can I help you today?");
      }
    }, 1000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'user' | 'clothing') => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError('');

    if (file.size > 5 * 1024 * 1024) {
      setError('File too large. Please upload an image under 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === 'user') {
        setState(prev => ({ ...prev, userImage: result }));
        addBotMessage("Perfect! I can see your photo. Now please select or upload the clothing item you want to try on.");
      } else {
        setState(prev => ({ 
          ...prev, 
          clothingImage: result, 
          clothingImageUrl: '' 
        }));
        addBotMessage("Great choice! Now I have both images. Ready to see how it looks on you?");
      }
    };
    reader.readAsDataURL(file);
  };

  const makeAuthenticatedRequest = useCallback(async (url: string, options: RequestInit): Promise<Response> => {
    const makeRequest = async (token: string): Promise<Response> => {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
        },
        body: options.body ? JSON.stringify({
          ...JSON.parse(options.body as string),
          sessionToken: token
        }) : undefined
      });
    };

    if (state.sessionToken) {
      const response = await makeRequest(state.sessionToken);
      
      if (response.status !== 401) {
        return response;
      }
    }

    await initializeWidget(true);
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const currentState = state;
    if (currentState.sessionToken) {
      return makeRequest(currentState.sessionToken);
    } else {
      throw new Error('Failed to refresh authentication token');
    }
  }, [state.sessionToken, initializeWidget, state]);

  const handleTryOn = async () => {
    if (!state.sessionToken) {
      setError('Widget not properly initialized. Please refresh the page.');
      return;
    }

    if (!state.userImage || (!state.clothingImage && !state.clothingImageUrl)) {
      addBotMessage("I need both your photo and a clothing item to create the virtual try-on!");
      return;
    }

    setError('');
    setState(prev => ({ ...prev, isProcessing: true }));
    addBotMessage("Processing your virtual try-on... This will just take a moment! ✨");

    try {
      const response = await makeAuthenticatedRequest(`${config.apiUrl}/api/try-on`, {
        method: 'POST',
        body: JSON.stringify({
          userImage: state.userImage,
          clothingImage: state.clothingImage || undefined,
          clothingImageUrl: state.clothingImageUrl || undefined
        })
      });

      const data = await response.json();

      if (response.ok) {
        setResultImage(data.resultImage);
        setShowResult(true);
        addBotMessage(
          "Amazing! Here's how the outfit looks on you. What do you think?",
          { 
            tryOnResult: data.resultImage,
            suggestions: ['Try another item', 'Save this look', 'Share with friends', 'Buy this item']
          }
        );
      } else {
        throw new Error(data.error || 'Try-on failed');
      }
    } catch (error: any) {
      console.error('Try-on error:', error);
      setError(error.message || 'Try-on failed. Please try again.');
      addBotMessage("Sorry, something went wrong with the try-on. Please try again!");
    } finally {
      setState(prev => ({ ...prev, isProcessing: false }));
    }
  };

  if (!isInitialized) {
    if (error) {
      console.error('TryOn AI Chatbot Error:', error);
      return null;
    }
    return null;
  }

  if (!isExpanded) {
    return (
      <div className={`fixed ${positionClasses[config.position]} z-[10000]`}>
        <button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 relative"
          style={{ backgroundColor: config.brandColor }}
          title={`${config.brandName} Assistant`}
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"/>
            <circle cx="12" cy="10" r="2"/>
            <path d="M16 13.5C16 11.6 14.4 10 12.5 10S9 11.6 9 13.5"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <>
      <div className={`fixed ${positionClasses[config.position]} z-[10000] w-96 h-[600px] flex flex-col`}>
        <div className={`${themeClasses[config.theme]} shadow-2xl border rounded-lg overflow-hidden h-full flex flex-col`}>
          {/* Header */}
          <div className="p-4 flex-shrink-0" style={{ backgroundColor: config.brandColor }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V19H19V9Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">{config.brandName} Assistant</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white text-xs opacity-90">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white hover:bg-white/20 p-1 rounded transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="px-4 pt-2 flex-shrink-0">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setState(prev => ({ ...prev, currentView: 'chat' }))}
                className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                  state.currentView === 'chat' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                💬 Chat
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, currentView: 'tryon' }))}
                className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
                  state.currentView === 'tryon' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                👕 Try On
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col min-h-0">
            {state.currentView === 'chat' ? (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {state.messages.map((message) => (
                      <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                          <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.type === 'user' 
                                ? 'bg-gray-200' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-600'
                            }`}>
                              {message.type === 'user' ? '👤' : '🤖'}
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
                                    <button
                                      key={index}
                                      onClick={() => handleSuggestionClick(suggestion)}
                                      className="text-xs mr-1 mb-1 px-2 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors"
                                    >
                                      {suggestion}
                                    </button>
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
                    {state.isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            🤖
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
                </div>

                {/* Message Input */}
                <div className="p-4 border-t flex-shrink-0">
                  <div className="flex space-x-2">
                    <input
                      value={state.inputMessage}
                      onChange={(e) => setState(prev => ({ ...prev, inputMessage: e.target.value }))}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={!state.inputMessage.trim()}
                      className="px-4 py-2 rounded-lg text-white font-medium disabled:opacity-50"
                      style={{ backgroundColor: config.brandColor }}
                    >
                      ➤
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Try-On Interface */
              <div className="p-4 space-y-4 flex-1 overflow-y-auto">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
                    {error}
                  </div>
                )}

                {/* User Photo Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">Your Photo</label>
                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'user')}
                      className="hidden"
                      id="user-photo-upload"
                    />
                    <label htmlFor="user-photo-upload" className="cursor-pointer">
                      {state.userImage ? (
                        <div className="space-y-2">
                          <img src={state.userImage} alt="Your photo" className="w-16 h-16 object-cover rounded-lg mx-auto" />
                          <p className="text-sm text-green-600 font-medium">Photo uploaded</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="text-4xl">📷</div>
                          <p className="text-sm text-blue-600 font-medium">Upload Photo</p>
                          <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Clothing Item */}
                <div>
                  <label className="block text-sm font-medium mb-2">Clothing Item</label>
                  {state.clothingImageUrl ? (
                    <div className="border rounded-lg p-3 bg-blue-50">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={state.clothingImageUrl} 
                          alt="Detected item" 
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Product detected</p>
                          <p className="text-xs text-gray-500">Ready to try on</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'clothing')}
                        className="hidden"
                        id="clothing-upload"
                      />
                      <label htmlFor="clothing-upload" className="cursor-pointer">
                        <div className="space-y-2">
                          <div className="text-4xl">👕</div>
                          <p className="text-sm text-gray-600 font-medium">Upload clothing item</p>
                          <p className="text-xs text-gray-500">Or it will auto-detect from page</p>
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                {/* Try On Button */}
                <button 
                  onClick={handleTryOn}
                  disabled={state.isProcessing || !state.userImage || (!state.clothingImage && !state.clothingImageUrl)}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors disabled:opacity-50"
                  style={{ backgroundColor: config.brandColor }}
                >
                  {state.isProcessing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>✨</span>
                      <span>Try On Now</span>
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t bg-gray-50 text-center flex-shrink-0">
            <p className="text-xs text-gray-500">
              Powered by <span className="font-semibold">TryOn AI</span>
            </p>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[10001] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 flex items-center justify-between" style={{ backgroundColor: config.brandColor }}>
              <h3 className="text-lg font-semibold text-white">Your Try-On Result</h3>
              <button
                onClick={() => setShowResult(false)}
                className="text-white hover:bg-white/20 p-1 rounded"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Original</h4>
                  <img 
                    src={state.userImage} 
                    alt="Original photo" 
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">With Clothing Item</h4>
                  <img 
                    src={resultImage} 
                    alt="Try-on result" 
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <button
                onClick={() => setShowResult(false)}
                className="w-full py-3 px-4 rounded-lg font-semibold text-white"
                style={{ backgroundColor: config.brandColor }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Widget initialization function
declare global {
  interface Window {
    TryOnChatbot: {
      init: (config: Partial<ChatbotConfig>) => void;
    };
  }
}

function initChatbot() {
  const scripts = document.querySelectorAll('script[data-public-key]');
  const scriptTag = scripts[scripts.length - 1] as HTMLScriptElement;
  
  const config: ChatbotConfig = {
    publicKey: scriptTag?.dataset.publicKey || '',
    position: (scriptTag?.dataset.position as any) || 'bottom-right',
    theme: (scriptTag?.dataset.theme as any) || 'default',
    apiUrl: scriptTag?.dataset.apiUrl || window.location.origin,
    brandName: scriptTag?.dataset.brandName || 'Fashion Store',
    brandColor: scriptTag?.dataset.brandColor || '#6366F1',
    welcomeMessage: scriptTag?.dataset.welcomeMessage || 'Hi! I\'m your virtual styling assistant. I can help you try on clothes virtually!'
  };

  if (!config.publicKey) {
    console.error('TryOn AI Chatbot: Public key is required');
    return;
  }

  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'tryon-ai-chatbot';
  document.body.appendChild(chatbotContainer);

  const root = createRoot(chatbotContainer);
  root.render(<ChatbotStandaloneWidget config={config} />);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChatbot);
} else {
  initChatbot();
}

// Export for manual initialization
window.TryOnChatbot = {
  init: (config: Partial<ChatbotConfig>) => {
    const fullConfig: ChatbotConfig = {
      publicKey: config.publicKey || '',
      position: config.position || 'bottom-right',
      theme: config.theme || 'default',
      apiUrl: config.apiUrl || window.location.origin,
      brandName: config.brandName || 'Fashion Store',
      brandColor: config.brandColor || '#6366F1',
      welcomeMessage: config.welcomeMessage || 'Hi! I\'m your virtual styling assistant. I can help you try on clothes virtually!'
    };

    if (!fullConfig.publicKey) {
      console.error('TryOn AI Chatbot: Public key is required');
      return;
    }

    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'tryon-ai-chatbot';
    document.body.appendChild(chatbotContainer);

    const root = createRoot(chatbotContainer);
    root.render(<ChatbotStandaloneWidget config={fullConfig} />);
  }
};