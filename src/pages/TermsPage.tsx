import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-4 lg:pt-40 lg:pb-6 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Terms of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Service
              </span>
            </h1>
            <p className="text-xl text-cool-600">
              Last updated January 05, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-4 lg:py-6 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Agreement Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Agreement to Our Legal Terms</h2>
              <p className="text-cool-600 mb-4">
                We are <strong>Brandcodes</strong> ('<strong>Company</strong>', '<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), a company registered in Singapore at 13 Computing Dr, Singapore 117417.
              </p>
              <p className="text-cool-600 mb-4">
                We operate the website <a href="https://brandcodes.io" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-brand-700">https://brandcodes.io</a> (the '<strong>Site</strong>'), as well as any other related products and services that refer or link to these legal terms (the '<strong>Legal Terms</strong>') (collectively, the '<strong>Services</strong>').
              </p>
              <p className="text-cool-600 mb-4">
                BrandCodes is a GS1-compliant digital linking platform that converts product identifiers like GTINs into dynamic QR codes and web links for physical products. It allows brands and manufacturers to connect any package to context-aware digital experiences and up-to-date product information for consumers, retailers, and supply-chain partners.
              </p>
              <p className="text-cool-600 mb-4">
                You can contact us by phone at 90353055, email at <a href="mailto:info@brandcodes.io" className="text-brand-500 hover:text-brand-700">info@brandcodes.io</a>, or by mail to 13 Computing Dr, Singapore 117417, Singapore.
              </p>
              <p className="text-cool-600 mb-4">
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('<strong>you</strong>'), and Brandcodes, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
              </p>
              <p className="text-cool-600 mb-4">
                We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by <a href="mailto:info@brandcodes.io" className="text-brand-500 hover:text-brand-700">info@brandcodes.io</a>, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
              </p>
              <p className="text-cool-600">
                All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-brand-50 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Table of Contents</h2>
              <ol className="list-decimal pl-6 text-brand-500 space-y-2">
                <li><a href="#services" className="hover:text-brand-700">OUR SERVICES</a></li>
                <li><a href="#ip" className="hover:text-brand-700">INTELLECTUAL PROPERTY RIGHTS</a></li>
                <li><a href="#userreps" className="hover:text-brand-700">USER REPRESENTATIONS</a></li>
                <li><a href="#userreg" className="hover:text-brand-700">USER REGISTRATION</a></li>
                <li><a href="#purchases" className="hover:text-brand-700">PURCHASES AND PAYMENT</a></li>
                <li><a href="#subscriptions" className="hover:text-brand-700">SUBSCRIPTIONS</a></li>
                <li><a href="#prohibited" className="hover:text-brand-700">PROHIBITED ACTIVITIES</a></li>
                <li><a href="#ugc" className="hover:text-brand-700">USER GENERATED CONTRIBUTIONS</a></li>
                <li><a href="#license" className="hover:text-brand-700">CONTRIBUTION LICENCE</a></li>
                <li><a href="#socialmedia" className="hover:text-brand-700">SOCIAL MEDIA</a></li>
                <li><a href="#thirdparty" className="hover:text-brand-700">THIRD-PARTY WEBSITES AND CONTENT</a></li>
                <li><a href="#sitemanage" className="hover:text-brand-700">SERVICES MANAGEMENT</a></li>
                <li><a href="#ppyes" className="hover:text-brand-700">PRIVACY POLICY</a></li>
                <li><a href="#copyrightyes" className="hover:text-brand-700">COPYRIGHT INFRINGEMENTS</a></li>
                <li><a href="#terms" className="hover:text-brand-700">TERM AND TERMINATION</a></li>
                <li><a href="#modifications" className="hover:text-brand-700">MODIFICATIONS AND INTERRUPTIONS</a></li>
                <li><a href="#law" className="hover:text-brand-700">GOVERNING LAW</a></li>
                <li><a href="#disputes" className="hover:text-brand-700">DISPUTE RESOLUTION</a></li>
                <li><a href="#corrections" className="hover:text-brand-700">CORRECTIONS</a></li>
                <li><a href="#disclaimer" className="hover:text-brand-700">DISCLAIMER</a></li>
                <li><a href="#liability" className="hover:text-brand-700">LIMITATIONS OF LIABILITY</a></li>
                <li><a href="#indemnification" className="hover:text-brand-700">INDEMNIFICATION</a></li>
                <li><a href="#userdata" className="hover:text-brand-700">USER DATA</a></li>
                <li><a href="#electronic" className="hover:text-brand-700">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
                <li><a href="#california" className="hover:text-brand-700">CALIFORNIA USERS AND RESIDENTS</a></li>
                <li><a href="#misc" className="hover:text-brand-700">MISCELLANEOUS</a></li>
                <li><a href="#contact" className="hover:text-brand-700">CONTACT US</a></li>
              </ol>
            </div>

            {/* Section 1 */}
            <div id="services" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">1. Our Services</h2>
              <p className="text-cool-600 mb-4">
                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </p>
              <p className="text-cool-600">
                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
            </div>

            {/* Section 2 */}
            <div id="ip" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">2. Intellectual Property Rights</h2>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Our intellectual property</h3>
              <p className="text-cool-600 mb-4">
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').
              </p>
              <p className="text-cool-600 mb-4">
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
              </p>
              <p className="text-cool-600 mb-4">
                The Content and Marks are provided in or through the Services 'AS IS' for your internal business purpose only.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Your use of our Services</h3>
              <p className="text-cool-600 mb-4">
                Subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable licence to:
              </p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2 mb-4">
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
              </ul>
              <p className="text-cool-600">
                solely for your internal business purpose.
              </p>
            </div>

            {/* Section 3 */}
            <div id="userreps" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">3. User Representations</h2>
              <p className="text-cool-600 mb-4">
                By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (5) you will not access the Services through automated or non-human means; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
              </p>
              <p className="text-cool-600">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
              </p>
            </div>

            {/* Section 4 */}
            <div id="userreg" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">4. User Registration</h2>
              <p className="text-cool-600">
                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
              </p>
            </div>

            {/* Section 5 */}
            <div id="purchases" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">5. Purchases and Payment</h2>
              <p className="text-cool-600 mb-4">
                We accept the following forms of payment: Visa, Mastercard, American Express, and PayPal.
              </p>
              <p className="text-cool-600 mb-4">
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
              </p>
              <p className="text-cool-600">
                Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
              </p>
            </div>

            {/* Section 6 */}
            <div id="subscriptions" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">6. Subscriptions</h2>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Billing and Renewal</h3>
              <p className="text-cool-600 mb-4">
                Your subscription will continue and automatically renew unless cancelled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Cancellation</h3>
              <p className="text-cool-600 mb-4">
                You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Fee Changes</h3>
              <p className="text-cool-600">
                We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
              </p>
            </div>

            {/* Section 7 */}
            <div id="prohibited" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">7. Prohibited Activities</h2>
              <p className="text-cool-600 mb-4">
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-cool-600 mb-4">As a user of the Services, you agree not to:</p>
              <ul className="list-disc pl-6 text-cool-600 space-y-2">
                <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
                <li>Engage in unauthorized framing of or linking to the Services</li>
                <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
                <li>Delete the copyright or other proprietary rights notice from any Content</li>
                <li>Attempt to impersonate another user or person or use the username of another user</li>
                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services</li>
                <li>Sell or otherwise transfer your profile</li>
                <li>Use the Services as part of any effort to compete with us or otherwise use the Services for any revenue-generating endeavor or commercial enterprise</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div id="ugc" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">8. User Generated Contributions</h2>
              <p className="text-cool-600 mb-4">
                The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services.
              </p>
              <p className="text-cool-600">
                Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary.
              </p>
            </div>

            {/* Section 9 */}
            <div id="license" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">9. Contribution Licence</h2>
              <p className="text-cool-600 mb-4">
                By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and licence to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt, and distribute such Contributions for any purpose.
              </p>
              <p className="text-cool-600">
                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions.
              </p>
            </div>

            {/* Section 10 */}
            <div id="socialmedia" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">10. Social Media</h2>
              <p className="text-cool-600">
                As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a 'Third-Party Account'). You acknowledge that you may be able to access and use additional features and content on the Services based on your Third-Party Account(s).
              </p>
            </div>

            {/* Section 11 */}
            <div id="thirdparty" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">11. Third-Party Websites and Content</h2>
              <p className="text-cool-600 mb-4">
                The Services may contain (or you may be sent via the Site) links to other websites ('Third-Party Websites') as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ('Third-Party Content').
              </p>
              <p className="text-cool-600">
                We are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
              </p>
            </div>

            {/* Section 12 */}
            <div id="sitemanage" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">12. Services Management</h2>
              <p className="text-cool-600">
                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms; (3) refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
              </p>
            </div>

            {/* Section 13 */}
            <div id="ppyes" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">13. Privacy Policy</h2>
              <p className="text-cool-600 mb-4">
                We care about data privacy and security. Please review our Privacy Policy: <Link to="/privacy" className="text-brand-500 hover:text-brand-700">Privacy Policy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.
              </p>
              <p className="text-cool-600">
                Please be advised the Services are hosted in Singapore. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Singapore, then through your continued use of the Services, you are transferring your data to Singapore, and you expressly consent to have your data transferred to and processed in Singapore.
              </p>
            </div>

            {/* Section 14 */}
            <div id="copyrightyes" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">14. Copyright Infringements</h2>
              <p className="text-cool-600">
                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a 'Notification'). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification.
              </p>
            </div>

            {/* Section 15 */}
            <div id="terms" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">15. Term and Termination</h2>
              <p className="text-cool-600 mb-4">
                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
              </p>
              <p className="text-cool-600">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.
              </p>
            </div>

            {/* Section 16 */}
            <div id="modifications" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">16. Modifications and Interruptions</h2>
              <p className="text-cool-600 mb-4">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services.
              </p>
              <p className="text-cool-600">
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.
              </p>
            </div>

            {/* Section 17 */}
            <div id="law" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">17. Governing Law</h2>
              <p className="text-cool-600">
                These Legal Terms shall be governed by and defined following the laws of Singapore. Brandcodes and yourself irrevocably consent that the courts of Singapore shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
              </p>
            </div>

            {/* Section 18 */}
            <div id="disputes" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">18. Dispute Resolution</h2>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Informal Negotiations</h3>
              <p className="text-cool-600 mb-4">
                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms, the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Binding Arbitration</h3>
              <p className="text-cool-600 mb-4">
                Any dispute arising out of or in connection with these Legal Terms shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber according to the Rules of this ICAC.
              </p>
              <h3 className="text-2xl font-semibold text-navy-800 mb-4">Restrictions</h3>
              <p className="text-cool-600">
                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, no arbitration shall be joined with any other proceeding.
              </p>
            </div>

            {/* Section 19 */}
            <div id="corrections" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">19. Corrections</h2>
              <p className="text-cool-600">
                There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
              </p>
            </div>

            {/* Section 20 */}
            <div id="disclaimer" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">20. Disclaimer</h2>
              <p className="text-cool-600">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            {/* Section 21 */}
            <div id="liability" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">21. Limitations of Liability</h2>
              <p className="text-cool-600">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>

            {/* Section 22 */}
            <div id="indemnification" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">22. Indemnification</h2>
              <p className="text-cool-600">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party.
              </p>
            </div>

            {/* Section 23 */}
            <div id="userdata" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">23. User Data</h2>
              <p className="text-cool-600">
                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.
              </p>
            </div>

            {/* Section 24 */}
            <div id="electronic" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">24. Electronic Communications, Transactions, and Signatures</h2>
              <p className="text-cool-600">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.
              </p>
            </div>

            {/* Section 25 */}
            <div id="california" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">25. California Users and Residents</h2>
              <p className="text-cool-600">
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
              </p>
            </div>

            {/* Section 26 */}
            <div id="misc" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">26. Miscellaneous</h2>
              <p className="text-cool-600 mb-4">
                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
              </p>
              <p className="text-cool-600">
                These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
              </p>
            </div>

            {/* Section 27 */}
            <div id="contact" className="mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">27. Contact Us</h2>
              <p className="text-cool-600 mb-4">
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              </p>
              <div className="bg-cool-50 rounded-lg p-6">
                <p className="text-cool-700 font-semibold">Brandcodes</p>
                <p className="text-cool-600">13 Computing Dr</p>
                <p className="text-cool-600">Singapore 117417</p>
                <p className="text-cool-600">Singapore</p>
                <p className="text-cool-600 mt-2">Phone: 90353055</p>
                <p className="text-cool-600">
                  Email: <a href="mailto:info@brandcodes.io" className="text-brand-500 hover:text-brand-700">info@brandcodes.io</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
