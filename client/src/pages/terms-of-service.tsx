import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-4 hover:text-primary hover:bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using TryOn AI ("the Service"), you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TryOn AI provides virtual try-on technology that allows users to
                visualize how clothing and accessories might look on them using
                artificial intelligence. The service includes web-based tools,
                APIs, and related features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. User Accounts
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  To access certain features of the Service, you may be required
                  to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Acceptable Use
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upload inappropriate, offensive, or illegal content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>
                    Use the Service for commercial purposes without
                    authorization
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Privacy and Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the Service, to
                understand our practices regarding the collection and use of
                your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                TryOn AI and its licensors. The Service is protected by
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall TryOn AI, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days notice prior to any new terms
                taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:legal@tryon-ai.com"
                  className="text-primary hover:underline"
                >
                  legal@tryon-ai.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/privacy-policy">
              <Button variant="outline" className="hover:text-primary">
                Privacy Policy
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Back to TryOn AI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
