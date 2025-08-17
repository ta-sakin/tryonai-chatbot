import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Share, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface TryOnResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalImage: string;
  resultImage: string;
}

export function TryOnResultModal({
  isOpen,
  onClose,
  originalImage,
  resultImage,
}: TryOnResultModalProps) {
  const { toast } = useToast();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // const handleDownload = () => {
  //   if (!resultImage) return;

  //   const link = document.createElement('a');
  //   link.href = resultImage;
  //   link.download = 'virtual-try-on-result.jpg';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);

  //   toast({
  //     title: "Downloaded!",
  //     description: "Your try-on result has been saved.",
  //   });
  // };
  const handleDownload = async () => {
    if (!resultImage) return;

    try {
      let downloadUrl = resultImage;

      // If it's a remote URL (http/https), fetch it as a Blob
      if (resultImage.startsWith("http")) {
        const response = await fetch(resultImage, { mode: "cors" });
        const blob = await response.blob();
        downloadUrl = URL.createObjectURL(blob);
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "virtual-try-on-result.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up if we created an ObjectURL
      if (downloadUrl !== resultImage) {
        setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
      }
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Error",
        description: "Failed to download the result.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Virtual Try-On Result",
          text: "Check out how this looks on me!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share link has been copied to clipboard.",
      });
    }
  };

  const handlePurchase = () => {
    window.open(window.location.href, "_blank");
    toast({
      title: "Redirecting to store",
      description: "Taking you to complete your purchase...",
    });
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Your Virtual Try-On Result
            </DialogTitle>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {/* Original Photo */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Original
              </h3>
              <div
                className="relative cursor-pointer"
                onClick={() => setPreviewImage(originalImage)}
              >
                <img
                  src={originalImage}
                  alt="Original photo"
                  // className="w-full h-80 object-cover rounded-lg shadow-md"
                  className="object-cover rounded-lg mx-auto max-h-96"
                />
              </div>
            </div>

            {/* Try-On Result */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                With Clothing Item
              </h3>
              <div
                className="relative cursor-pointer"
                onClick={() => resultImage && setPreviewImage(resultImage)}
              >
                {resultImage ? (
                  <img
                    src={resultImage}
                    alt="Try-on result"
                    // className="w-full h-80 object-cover rounded-lg shadow-md"
                    className="object-cover rounded-lg mx-auto max-h-96"
                  />
                ) : (
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">
                        Processing your try-on...
                      </p>
                      <p className="text-sm text-gray-500">
                        This may take a few moments
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              onClick={handleDownload}
              disabled={!resultImage}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Result
            </Button>
            <Button
              onClick={handleShare}
              disabled={!resultImage}
              variant="outline"
              className="flex-1"
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              onClick={handlePurchase}
              disabled={!resultImage}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Now
            </Button>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-medium">Tip:</span> Save this result and
              share it with friends to get their opinion!
            </p>
          </div>
        </DialogContent>
      </Dialog>
      {/* Fullscreen Preview Dialog */}
      <Dialog open={!!previewImage} onOpenChange={() => setPreviewImage(null)}>
        <DialogContent className="w-screen h-screen max-w-none p-0 flex items-center justify-center bg-black">
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
          >
            ✕
          </button>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
