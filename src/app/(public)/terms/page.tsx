export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-950 dark:bg-slate-900 py-20 md:py-28 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Terms of <span className="text-primary-500">Service</span>
          </h1>
          <p className="text-slate-400">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By accessing and using the Shree Aadinath Coal Resources LLP website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Use of Website</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                This website is intended to provide information about Shree Aadinath Coal Resources LLP, its products, services, and operations. The content is for informational purposes only and does not constitute a binding offer or contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Shree Aadinath Coal Resources LLP and is protected by applicable intellectual property laws. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                In no event shall Shree Aadinath Coal Resources LLP be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of or inability to use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Governing Law</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                For any questions about these Terms of Service, please contact us at{" "}
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
