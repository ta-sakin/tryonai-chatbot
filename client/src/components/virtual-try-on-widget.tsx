import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  Camera,
  Shirt,
  Wand2,
  X,
  Minimize2,
  Link,
  ImageIcon,
  ShoppingBag,
} from "lucide-react";
import { TryOnResultModal } from "./try-on-result-modal";
import { useToast } from "@/hooks/use-toast";
import { APP_URL, cn } from "@/lib/utils";
import { Spinner } from "./ui/spinner";
import { useTheme } from "./theme-provider";

interface VirtualTryOnWidgetProps {
  appId: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme?: "default" | "dark" | "minimal";
  isDemo?: boolean;
}
async function urlToBase64(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
export function VirtualTryOnWidget({
  appId = "demo",
  position = "bottom-right",
  theme = "default",
  isDemo = false,
}: VirtualTryOnWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(isDemo);
  const [userImage, setUserImage] = useState<string>("");
  const [clothingImage, setClothingImage] = useState<string>("");
  const [clothingImageUrl, setClothingImageUrl] = useState<string>("");
  const [userImageUrl, setUserImageUrl] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState<string>("");
  const [isDraggingUser, setIsDraggingUser] = useState(false);
  const [isDraggingClothing, setIsDraggingClothing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const [recentTryOns, setRecentTryOns] = useState<
    { userImage: string; clothingImage: string; resultImage: string }[]
  >([]);
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const userFileInputRef = useRef<HTMLInputElement>(null);
  const clothingFileInputRef = useRef<HTMLInputElement>(null);
  const { setTheme, theme: appTheme } = useTheme();
  console.log("VirtualTryOnWidget", {
    appId,
    theme,
    position,
  });

  useEffect(() => {
    setTheme(isDemo ? appTheme : theme === "default" ? "light" : "dark");
  }, [theme]);
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const themeClasses = {
    default: "bg-card border-border text-card-foreground",
    dark: "bg-card border-border text-card-foreground",
    minimal: "bg-card border-border text-card-foreground shadow-sm",
  };

  const performTryOn = async (data: {
    userImage: string;
    clothingImage: string;
    appId: string;
  }) => {
    setIsProcessing(true);
    try {
      const response = await fetch(`${APP_URL}/api/try-on`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (!result.success) {
        throw result?.error || result?.message;
      }
      console.log({ result });
      setResultImage(result.resultImage);
      setShowResult(true);
      localStorage.setItem(
        "recentTryOn",
        JSON.stringify({
          recentTryOn: [
            {
              resultImage: result.resultImage,
              userImage,
              clothingImage,
            },
            ...recentTryOns.slice(0, 4),
          ],
        })
      );
      toast({
        title: "Try-on complete!",
        description: "Your virtual try-on result is ready.",
      });
    } catch (error) {
      console.error("Try-on failed:", error);
      toast({
        title: "Try-on failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };
  const clearAll = () => {
    localStorage.removeItem("recentTryOn");
    setRecentTryOns([]);
  };

  useEffect(() => {
    const history = localStorage.getItem("recentTryOn");
    if (history) {
      const images = JSON.parse(history);
      setRecentTryOns(images.recentTryOn);
    }
  }, []);
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "user" | "clothing"
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file, type);
    }
  };

  const processFile = (file: File, type: "user" | "clothing") => {
    if (!file.type.startsWith("image/")) {
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

  const extractUrlFromCloudImage = (
    dataTransfer: DataTransfer
  ): string | null => {
    // Try to get URL from various sources
    const url =
      dataTransfer.getData("text/uri-list") ||
      dataTransfer.getData("text/plain") ||
      dataTransfer.getData("text/html");

    // Check if it's a valid image URL
    if (url && (url.startsWith("http") || url.startsWith("https"))) {
      const imageExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".webp",
        ".bmp",
      ];
      const hasImageExtension = imageExtensions.some((ext) =>
        url.toLowerCase().includes(ext)
      );

      // Also check for common cloud storage patterns
      const isCloudImage =
        url.includes("cloudinary.com") ||
        url.includes("amazonaws.com") ||
        url.includes("googleapis.com") ||
        url.includes("imgur.com") ||
        url.includes("unsplash.com") ||
        hasImageExtension;

      if (isCloudImage) {
        return url;
      }
    }

    return null;
  };

  const handleDragOver = useCallback(
    (e: React.DragEvent, type: "user" | "clothing") => {
      e.preventDefault();
      e.stopPropagation();
      if (type === "user") {
        setIsDraggingUser(true);
      } else {
        setIsDraggingClothing(true);
      }
    },
    []
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent, type: "user" | "clothing") => {
      e.preventDefault();
      e.stopPropagation();
      if (type === "user") {
        setIsDraggingUser(false);
      } else {
        setIsDraggingClothing(false);
      }
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, type: "user" | "clothing") => {
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
          // setActiveTab("url");
          setClothingImageUrl(url);
          setClothingImage(""); // Clear file when URL is set
          // toast({
          //   title: "Image URL detected",
          //   description: "Cloud image URL has been captured.",
          // });
        }
      } else if (type === "user") {
        const url = extractUrlFromCloudImage(e.dataTransfer);
        if (url) {
          setUserImageUrl(url);
          setUserImage("");
        }
      }
    },
    [toast]
  );

  const handleUrlChange = (url: string) => {
    setClothingImageUrl(url);
    if (url) {
      setClothingImage(""); // Clear file when URL is entered
    }
  };

  const handleTryOn = async () => {
    if (!userImage && !userImageUrl) {
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
        description: "Please upload a clothing image.",
        variant: "destructive",
      });
      return;
    }

    await performTryOn({
      userImage: userImage || ((await urlToBase64(userImageUrl)) as string),
      clothingImage:
        clothingImage || ((await urlToBase64(clothingImageUrl)) as string),
      appId,
    });
  };

  const clearUserPhoto = () => {
    setUserImage("");
    setUserImageUrl("");
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
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-2xl"
        >
          <Shirt className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <>
      <div
        className={`fixed ${positionClasses[position]} z-50 max-w-96 min-w-80 `}
      >
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

          <CardContent className="p-4 space-y-4 max-h-[70vh] min-h-[460px] overflow-y-auto">
            <Tabs defaultValue="try-on" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="try-on">Try On</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="try-on" className="mt-2 space-y-2">
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
                    {userImage || userImageUrl ? (
                      <div className=" relative group">
                        <img
                          src={userImage || userImageUrl}
                          alt="Your photo"
                          className="object-cover rounded-lg mx-auto max-h-80"
                        />
                        {/* <p className="text-sm text-green-600 font-medium">
                      Photo uploaded
                    </p> */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button
                            type="button"
                            variant="secondary"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              clearUserPhoto();
                            }}
                            className="h-8 w-8 bg-transparent"
                            // className="text-xs text-gray-500 hover:text-gray-700"
                          >
                            <X className="h-3 w-3" />
                            {/* Remove */}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Camera className="h-8 w-8 text-primary mx-auto" />
                        <p className="text-sm text-primary font-medium">
                          {isDraggingUser
                            ? "Drop your photo here"
                            : "Upload or drag your photo"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          JPG, PNG up to 5MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clothing Item */}
                <div>
                  <Label className="text-sm font-medium ">Clothing Item</Label>
                  <Tabs
                    defaultValue={activeTab}
                    value={activeTab}
                    onValueChange={(v) => setActiveTab(v as "upload" | "url")}
                    className="mt-2"
                  >
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
                        className={`mt-2 border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
                          isDraggingClothing
                            ? "border-primary bg-primary/20"
                            : clothingImage
                            ? "border-green-300 bg-green-50"
                            : "border-primary/30 bg-primary/5 hover:bg-primary/10"
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
                        {clothingImage || clothingImageUrl ? (
                          <div className=" relative group">
                            <img
                              src={clothingImage || clothingImageUrl}
                              alt="Clothing item"
                              className="object-cover rounded-lg mx-auto max-h-80"
                            />
                            {/* <p className="text-sm text-green-600 font-medium">
                          Item uploaded
                        </p> */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <Button
                                type="button"
                                variant="secondary"
                                size="icon"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  clearClothingItem();
                                }}
                                className="h-8 w-8 bg-transparent"
                                // className="text-xs text-gray-500 hover:text-gray-700 "
                              >
                                <X className="h-4 w-4" />
                                {/* Remove */}
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <ImageIcon className="h-8 w-8 text-primary mx-auto" />

                            <p className="text-sm text-primary font-medium">
                              {isDraggingClothing
                                ? "Drop clothing image here"
                                : "Upload or drag clothing image"}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              JPG, PNG up to 5MB
                            </p>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="url" className="mt-2">
                      <div
                        className={cn("space-y-3")}
                        onDragOver={(e) => handleDragOver(e, "clothing")}
                        onDragLeave={(e) => handleDragLeave(e, "clothing")}
                        onDrop={(e) => handleDrop(e, "clothing")}
                      >
                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          value={clothingImageUrl}
                          onChange={(e) => handleUrlChange(e.target.value)}
                          className={cn(
                            "text-sm",
                            isDraggingClothing &&
                              "border-secondary bg-secondary/20"
                          )}
                        />
                        {clothingImageUrl && (
                          <div className="relative group">
                            <img
                              src={clothingImageUrl}
                              alt="Clothing from URL"
                              className="object-cover rounded-lg mx-auto max-h-80"
                              onError={() => {
                                toast({
                                  title: "Invalid image URL",
                                  description:
                                    "Could not load image from the provided URL.",
                                  variant: "destructive",
                                });
                              }}
                            />
                            {/* <p className="text-sm text-green-600 font-medium text-center">
                          URL loaded
                        </p> */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <Button
                                type="button"
                                variant="secondary"
                                size="icon"
                                onClick={clearClothingItem}
                                className="h-8 w-8 bg-transparent"
                                // className="text-xs text-gray-500 hover:text-gray-700 mx-auto flex gap-2"
                              >
                                <X className="h-3 w-3" />
                                {/* Clear */}
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    {!clothingImageUrl && !clothingImage && (
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Or drag & drop a cloud image to auto-capture URL
                      </p>
                    )}
                  </Tabs>
                </div>

                {/* Try On Button */}
                <Button
                  onClick={handleTryOn}
                  disabled={
                    isProcessing ||
                    (!userImage && !userImageUrl) ||
                    (!clothingImage && !clothingImageUrl)
                  }
                  className="w-full bg-primary hover:bg-primary/90 my-4"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <Spinner size="sm" />
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
                <div className="bg-muted/50 rounded-lg p-3 text-xs">
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs">💡</span>
                    </div>
                    <div className="text-foreground">
                      <p className="font-medium mb-1">For best results:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Use a full-body photo</li>
                        <li>• Stand facing forward</li>
                        <li>• Plain background works best</li>
                        <li>• Drag cloud images to auto-capture URLs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="history" className="mt-2">
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Recent Try-Ons
                </h2>
                {recentTryOns.length > 0 ? (
                  <div className="space-y-4">
                    {recentTryOns.map((tryOn, index) => (
                      <div
                        key={index}
                        className="bg-card rounded-lg shadow p-3 hover:shadow-md transition-shadow border"
                      >
                        <div className="grid grid-cols-3 gap-2">
                          <img
                            src={tryOn.userImage}
                            alt="User"
                            className="h-20 w-full object-cover rounded"
                          />
                          <img
                            src={tryOn.clothingImage}
                            alt="User"
                            className="h-20 w-full object-cover rounded"
                          />

                          <img
                            src={tryOn.resultImage}
                            alt="Result"
                            className="h-20 w-full object-cover rounded"
                          />
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={clearAll}>
                      Clear All
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <ShoppingBag className="h-10 w-10 mx-auto text-muted-foreground/50 mb-2" />
                    <p>No try-on history yet</p>
                    <p className="text-sm">
                      Your recent try-ons will appear here
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <TryOnResultModal
        isOpen={showResult}
        onClose={() => setShowResult(false)}
        originalImage={userImage || userImageUrl}
        resultImage={resultImage}
      />
    </>
  );
}
