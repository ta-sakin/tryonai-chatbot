import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Camera, Shirt, Wand2, X, Minimize2, Link } from "lucide-react";
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
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>("");
  const { toast } = useToast();

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
    mutationFn: async (data: { userImage: string; clothingImage: string; appId: string }) => {
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
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === "user") {
          setUserImage(result);
        } else {
          setClothingImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = () => {
    if (!userImage || !clothingImage) {
      toast({
        title: "Missing images",
        description: "Please upload both your photo and select a clothing item.",
        variant: "destructive",
      });
      return;
    }

    tryOnMutation.mutate({
      userImage,
      clothingImage,
      appId
    });
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
              <div className="mt-2 border-2 border-dashed border-primary/30 rounded-lg p-4 text-center bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "user")}
                  className="hidden"
                  id="user-photo-upload"
                />
                <label htmlFor="user-photo-upload" className="cursor-pointer">
                  {userImage ? (
                    <div className="space-y-2">
                      <img src={userImage} alt="Your photo" className="w-16 h-16 object-cover rounded-lg mx-auto" />
                      <p className="text-sm text-green-600 font-medium">Photo uploaded</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Camera className="h-8 w-8 text-primary mx-auto" />
                      <p className="text-sm text-primary font-medium">Upload Photo</p>
                      <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Clothing Item */}
            <div>
              <Label className="text-sm font-medium">Selected Item</Label>
              <div className="mt-2 border-2 border-dashed border-secondary/30 rounded-lg p-4 text-center bg-secondary/5">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "clothing")}
                  className="hidden"
                  id="clothing-upload"
                />
                <label htmlFor="clothing-upload" className="cursor-pointer">
                  {clothingImage ? (
                    <div className="space-y-2">
                      <img src={clothingImage} alt="Clothing item" className="w-16 h-16 object-cover rounded-lg mx-auto" />
                      <p className="text-sm text-green-600 font-medium">Item selected</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-secondary mx-auto" />
                      <p className="text-sm text-secondary font-medium">Upload clothing item</p>
                      <p className="text-xs text-gray-500">Or it will auto-detect from page</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Try On Button */}
            <Button 
              onClick={handleTryOn}
              disabled={tryOnMutation.isPending || !userImage || !clothingImage}
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
