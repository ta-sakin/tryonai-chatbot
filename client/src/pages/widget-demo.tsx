import { Card, CardContent } from "@/components/ui/card";
import { VirtualTryOnWidget } from "@/components/virtual-try-on-widget";
import { Badge } from "@/components/ui/badge";
import { VirtualTryOnStandaloneWidget } from "@/components/widget-standalone";
import { useQuery } from "@apollo/client";
import { GET_USER_CLIENT } from "@/graphql/queries";
import { useUserId } from "@nhost/react";
import { Spinner } from "@/components/ui/spinner";
import { APP_URL } from "@/lib/utils";

export default function WidgetDemo() {
  const userId = useUserId();
  const { data, loading } = useQuery(GET_USER_CLIENT, {
    variables: {
      userId,
    },
  });
  if (loading) {
    <div className="h-screen w-full flex justify-center">
      <Spinner size="lg" />
    </div>;
  }
  const client = data?.clients?.[0];
  console.log("client", client, data);
  return (
    <div className="min-h-screen bg-background">
      {/* Demo Store Header */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">StyleHub Fashion</h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Women
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Men
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Sale
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-300">🔍</span>
            <span className="text-slate-300">🛍️</span>
          </div>
        </div>
      </div>

      {/* Demo Badge */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Badge
              variant="secondary"
              className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
            >
              🎯 This is a demo store showcasing TryOn AI widget functionality
            </Badge>
          </div>
        </div>
      </div>

      {/* Product Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Product Image */}
          <div className="w-full">
            <img
              // src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000"
              // src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1740759478-mhl-mens-cloth-alex-mill-769-67c1e1a653c6b.jpg?crop=0.346xw:0.865xh;0.325xw,0.135xh&resize=980:*"
              // src="https://live.texcon.webcore.no/wp-content/uploads/sites/2/2023/07/TOPPBILDE-Mote-Instagram-menn-1024x706.jpg"
              src="https://us.blakelyclothing.com/cdn/shop/files/595AWHITED-2_800x.jpg?v=1729592866"
              alt="Elegant Shirt"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight">Elegant Shirt</h1>
            <div className="mt-3">
              <p className="text-3xl tracking-tight">$29.99</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★☆</span>
                </div>
                <p className="ml-3 text-sm text-muted-foreground">
                  4.0 out of 5 stars (24 reviews)
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-muted-foreground">
                This elegant shirt features a sophisticated silhouette perfect
                for special occasions. Made from premium materials with
                attention to detail, this shirt will make you feel confident and
                beautiful at any event.
              </p>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Size</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {["XS", "S", "M", "L"].map((size) => (
                  <label
                    key={size}
                    className="group relative border border-border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-accent transition-colors"
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size.toLowerCase()}
                      className="sr-only"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10">
              <div className="flex space-x-4">
                <button className="flex-1 bg-primary border border-transparent rounded-md py-3 px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-background border border-border rounded-md py-3 px-8 text-base font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                  ♡ Save
                </button>
              </div>
            </div>

            {/* Demo Instructions */}
            <div className="mt-8">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">
                    Try the Virtual Try-On Widget!
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Look for the floating widget in the bottom-right corner.
                    Click it to test the virtual try-on functionality.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>
                      • Upload your photo and see how this dress looks on you
                    </li>
                    <li>
                      • The widget auto-detects the product from this page
                    </li>
                    <li>
                      • Experience the same interface your customers will see
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* TryOn Widget */}
      <VirtualTryOnWidget
        appId={client?.app_id}
        position={"bottom-right"}
        // position={client.widget_position}
        theme={client?.widget_theme}
        isDemo={true}
      />
      {/* <VirtualTryOnStandaloneWidget
        widgetConfig={{
          appId: client.app_id,
          position: client.widget_position,
          theme: client.widget_theme,
        }}
      /> */}
    </div>
  );
}
