export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-50 dark:bg-slate-900 py-20 md:py-28 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy <span className="text-primary-500">Policy</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Shree Aadinath Coal Resources LLP (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of visitors to our website. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                We collect information you voluntarily provide through our contact form, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (optional)</li>
                <li>Message content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The information you provide is used solely for the purpose of responding to your enquiry, providing requested services, and maintaining communication regarding business opportunities. We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Third-Party Links</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Changes to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:admin@shreeaadinathcoal.com" className="text-primary-500 hover:text-primary-600 transition-colors">
                  admin@shreeaadinathcoal.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
