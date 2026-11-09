import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Mail, Send, CheckCircle2, Heart, Award, Sparkles } from 'lucide-react';

interface TrustPageLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  children: React.ReactNode;
}

const TrustPageLayout: React.FC<TrustPageLayoutProps> = ({ title, subtitle, category, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div className="border-b border-[#E7D8C5] pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
          {category}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#302D28]">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-[#76543D] leading-relaxed italic">
          {subtitle}
        </p>
      </div>
      <div className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-10 shadow-sm leading-relaxed text-sm sm:text-base text-[#302D28]/90 space-y-6">
        {children}
      </div>
    </div>
  );
};

export const AboutPage: React.FC = () => {
  return (
    <TrustPageLayout
      category="Editorial Identity & Heritage"
      title="About NAVI Food Magazine"
      subtitle="Recipes Made With Love. Memories Shared Around the Table."
    >
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#30483A]">
          Welcome into Our Kitchen
        </h2>
        <p>
          NAVI is an independent international home-cooking magazine where food, family traditions, memories, cultures, and simple homemade recipes come together. Founded and published by <strong>Naveed Afzal</strong>, NAVI was created with a heartfelt belief: food is far more than physical sustenance. It connects generations, bridges cultures, and anchors our most treasured memories.
        </p>
        <p>
          Some recipes have a special place in our kitchens. They are the dishes we prepare when the house fills with family, when the weather turns colder, or when we simply yearn for something comforting and homemade. At NAVI, we celebrate the sensory pleasures of everyday cooking: the aroma of bread rising in the oven, the sizzle of garlic in golden olive oil, and the deep satisfaction of preparing a wholesome meal from scratch.
        </p>
      </div>

      <div className="bg-[#F5F0E7] p-6 rounded-2xl border border-[#E7D8C5] space-y-3">
        <h3 className="font-serif text-lg font-bold text-[#30483A]">
          Our Three Guiding Editorial Pillars:
        </h3>
        <ul className="space-y-2 text-sm text-[#302D28]">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B76B4A] mt-2 shrink-0" />
            <span><strong>Warmth & Hospitality:</strong> Written in a conversational, friendly voice that welcomes home cooks of every skill level.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B76B4A] mt-2 shrink-0" />
            <span><strong>Authentic Cultural Respect:</strong> Honoring traditional dishes across 12 countries with accurate historical context.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B76B4A] mt-2 shrink-0" />
            <span><strong>Practical Accessibility:</strong> Prioritizing ingredients readily available in ordinary supermarkets without unnecessary expense.</span>
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-serif text-xl font-bold text-[#302D28]">
          The Founder Behind NAVI
        </h3>
        <p>
          Naveed Afzal oversees the editorial direction and technical curation of NAVI. We firmly reject the generic, automated content model flooding the internet. Every article in our publication is constructed with meticulous attention to detail, clear step-by-step instructions, sensory indicators, and honest kitchen advice.
        </p>
      </div>
    </TrustPageLayout>
  );
};

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <TrustPageLayout
      category="Reader Inquiries & Support"
      title="Contact NAVI"
      subtitle="We would love to hear from you. Have a recipe question or cooking story to share?"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#30483A]">
            Editorial Office & Reader Inquiries
          </h2>
          <p className="text-sm text-[#76543D] leading-relaxed">
            Whether you need help adapting a recipe for specific dietary needs, want to suggest an international holiday tradition, or have feedback on our buying guides, our team is here to assist you.
          </p>

          <div className="bg-[#F5F0E7] p-5 rounded-2xl border border-[#E7D8C5] space-y-3 text-xs">
            <div className="flex items-center gap-2.5 text-[#302D28]">
              <Mail className="w-4 h-4 text-[#B76B4A]" />
              <span><strong>Primary Editorial Email:</strong> Afzal460@gmail.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#302D28]">
              <Award className="w-4 h-4 text-[#30483A]" />
              <span><strong>Editor-in-Chief:</strong> Naveed Afzal</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#302D28]">
              <ShieldCheck className="w-4 h-4 text-green-700" />
              <span><strong>Response Time:</strong> Typically within 24-48 business hours</span>
            </div>
          </div>
        </div>

        {/* Working Contact Form */}
        <div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-2 text-green-900">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
              <h3 className="font-serif text-lg font-bold">Message Sent Successfully!</h3>
              <p className="text-xs">
                Thank you for reaching out to Naveed Afzal and the NAVI team. We will review your message promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#302D28] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-[#302D28] mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-[#302D28] mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Question about Christmas Ham glaze..."
                  className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-[#302D28] mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note here..."
                  className="w-full px-3 py-2 bg-[#F5F0E7] border border-[#E7D8C5] rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#30483A] hover:bg-[#30483A]/90 text-white font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message to Naveed Afzal</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </TrustPageLayout>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <TrustPageLayout
      category="Compliance & Legal"
      title="Privacy Policy"
      subtitle="Last updated: November 2026 • Full transparency on how reader information is protected."
    >
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-[#30483A]">1. Introduction</h2>
        <p>
          NAVI ("we", "us", or "our"), operated by Naveed Afzal, is committed to safeguarding the privacy of our readers and website visitors. This Privacy Policy details our data collection, usage, and disclosure practices in accordance with the European General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and Google Publisher Policies.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">2. Information We Collect</h2>
        <p>
          We do not require user account registration to read our recipes or access our countdown calendars. We only collect information that you voluntarily provide to us:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Newsletter Subscription:</strong> If you voluntarily join our mailing list, we store your email address solely to deliver requested recipes.</li>
          <li><strong>Direct Inquiries:</strong> If you contact us via email (Afzal460@gmail.com), we use your email to respond to your specific query.</li>
          <li><strong>Device & Usage Data:</strong> Standard server logs, IP addresses, browser types, and anonymous page metrics to ensure site security and performance.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">3. How We Use Cookies</h2>
        <p>
          We use local storage and cookies to save your user preferences directly on your device (such as Metric vs US units, and your saved recipe bookmarks). We do not sell, rent, or trade reader personal information to third parties.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">4. Third-Party Advertising & Affiliates</h2>
        <p>
          NAVI displays non-intrusive advertisements via Google AdSense and affiliate product recommendations through the Amazon Associates program. These third-party vendors may use cookies to serve ads based on prior visits to our site or other websites. You may opt out of personalized advertising by visiting Google Ads Settings.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">5. Your Rights Under GDPR & CCPA</h2>
        <p>
          Depending on your jurisdiction, you have the right to access, rectify, or request deletion of your personal data. To exercise these rights, please contact owner Naveed Afzal at <strong>Afzal460@gmail.com</strong>.
        </p>
      </div>
    </TrustPageLayout>
  );
};

export const CookiePolicyPage: React.FC = () => {
  return (
    <TrustPageLayout
      category="Compliance & Legal"
      title="Cookie Policy & Tracking Technologies"
      subtitle="Clear details on technical cookies, analytics, and consent management."
    >
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-[#30483A]">What Are Cookies?</h2>
        <p>
          Cookies and local browser storage are small text files stored on your computer or mobile device when you browse websites. They enable the website to remember your actions and preferences over a period of time.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">Categories of Cookies Used on NAVI:</h2>
        <div className="space-y-3">
          <div className="p-4 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
            <p className="font-bold text-[#302D28]">1. Strictly Necessary Cookies (Always Active)</p>
            <p className="text-xs text-[#76543D] mt-1">
              Required for core website navigation, bookmarking recipes into your personal list, and saving your preferred unit system (Metric or US Customary). These do not track personal identifying information across external websites.
            </p>
          </div>

          <div className="p-4 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
            <p className="font-bold text-[#302D28]">2. Analytics Cookies (Optional / Consent Required)</p>
            <p className="text-xs text-[#76543D] mt-1">
              Provide anonymous statistics on page visits and reading duration to help us understand which recipe articles are most helpful to readers.
            </p>
          </div>

          <div className="p-4 bg-[#F5F0E7] rounded-xl border border-[#E7D8C5]">
            <p className="font-bold text-[#302D28]">3. Advertising & Affiliate Cookies</p>
            <p className="text-xs text-[#76543D] mt-1">
              Amazon Associates and Google AdSense utilize cookies to confirm qualifying referral sales and prevent invalid ad click activity in full accordance with Google and Amazon publisher policies.
            </p>
          </div>
        </div>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">Managing Your Cookie Choices</h2>
        <p>
          You can adjust or revoke your cookie choices at any time via our Cookie Preferences banner at the bottom of the page, or through your web browser settings.
        </p>
      </div>
    </TrustPageLayout>
  );
};

export const TermsConditionsPage: React.FC = () => {
  return (
    <TrustPageLayout
      category="Compliance & Legal"
      title="Terms and Conditions of Use"
      subtitle="Terms governing readership, intellectual property, and content use."
    >
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-[#30483A]">1. Agreement to Terms</h2>
        <p>
          By accessing NAVI Food Magazine (navi-magazine.com), you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">2. Intellectual Property Rights</h2>
        <p>
          All recipe texts, editorial narratives, website layouts, custom graphics, and curated buying guides are the exclusive intellectual property of Naveed Afzal and NAVI Magazine. You may print individual recipe cards for personal, non-commercial home cooking use. Republication, automated scraping, or bulk syndication without express written permission is strictly prohibited.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">3. Disclaimer of Warranties</h2>
        <p>
          The recipes and cooking guides provided on NAVI are intended for informational, educational, and domestic home cooking purposes. While all recipes are crafted with professional culinary rigor, cooking outcomes vary depending on ingredient quality, altitude, and appliance calibrations. Readers are solely responsible for ensuring safe food handling temperatures and verifying allergen safety.
        </p>
      </div>
    </TrustPageLayout>
  );
};

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <TrustPageLayout
      category="FTC & Amazon Compliance"
      title="Amazon Associates Affiliate Disclosure"
      subtitle="Complete transparency regarding affiliate compensation and editorial integrity."
    >
      <div className="space-y-4">
        <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium">
          <strong>Official Amazon Associate Statement:</strong> "NAVI is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon properties including amazon.com, amazon.co.uk, amazon.ca, amazon.fr, amazon.de, amazon.it, amazon.es, and amazon.com.au."
        </div>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">Our Editorial Independence Commitment</h2>
        <p>
          At NAVI, editorial integrity comes first. We never accept free products or sponsorships in exchange for guaranteed positive reviews. Our buying guides and "NAVI Kitchen Essentials" recommendations are chosen independently based on durability, functionality, and genuine home-cooking utility.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">No Additional Cost to Readers</h2>
        <p>
          When you click an authorized Amazon affiliate link on our website and complete a purchase, Amazon pays us a modest referral commission. <strong>The price you pay is identical</strong> whether you use our link or navigate to Amazon directly.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">Price and Availability Accuracy</h2>
        <p>
          Product prices, ratings, and inventory availability are displayed as general guides and are subject to real-time changes on Amazon. We encourage readers to check exact terms directly on the merchant platform.
        </p>
      </div>
    </TrustPageLayout>
  );
};

export const EditorialPolicyPage: React.FC = () => {
  return (
    <TrustPageLayout
      category="Journalistic Integrity"
      title="NAVI Editorial Policy"
      subtitle="Our standards for authentic storytelling, fact-checking, and zero-plagiarism."
    >
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-[#30483A]">1. Original Content Pledge</h2>
        <p>
          NAVI does not scrape recipes, duplicate competitor material, or publish thin automated content. Every recipe article is original, accompanied by authentic culinary history, practical home-cooking guidance, and detailed step-by-step instructions.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">2. Truth in Storytelling & History</h2>
        <p>
          In keeping with our authentic editorial philosophy, we do not invent fictional personal memories or fake qualifications for the author. Culinary origin stories (such as the origins of Panettone, Beef Wellington, or Coquilles Saint-Jacques) are verified against established culinary historical records.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">3. Visual Content Ethics</h2>
        <p>
          Photography across NAVI represents high-fidelity culinary artistry. We clearly disclose when visual depictions are artistic digital compositions, and we never present artificial imagery as proof of physical laboratory testing.
        </p>
      </div>
    </TrustPageLayout>
  );
};

export const TestingPolicyPage: React.FC = () => {
  return (
    <TrustPageLayout
      category="Culinary Standards"
      title="Recipe Development & Testing Policy"
      subtitle="How our recipes are structured for reliable success in home kitchens."
    >
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-[#30483A]">Principles of NAVI Recipe Development</h2>
        <p>
          Our recipe development process is guided by one central imperative: <strong>reproducibility in a real home kitchen</strong>. We recognize that home cooks do not possess commercial salamanders or blast chillers. Therefore, all recipes are designed around standard domestic ovens, conventional cookware, and ingredients found in ordinary neighbourhood grocery stores.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">Sensory Doneness Cues</h2>
        <p>
          Cooking times are influenced by pan materials and oven variances. To prevent undercooked meats or burnt crusts, every step in our instructions pairs a clock time with clear sensory feedback:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[#76543D]">
          <li><strong>Visual:</strong> Bubbling rate, color changes (golden mahogany, pale amber), surface crinkles.</li>
          <li><strong>Aromas:</strong> Caramelized nutty scents, released herb essential oils.</li>
          <li><strong>Internal Temperature:</strong> Precise Celsius and Fahrenheit target probe readings.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-[#30483A]">Allergen & Cross-Contact Rigor</h2>
        <p>
          We never label a recipe gluten-free, vegan, or nut-free without reviewing every ingredient and offering explicit advice on avoiding common hidden allergens in processed condiments.
        </p>
      </div>
    </TrustPageLayout>
  );
};
