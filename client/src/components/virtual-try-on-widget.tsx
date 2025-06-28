import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Camera, Shirt, Wand2, X, Minimize2, Link, ImageIcon } from "lucide-react";
import { TryOnResultModal } from "./try-on-result-modal";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface VirtualTryOnWidgetProps {
  appId?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme?: "default" | "dark" | "minimal";
  isDemo?: boolean;
}

export function VirtualTryOnWidget({ 
  appId = "demo", 
  position = "bottom-right",
  theme = "default",
  isDemo = false 
}: VirtualTryOnWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(isDemo);
  const [userImage, setUserImage] = useState<string>("");
  const [clothingImage, setClothingImage] = useState<string>("");
  const [clothingImageUrl, setClothingImageUrl] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>("");
  const [isDraggingUser, setIsDraggingUser] = useState(false);
  const [isDraggingClothing, setIsDraggingClothing] = useState(false);
  const { toast } = useToast();

  const userFileInputRef = useRef<HTMLInputElement>(null);
  const clothingFileInputRef = useRef<HTMLInputElement>(null);

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

  const tryOnMutation = useMutation({
    mutationFn: async (data: { userImage: string; clothingImage?: string; clothingImageUrl?: string; appId: string }) => {
      const response = await apiRequest("POST", "/api/try-on", data);
      return response.json();
    },
    onSuccess: (data) => {
      setResultImage(data.resultImage);
      setShowResult(true);
      toast({
        title: "Try-on complete!",
        description: "Your virtual try-on result is ready.",
      });
    },
    onError: (error) => {
      console.error("Try-on failed:", error);
      toast({
        title: "Try-on failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

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
      } else {
        setClothingImage(result);
        setClothingImageUrl(""); // Clear URL when file is uploaded
      }
    };
    reader.readAsDataURL(file);
  };

  const extractUrlFromCloudImage = (dataTransfer: DataTransfer): string | null => {
    // Try to get URL from various sources
    const url = dataTransfer.getData('text/uri-list') || 
                dataTransfer.getData('text/plain') || 
                dataTransfer.getData('text/html');
    
    // Check if it's a valid image URL
    if (url && (url.startsWith('http') || url.startsWith('https'))) {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
      const hasImageExtension = imageExtensions.some(ext => 
        url.toLowerCase().includes(ext)
      );
      
      // Also check for common cloud storage patterns
      const isCloudImage = url.includes('cloudinary.com') || 
                          url.includes('amazonaws.com') || 
                          url.includes('googleapis.com') ||
                          url.includes('imgur.com') ||
                          url.includes('unsplash.com') ||
                          hasImageExtension;
      
      if (isCloudImage) {
        return url;
      }
    }
    
    return null;
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
      // Handle file drop
      const file = files[0];
      processFile(file, type);
    } else if (type === "clothing") {
      // Handle URL drop for clothing only
      const url = extractUrlFromCloudImage(e.dataTransfer);
      if (url) {
        setClothingImageUrl(url);
        setClothingImage(""); // Clear file when URL is set
        toast({
          title: "Image URL detected",
          description: "Cloud image URL has been captured.",
        });
      }
    }
  }, [toast]);

  const handleUrlChange = (url: string) => {
    setClothingImageUrl(url);
    if (url) {
      setClothingImage(""); // Clear file when URL is entered
    }
  };

  const handleTryOn = () => {
    if (!userImage) {
      toast({
        title: "Missing user photo",
        description: "Please upload your photo.",
        variant: "destructive",
      });
      return;
    }

    if (!clothingImage && !clothingImageUrl) {
      toast({
        title: "Missing clothing item",
        description: "Please upload a clothing image or enter an image URL.",
        variant: "destructive",
      });
      return;
    }

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
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl"
        >
          <Shirt className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className={`fixed ${positionClasses[position]} z-50 w-80`}>
        <Card className={`${themeClasses[theme]} shadow-2xl border`}>
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Shirt className="h-4 w-4" />
                </div>
                <CardTitle className="text-lg">Virtual Try-On</CardTitle>
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

          <CardContent className="p-4 space-y-4">
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
                  <TabsTrigger value="url" className="text-xs">
                    <Link className="h-3 w-3 mr-1" />
                    URL
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
                          {isDraggingClothing ? "Drop clothing image here" : "Upload or drag clothing image"}
                        </p>
                        <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="url" className="mt-2">
                  <div className="space-y-3">
                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={clothingImageUrl}
                      onChange={(e) => handleUrlChange(e.target.value)}
                      className="text-sm"
                    />
                    {clothingImageUrl && (
                      <div className="space-y-2">
                        <img 
                          src={clothingImageUrl} 
                          alt="Clothing from URL" 
                          className="w-16 h-16 object-cover rounded-lg mx-auto"
                          onError={() => {
                            toast({
                              title: "Invalid image URL",
                              description: "Could not load image from the provided URL.",
                              variant: "destructive",
                            });
                          }}
                        />
                        <p className="text-sm text-green-600 font-medium text-center">URL loaded</p>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={clearClothingItem}
                          className="text-xs text-gray-500 hover:text-gray-700 mx-auto block"
                        >
                          <X className="h-3 w-3 mr-1" />
                          Clear
                        </Button>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 text-center">
                      Or drag & drop a cloud image to auto-capture URL
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Try On Button */}
            <Button 
              onClick={handleTryOn}
              disabled={tryOnMutation.isPending || !userImage || (!clothingImage && !clothingImageUrl)}
              className="w-full bg-primary hover:bg-primary/90"
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

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-3 text-xs">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs">💡</span>
                </div>
                <div className="text-blue-700">
                  <p className="font-medium mb-1">For best results:</p>
                  <ul className="space-y-1 text-blue-600">
                    <li>• Use a full-body photo</li>
                    <li>• Stand facing forward</li>
                    <li>• Plain background works best</li>
                    <li>• Drag cloud images to auto-capture URLs</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
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