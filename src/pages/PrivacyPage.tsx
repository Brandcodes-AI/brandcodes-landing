import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Policy
              </span>
            </h1>
            <p className="text-xl text-cool-600">
              Last updated January 05, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: -150 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-cool-600 mb-4">
                This Privacy Notice for <strong>brandcodes</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2">
                <li>Visit our website at <a href="https://brandcodes.io" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">https://brandcodes.io</a> or any website of ours that links to this Privacy Notice</li>
                <li>Use Brandcodes. BrandCodes is a GS1-compliant digital linking platform that turns standard product identifiers like GTINs into smart, dynamic QR codes and web links for physical products. It enables brands and manufacturers to connect any package or item to rich, context-aware digital experiences for consumers, retailers, and supply-chain partners.
                  <br /><br />
                  BrandCodes provides tools to:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Generate and manage QR codes and 2D barcodes that follow GS1 Digital Link syntax, so they work across global retail and logistics systems.</li>
                    <li>Route a single code to different URLs based on context (device, language, location, user type, campaign, or lifecycle stage), without reprinting packaging.</li>
                    <li>Centralize product data so that ingredient lists, certifications, provenance, manuals, warranty info, and marketing content are always up to date at the same link.</li>
                    <li>Help smaller and mid-sized brands adopt next-generation barcodes by simplifying technical standards and providing an easy dashboard instead of custom engineering.</li>
                  </ul>
                  <br />
                  In short, BrandCodes helps brands bridge the gap between their packaging and their digital presence, using standards-based QR codes to improve transparency, engagement, and traceability for every product.
                </li>
                <li>Engage with us in other related ways, including any marketing or events</li>
              </ul>
              <p className="text-lg text-cool-600 mt-4">
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@brandcodes.io" className="text-brand-500 hover:text-brand-700">info@brandcodes.io</a>.
              </p>
            </div>

            {/* Summary of Key Points */}
            <div className="bg-brand-50 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Summary of Key Points</h2>
              <p className="text-cool-700 mb-4 italic">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>
              <div className="space-y-4 text-cool-700">
                <div>
                  <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
                </div>
                <div>
                  <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
                </div>
                <div>
                  <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                </div>
                <div>
                  <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                </div>
                <div>
                  <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.
                </div>
                <div>
                  <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                </div>
                <div>
                  <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                </div>
                <div>
                  <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <a href="https://app.termly.io/dsar/b7bb541b-75fd-4a00-b3b5-bdd040a61d68" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">data subject access request</a>, or by contacting us.
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 text-brand-500 space-y-2">
                <li><a href="#infocollect" className="hover:text-brand-700">WHAT INFORMATION DO WE COLLECT?</a></li>
                <li><a href="#infouse" className="hover:text-brand-700">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                <li><a href="#whoshare" className="hover:text-brand-700">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#cookies" className="hover:text-brand-700">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                <li><a href="#ai" className="hover:text-brand-700">DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a></li>
                <li><a href="#sociallogins" className="hover:text-brand-700">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
                <li><a href="#inforetain" className="hover:text-brand-700">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                <li><a href="#infosafe" className="hover:text-brand-700">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                <li><a href="#privacyrights" className="hover:text-brand-700">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                <li><a href="#DNT" className="hover:text-brand-700">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                <li><a href="#policyupdates" className="hover:text-brand-700">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                <li><a href="#contact" className="hover:text-brand-700">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                <li><a href="#request" className="hover:text-brand-700">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="infocollect" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">1. What Information Do We Collect?</h2>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Personal information you disclose to us</h3>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We collect personal information that you provide to us.</em>
              </p>
              <p className="text-cool-600 mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              <p className="text-cool-600 mb-4">
                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2 mb-4">
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
                <li>mailing addresses</li>
                <li>job titles</li>
                <li>usernames</li>
                <li>passwords</li>
                <li>contact or authentication data</li>
                <li>billing addresses</li>
                <li>debit/credit card numbers</li>
              </ul>
              <p className="text-cool-600 mb-4">
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>
              <p className="text-cool-600 mb-4">
                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe, Paypal, and Hitpay. You may find their privacy notice link(s) here: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">https://stripe.com/privacy</a>, <a href="https://www.paypal.com/us/legalhub/paypal/privacy-full" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">https://www.paypal.com/us/legalhub/paypal/privacy-full</a>, and <a href="https://hitpayapp.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">https://hitpayapp.com/privacy-policy</a>.
              </p>
              <p className="text-cool-600 mb-4">
                <strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "<a href="#sociallogins" className="text-brand-500 hover:text-brand-700">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>" below.
              </p>
              <p className="text-cool-600 mb-4">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4 mt-8">Information automatically collected</h3>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
              </p>
              <p className="text-cool-600 mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p className="text-cool-600 mb-4">
                Like many businesses, we also collect information through cookies and similar technologies.
              </p>
              <p className="text-cool-600 mb-4">
                The information we collect includes:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2 mb-4">
                <li><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
                <li><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                <li><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
              </ul>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4 mt-8">Google API</h3>
              <p className="text-cool-600 mb-4">
                Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">Limited Use requirements</a>.
              </p>
            </div>

            {/* Section 2 */}
            <div id="infouse" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">2. How Do We Process Your Information?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em>
              </p>
              <p className="text-cool-600 mb-4">
                <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2">
                <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
                <li><strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                <li><strong>To evaluate and improve our Services, products, marketing, and your experience.</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
                <li><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                <li><strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="whoshare" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">3. When And With Whom Do We Share Your Personal Information?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We may share information in specific situations described in this section and/or with specific third parties.</em>
              </p>
              <p className="text-cool-600 mb-4">
                We may need to share your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div id="cookies" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">4. Do We Use Cookies And Other Tracking Technologies?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</em>
              </p>
              <p className="text-cool-600 mb-4">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
              </p>
              <p className="text-cool-600 mb-4">
                We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.
              </p>
              <p className="text-cool-600">
                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </div>

            {/* Section 5 */}
            <div id="ai" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">5. Do We Offer Artificial Intelligence-Based Products?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em>
              </p>
              <p className="text-cool-600 mb-4">
                As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
              </p>
              <p className="text-cool-600 mb-4">
                <strong>Use of AI Technologies</strong>
              </p>
              <p className="text-cool-600 mb-4">
                We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "<a href="#whoshare" className="text-brand-500 hover:text-brand-700">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
              </p>
              <p className="text-cool-600 mb-4">
                <strong>Our AI Products</strong>
              </p>
              <p className="text-cool-600 mb-4">
                Our AI Products are designed for the following functions:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2 mb-4">
                <li>AI bots</li>
                <li>AI automation</li>
                <li>AI search</li>
                <li>AI translation</li>
                <li>AI applications</li>
              </ul>
              <p className="text-cool-600 mb-4">
                <strong>How We Process Your Data Using AI</strong>
              </p>
              <p className="text-cool-600">
                All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
              </p>
            </div>

            {/* Section 6 */}
            <div id="sociallogins" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">6. How Do We Handle Your Social Logins?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em>
              </p>
              <p className="text-cool-600 mb-4">
                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
              </p>
              <p className="text-cool-600">
                We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
              </p>
            </div>

            {/* Section 7 */}
            <div id="inforetain" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">7. How Long Do We Keep Your Information?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
              </p>
              <p className="text-cool-600 mb-4">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
              </p>
              <p className="text-cool-600">
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </div>

            {/* Section 8 */}
            <div id="infosafe" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">8. How Do We Keep Your Information Safe?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</em>
              </p>
              <p className="text-cool-600">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </div>

            {/* Section 9 */}
            <div id="privacyrights" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">9. What Are Your Privacy Rights?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
              </p>
              <p className="text-cool-600 mb-4">
                <strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#contact" className="text-brand-500 hover:text-brand-700">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
              </p>
              <p className="text-cool-600 mb-4">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Account Information</h3>
              <p className="text-cool-600 mb-4">
                If you would at any time like to review or change the information in your account or terminate your account, you can:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2 mb-4">
                <li>Log in to your account settings and update your user account.</li>
              </ul>
              <p className="text-cool-600 mb-4">
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
              </p>
              <p className="text-cool-600 mb-4">
                <strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
              </p>
              <p className="text-cool-600">
                If you have questions or comments about your privacy rights, you may email us at <a href="mailto:info@brandcodes.io" className="text-brand-500 hover:text-brand-700">info@brandcodes.io</a>.
              </p>
            </div>

            {/* Section 10 */}
            <div id="DNT" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">10. Controls For Do-Not-Track Features</h2>
              <p className="text-cool-600">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
              </p>
            </div>

            {/* Section 11 */}
            <div id="policyupdates" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">11. Do We Make Updates To This Notice?</h2>
              <p className="text-cool-600 mb-4">
                <em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
              </p>
              <p className="text-cool-600">
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </div>

            {/* Section 12 */}
            <div id="contact" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">12. How Can You Contact Us About This Notice?</h2>
              <p className="text-cool-600 mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:j.choi@u.nus.edu" className="text-brand-500 hover:text-brand-700">j.choi@u.nus.edu</a> or contact us by post at:
              </p>
              <p className="text-cool-600">
                Brandcodes<br />
                13 Computing Dr<br />
                Singapore 117417<br />
                Singapore
              </p>
            </div>

            {/* Section 13 */}
            <div id="request" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">13. How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
              <p className="text-cool-600">
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/dsar/b7bb541b-75fd-4a00-b3b5-bdd040a61d68" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">data subject access request</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

