import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useToast } from "@/hooks/use-toast";
import { GET_CLIENT_ANALYTICS_SUMMARY } from "@/graphql/queries";
import {
  UPDATE_CLIENT,
  REGENERATE_CLIENT_KEYS,
  CREATE_CLIENT,
} from "@/graphql/mutations";
import {
  Copy,
  Eye,
  TrendingUp,
  Users,
  Activity,
  Settings,
  Code,
  Shield,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { genereateRandomBytes } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

export default function Dashboard() {
  const {
    client,
    isLoading: userLoading,
    user,
    refetchClient,
  } = useCurrentUser();
  const { toast } = useToast();

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [allowedDomains, setAllowedDomains] = useState<string[]>([]);
  const [newDomain, setNewDomain] = useState("");
  const [widgetPosition, setWidgetPosition] = useState("bottom-right");
  const [widgetTheme, setWidgetTheme] = useState("default");
  const [requireReferrerCheck, setRequireReferrerCheck] = useState(true);
  const [maxRequestsPerMinute, setMaxRequestsPerMinute] = useState(10);

  // Update state when client data changes
  useEffect(() => {
    if (client) {
      setWebsiteUrl(client.website_url || "");
      setAllowedDomains(client.allowed_domains || []);
      setWidgetPosition(client.widget_position || "bottom-right");
      setWidgetTheme(client.widget_theme || "default");
      setRequireReferrerCheck(client.require_referrer_check ?? true);
      setMaxRequestsPerMinute(client.max_requests_per_minute || 10);
    }
  }, [client]);

  const { data: analyticsData, loading: analyticsLoading } = useQuery(
    GET_CLIENT_ANALYTICS_SUMMARY,
    {
      variables: { clientId: client?.id },
      skip: !client?.id,
    }
  );

  const [createClientMutation, { loading: creating }] =
    useMutation(CREATE_CLIENT);
  const [updateClient] = useMutation(UPDATE_CLIENT, {
    onCompleted: () => {
      toast({
        title: "Settings updated",
        description: "Your widget settings have been saved successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Update failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const [regenerateKeys] = useMutation(REGENERATE_CLIENT_KEYS, {
    onCompleted: () => {
      toast({
        title: "Keys regenerated",
        description:
          "New security keys have been generated. Please update your widget code.",
      });
    },
    onError: (error) => {
      console.log("error", error);
      toast({
        title: "Regeneration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSaveSettings = () => {
    if (!client?.id) return;

    updateClient({
      variables: {
        id: client.id,
        changes: {
          website_url: websiteUrl,
          allowed_domains: allowedDomains,
          widget_position: widgetPosition,
          widget_theme: widgetTheme,
          require_referrer_check: requireReferrerCheck,
          max_requests_per_minute: maxRequestsPerMinute,
        },
      },
    });
  };

  const addDomain = () => {
    if (newDomain && !allowedDomains.includes(newDomain)) {
      setAllowedDomains([...allowedDomains, newDomain]);
      setNewDomain("");
    }
  };

  const removeDomain = (domain: string) => {
    setAllowedDomains(allowedDomains.filter((d) => d !== domain));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} has been copied to clipboard.`,
    });
  };

  const handleRegenerateKeys = async () => {
    if (!client?.id) return;

    const newPublicKey = `pk_${genereateRandomBytes()}`;
    const newSecretKey = `sk_${genereateRandomBytes(36)}`;

    const res = await regenerateKeys({
      variables: {
        id: client.id,
        publicKey: newPublicKey,
        secretKey: newSecretKey,
      },
    });
    console.log(res);
    await refetchClient();
  };

  const getSecureEmbedCode = () => {
    if (!client?.public_key) return "";

    return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://cdn.tryonai.com/widget.js';
    script.dataset.appId = '${client.app_id}';
    script.dataset.position = '${widgetPosition}';
    script.dataset.theme = '${widgetTheme}';
    document.head.appendChild(script);
  })();
</script>`;
  };

  const createClient = async () => {
    try {
      const userId = user?.id;
      const appId = `app_${genereateRandomBytes()}`;
      const publicKey = `pk_${genereateRandomBytes()}`;
      const secretKey = `sk_${genereateRandomBytes(32)}`;
      const object = {
        user_id: userId,
        app_id: appId,
        secret_key: secretKey,
        public_key: publicKey,
        website_url: websiteUrl || null,
        allowed_domains: allowedDomains,
        widget_position: "bottom-right",
        widget_theme: "default",
        is_active: true,
        monthly_try_on_limit: 100,
        monthly_try_on_count: 0,
        require_referrer_check: true,
        max_requests_per_minute: 10,
      };
      const res = await createClientMutation({
        variables: {
          objects: [object],
        },
      });
      if (res) {
        toast({
          title: "Client created",
        });
        console.log(res);
        refetchClient();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  if (userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">No Client Found</h2>
          <div className="mt-4">
            <Button onClick={createClient} disabled={creating}>
              Create
              {creating && <Spinner />}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your TryOn AI widgets and view analytics
          </p>
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Views
                  </p>
                  <p className="text-2xl font-bold">
                    {analyticsLoading
                      ? "..."
                      : analyticsData?.total_views?.aggregate?.count || 0}
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Try-Ons
                  </p>
                  <p className="text-2xl font-bold">
                    {analyticsLoading
                      ? "..."
                      : analyticsData?.try_ons?.aggregate?.count || 0}
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Conversions
                  </p>
                  <p className="text-2xl font-bold">
                    {analyticsLoading
                      ? "..."
                      : analyticsData?.conversions?.aggregate?.count || 0}
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Conv. Rate
                  </p>
                  <p className="text-2xl font-bold">
                    {analyticsLoading
                      ? "..."
                      : `${
                          analyticsData?.conversions?.aggregate?.count &&
                          analyticsData?.total_views?.aggregate?.count
                            ? Math.round(
                                (analyticsData.conversions.aggregate.count /
                                  analyticsData.total_views.aggregate.count) *
                                  100
                              )
                            : 0
                        }%`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="integration" className="space-y-6">
          <TabsList>
            <TabsTrigger
              value="integration"
              className="flex items-center space-x-2"
            >
              <Code className="h-4 w-4" />
              <span>Integration</span>
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="flex items-center space-x-2"
            >
              <Settings className="h-4 w-4" />
              <span>Widget Settings</span>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="flex items-center space-x-2"
            >
              <Shield className="h-4 w-4" />
              <span>Security</span>
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
                {/* Public Key */}
                <div>
                  <Label className="text-sm font-medium">Your Public Key</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Input
                      value={client.public_key}
                      readOnly
                      className="font-mono text-sm bg-muted"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(client.public_key, "Public Key")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    This key is safe to use in your frontend code
                  </p>
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
                  <Select
                    value={widgetPosition}
                    onValueChange={setWidgetPosition}
                  >
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
                      {
                        value: "default",
                        name: "Default",
                        color: "bg-primary",
                      },
                      { value: "dark", name: "Dark", color: "bg-gray-800" },
                      {
                        value: "minimal",
                        name: "Minimal",
                        color: "bg-white border",
                      },
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
                        <div
                          className={`border-2 rounded-lg p-4 text-center transition-colors ${
                            widgetTheme === theme.value
                              ? "border-primary bg-primary/5"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 ${theme.color} rounded mx-auto mb-2`}
                          ></div>
                          <span className="text-sm font-medium">
                            {theme.name}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <Button onClick={handleSaveSettings} className="w-full">
                  Save Configuration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <div className="space-y-6">
              {/* Security Keys */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Security Keys</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your widget's security credentials
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-yellow-600 dark:text-yellow-300 text-xs">
                          ⚠️
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                          Secure Implementation
                        </h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                          Your widget now uses secure token-based
                          authentication. Only your public key is exposed to the
                          frontend.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleRegenerateKeys}
                    variant="outline"
                    className="w-full"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Regenerate Security Keys
                  </Button>
                </CardContent>
              </Card>

              {/* Domain Security */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Allowed Domains</CardTitle>
                  <CardDescription>
                    Restrict widget usage to specific domains for enhanced
                    security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      value={newDomain}
                      onChange={(e) => setNewDomain(e.target.value)}
                      placeholder="example.com or *.example.com"
                      onKeyDown={(e) => e.key === "Enter" && addDomain()}
                    />
                    <Button onClick={addDomain} disabled={!newDomain}>
                      Add
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {allowedDomains.map((domain, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                      >
                        <span className="text-sm font-mono">{domain}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeDomain(domain)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="referrer-check">
                        Require Referrer Validation
                      </Label>
                      <p className="text-sm text-gray-500">
                        Additional security layer using referrer headers
                      </p>
                    </div>
                    <Switch
                      id="referrer-check"
                      checked={requireReferrerCheck}
                      onCheckedChange={setRequireReferrerCheck}
                    />
                  </div>

                  <div>
                    <Label htmlFor="rate-limit">Max Requests Per Minute</Label>
                    <Input
                      id="rate-limit"
                      type="number"
                      value={maxRequestsPerMinute}
                      onChange={(e) =>
                        setMaxRequestsPerMinute(parseInt(e.target.value) || 10)
                      }
                      min="1"
                      max="100"
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </TabsContent>

          <TabsContent value="integration">
            <div className="space-y-6">
              {/* Secure Embed Code */}
              <Card>
                <CardHeader>
                  <CardTitle>Secure Embed Code</CardTitle>
                  <CardDescription>
                    Copy this secure code and paste it into your website's HTML
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{getSecureEmbedCode()}</code>
                    </pre>
                  </div>
                  <Button
                    className="mt-4"
                    onClick={() =>
                      copyToClipboard(getSecureEmbedCode(), "Secure embed code")
                    }
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Secure Code
                  </Button>

                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 dark:text-green-300 text-xs">
                          🔒
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 dark:text-green-200">
                          Enhanced Security
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          This code uses your public key and secure token-based
                          authentication. Your secret keys are never exposed to
                          the frontend.
                        </p>
                      </div>
                    </div>
                  </div>
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
                    <p className="text-sm text-muted-foreground mb-4">
                      Add to footer.php or use "Insert Headers and Footers"
                      plugin
                    </p>
                    <Badge variant="secondary">
                      Paste before &lt;/body&gt;
                    </Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 font-bold">S</span>
                    </div>
                    <h3 className="font-semibold mb-2">Shopify</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Go to Online Store &gt; Themes &gt; Edit Code &gt;
                      theme.liquid
                    </p>
                    <Badge variant="secondary">
                      Paste before &lt;/body&gt;
                    </Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Code className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Custom HTML</h3>
                    <p className="text-sm text-muted-foreground mb-4">
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
