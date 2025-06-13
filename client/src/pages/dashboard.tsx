import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Copy, Eye, TrendingUp, Users, Activity, Settings, Code } from "lucide-react";

export default function Dashboard() {
  const { client } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [websiteUrl, setWebsiteUrl] = useState(client?.websiteUrl || "");
  const [widgetPosition, setWidgetPosition] = useState(client?.widgetPosition || "bottom-right");
  const [widgetTheme, setWidgetTheme] = useState(client?.widgetTheme || "default");

  const { data: analytics, isLoading } = useQuery({
    queryKey: ["/api/client/analytics"],
    enabled: !!client,
  });

  const updateSettingsMutation = useMutation({
    mutationFn: async (settings: any) => {
      const response = await apiRequest("PUT", "/api/client/settings", settings);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Settings updated",
        description: "Your widget settings have been saved successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
    },
    onError: () => {
      toast({
        title: "Update failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSaveSettings = () => {
    updateSettingsMutation.mutate({
      websiteUrl,
      widgetPosition,
      widgetTheme,
    });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} has been copied to clipboard.`,
    });
  };

  const getEmbedCode = () => {
    if (!client?.appId) return "";
    
    return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.tryonai.com/widget.js';
    script.dataset.appId = '${client.appId}';
    script.dataset.position = '${widgetPosition}';
    script.dataset.theme = '${widgetTheme}';
    document.head.appendChild(script);
  })();
</script>`;
  };

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your TryOn AI widgets and view analytics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {isLoading ? "..." : analytics?.totalViews || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Try-Ons</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {isLoading ? "..." : analytics?.tryOns || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Conversions</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {isLoading ? "..." : analytics?.conversions || 0}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Conv. Rate</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {isLoading ? "..." : `${analytics?.conversionRate || 0}%`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="settings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Widget Settings</span>
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>Integration</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Widget Configuration</CardTitle>
                <CardDescription>
                  Customize your virtual try-on widget settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* App ID */}
                <div>
                  <Label className="text-sm font-medium">Your App ID</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Input
                      value={client.appId}
                      readOnly
                      className="font-mono text-sm bg-gray-50"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(client.appId, "App ID")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <Label htmlFor="websiteUrl">Website URL</Label>
                  <Input
                    id="websiteUrl"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://your-store.com"
                    className="mt-2"
                  />
                </div>

                {/* Widget Position */}
                <div>
                  <Label>Widget Position</Label>
                  <Select value={widgetPosition} onValueChange={setWidgetPosition}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bottom-right">Bottom Right</SelectItem>
                      <SelectItem value="bottom-left">Bottom Left</SelectItem>
                      <SelectItem value="top-right">Top Right</SelectItem>
                      <SelectItem value="top-left">Top Left</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Widget Theme */}
                <div>
                  <Label>Widget Theme</Label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {[
                      { value: "default", name: "Default", color: "bg-primary" },
                      { value: "dark", name: "Dark", color: "bg-gray-800" },
                      { value: "minimal", name: "Minimal", color: "bg-white border" },
                    ].map((theme) => (
                      <label key={theme.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="theme"
                          value={theme.value}
                          checked={widgetTheme === theme.value}
                          onChange={(e) => setWidgetTheme(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`border-2 rounded-lg p-4 text-center transition-colors ${
                          widgetTheme === theme.value
                            ? "border-primary bg-primary/5"
                            : "border-gray-300 hover:border-gray-400"
                        }`}>
                          <div className={`w-8 h-8 ${theme.color} rounded mx-auto mb-2`}></div>
                          <span className="text-sm font-medium">{theme.name}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleSaveSettings}
                  disabled={updateSettingsMutation.isPending}
                  className="w-full"
                >
                  {updateSettingsMutation.isPending ? "Saving..." : "Save Configuration"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integration">
            <div className="space-y-6">
              {/* Embed Code */}
              <Card>
                <CardHeader>
                  <CardTitle>Embed Code</CardTitle>
                  <CardDescription>
                    Copy this code and paste it into your website's HTML
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{getEmbedCode()}</code>
                    </pre>
                  </div>
                  <Button
                    className="mt-4"
                    onClick={() => copyToClipboard(getEmbedCode(), "Embed code")}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Code
                  </Button>
                </CardContent>
              </Card>

              {/* Platform Instructions */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold">W</span>
                    </div>
                    <h3 className="font-semibold mb-2">WordPress</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Add to footer.php or use "Insert Headers and Footers" plugin
                    </p>
                    <Badge variant="secondary">Paste before &lt;/body&gt;</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold">S</span>
                    </div>
                    <h3 className="font-semibold mb-2">Shopify</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Go to Online Store &gt; Themes &gt; Edit Code &gt; theme.liquid
                    </p>
                    <Badge variant="secondary">Paste before &lt;/body&gt;</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Custom HTML</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Paste directly into your HTML file
                    </p>
                    <Badge variant="secondary">Before &lt;/body&gt; tag</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
