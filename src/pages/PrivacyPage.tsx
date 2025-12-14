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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Last updated December 13, 2025
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
              <p className="text-lg text-gray-600 mb-4">
                This Privacy Notice for <strong>brandcodes</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Visit our website at <a href="https://brandcodes.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">https://brandcodes.vercel.app/</a> or any website of ours that links to this Privacy Notice</li>
                <li>Download and use our mobile application (brandcodes) or any other application of ours that links to this Privacy Notice</li>
                <li>Use brandcodes. brandcodes is an AI-native plugin that evolves product QR codes into interactive digital experiences, providing auto-generated landing pages, product-specific chatbots, multilingual support, and analytics dashboards for consumer engagement.</li>
                <li>Engage with us in other related ways, including any marketing or events</li>
              </ul>
              <p className="text-lg text-gray-600 mt-4">
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:77jack0105@gmail.com" className="text-indigo-600 hover:text-indigo-800">77jack0105@gmail.com</a>.
              </p>
            </div>

            {/* Summary of Key Points */}
            <div className="bg-indigo-50 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Summary of Key Points</h2>
              <p className="text-gray-700 mb-4 italic">
                This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
              </p>
              <div className="space-y-4 text-gray-700">
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
                  <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <a href="https://app.termly.io/dsar/2f9e40ab-5415-459e-a363-4ff98f41b905" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">data subject access request</a>, or by contacting us.
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 text-indigo-600 space-y-2">
                <li><a href="#infocollect" className="hover:text-indigo-800">WHAT INFORMATION DO WE COLLECT?</a></li>
                <li><a href="#infouse" className="hover:text-indigo-800">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                <li><a href="#legalbases" className="hover:text-indigo-800">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#whoshare" className="hover:text-indigo-800">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                <li><a href="#ai" className="hover:text-indigo-800">DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a></li>
                <li><a href="#sociallogins" className="hover:text-indigo-800">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
                <li><a href="#inforetain" className="hover:text-indigo-800">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                <li><a href="#infosafe" className="hover:text-indigo-800">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                <li><a href="#privacyrights" className="hover:text-indigo-800">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                <li><a href="#DNT" className="hover:text-indigo-800">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                <li><a href="#uslaws" className="hover:text-indigo-800">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                <li><a href="#policyupdates" className="hover:text-indigo-800">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                <li><a href="#contact" className="hover:text-indigo-800">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                <li><a href="#request" className="hover:text-indigo-800">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="infocollect" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">1. What Information Do We Collect?</h2>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Personal information you disclose to us</h3>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We collect personal information that you provide to us.</em>
              </p>
              <p className="text-gray-600 mb-4">
                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
            </div>

            {/* Section 2 */}
            <div id="infouse" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">2. How Do We Process Your Information?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em>
              </p>
              <p className="text-gray-600">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including to facilitate account creation and authentication, to deliver and facilitate delivery of services to the user, and to respond to user inquiries and offer support.
              </p>
            </div>

            {/* Section 3 */}
            <div id="legalbases" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">3. What Legal Bases Do We Rely On To Process Your Personal Information?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</em>
              </p>
              <p className="text-gray-600">
                We may process your information if you have given us specific permission to use your personal information for a specific purpose, or in situations where your permission can be inferred. We may also process your information where it is necessary to comply with our legal obligations.
              </p>
            </div>

            {/* Section 4 */}
            <div id="whoshare" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">4. When And With Whom Do We Share Your Personal Information?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We may share information in specific situations described in this section and/or with specific third parties.</em>
              </p>
              <p className="text-gray-600">
                We may need to share your personal information in certain situations, including with business partners to offer you certain products, services, or promotions, and with third-party vendors, service providers, contractors, or agents who perform services for us.
              </p>
            </div>

            {/* Section 5 */}
            <div id="ai" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">5. Do We Offer Artificial Intelligence-Based Products?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence.</em>
              </p>
              <p className="text-gray-600">
                As part of our Services, we provide AI-powered product pages and chatbots. These AI features help automate customer support and provide personalized product information. The data used to train and improve these AI models is handled in accordance with this Privacy Notice.
              </p>
            </div>

            {/* Section 6 */}
            <div id="sociallogins" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">6. How Do We Handle Your Social Logins?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em>
              </p>
              <p className="text-gray-600">
                Our Services offer you the ability to register and log in using your third-party social media account details. When you choose to do this, we will receive certain profile information about you from your social media provider.
              </p>
            </div>

            {/* Section 7 */}
            <div id="inforetain" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">7. How Long Do We Keep Your Information?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
              </p>
              <p className="text-gray-600">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Section 8 */}
            <div id="infosafe" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">8. How Do We Keep Your Information Safe?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</em>
              </p>
              <p className="text-gray-600">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet can be guaranteed to be 100% secure.
              </p>
            </div>

            {/* Section 9 */}
            <div id="privacyrights" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">9. What Are Your Privacy Rights?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> Depending on your location, you may have certain rights regarding your personal information.</em>
              </p>
              <p className="text-gray-600 mb-4">
                In some regions, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time. In certain circumstances, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction of your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Withdraw your consent</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div id="DNT" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">10. Controls For Do-Not-Track Features</h2>
              <p className="text-gray-600 mb-4">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
              </p>
              <p className="text-gray-600">
                At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
              </p>
            </div>

            {/* Section 11 */}
            <div id="uslaws" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">11. Do United States Residents Have Specific Privacy Rights?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> If you are a resident of certain U.S. states, you may have specific privacy rights under state law.</em>
              </p>
              <p className="text-gray-600">
                Certain U.S. state privacy laws grant residents specific rights with respect to their personal information, including the right to know, right to delete, right to opt-out of certain data processing activities, and the right to non-discrimination.
              </p>
            </div>

            {/* Section 12 */}
            <div id="policyupdates" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">12. Do We Make Updates To This Notice?</h2>
              <p className="text-gray-600 mb-4">
                <em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
              </p>
              <p className="text-gray-600">
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
              </p>
            </div>

            {/* Section 13 */}
            <div id="contact" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">13. How Can You Contact Us About This Notice?</h2>
              <p className="text-gray-600 mb-4">
                If you have questions or comments about this notice, you may email us at <a href="mailto:77jack0105@gmail.com" className="text-indigo-600 hover:text-indigo-800">77jack0105@gmail.com</a>.
              </p>
            </div>

            {/* Section 14 */}
            <div id="request" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">14. How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
              <p className="text-gray-600 mb-4">
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request by visiting <a href="https://app.termly.io/dsar/2f9e40ab-5415-459e-a363-4ff98f41b905" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">our data request form</a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
