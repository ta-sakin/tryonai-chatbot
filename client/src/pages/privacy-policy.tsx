import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                1. Information We Collect
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create an account or use our services</li>
                  <li>Upload images for virtual try-on features</li>
                  <li>Contact us for support or feedback</li>
                  <li>
                    Subscribe to our newsletter or marketing communications
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide, maintain, and improve our virtual try-on services
                  </li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>
                    Communicate with you about products, services, and events
                  </li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>
                    Detect, investigate, and prevent fraudulent transactions
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Image Processing and AI
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>When you use our virtual try-on features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Images are processed using artificial intelligence to
                    generate try-on results
                  </li>
                  <li>
                    We do not store your uploaded images permanently unless you
                    explicitly save them
                  </li>
                  <li>
                    Processing is done securely and images are deleted after
                    session completion
                  </li>
                  <li>We may use anonymized data to improve our AI models</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Information Sharing
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties except:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>
                    To trusted service providers who assist in operating our
                    services
                  </li>
                  <li>When required by law or to protect our rights</li>
                  <li>
                    In connection with a merger, acquisition, or sale of assets
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Data Retention
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide you with our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services and user experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Your Rights
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Access and receive a copy of your personal information
                  </li>
                  <li>Rectify or update your personal information</li>
                  <li>Delete your personal information</li>
                  <li>Restrict or object to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect and
                use personal information about you. You can control cookies
                through your browser settings, but disabling cookies may affect
                the functionality of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information in accordance with this
                Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Contact Us
              </h2>
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="mt-3 space-y-1">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@tryon-ai.com"
                      className="text-primary hover:underline"
                    >
                      privacy@tryon-ai.com
                    </a>
                  </p>
                  <p>Address: TryOn AI Privacy Team, [Your Address]</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/terms-of-service">
              <Button variant="outline" className="hover:text-primary">
                Terms of Service
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
