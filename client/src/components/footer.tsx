import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Mail,
  MessageCircle,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                TryOn AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Revolutionary virtual try-on technology powered by artificial
              intelligence. Experience the future of online shopping.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/widget-demo">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    Widget Demo
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    Dashboard
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@tryon-ai.com">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </a>
              </li>
              <li>
                <a
                  href="https://help.tryon-ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Button>
                </a>
              </li>
              <li>
                <a href="mailto:contact@tryon-ai.com">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-of-service">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Button>
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://twitter.com/tryon-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/tryon-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/tryon-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} TryOn AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/terms-of-service">
                <Button
                  variant="link"
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                >
                  Terms
                </Button>
              </Link>
              <Link href="/privacy-policy">
                <Button
                  variant="link"
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                >
                  Privacy
                </Button>
              </Link>
              <a href="mailto:legal@tryon-ai.com">
                <Button
                  variant="link"
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                >
                  Legal
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
