import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Braces,
  Building2,
  Check,
  ExternalLink,
  FileCode2,
  Globe2,
  Hash,
  Info,
  Package,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Tag,
  Truck,
  UserRound,
  Zap,
} from 'lucide-react';

const anatomy = [
  {
    value: 'https://id.gs1.org',
    label: 'Domain',
    identifier: 'Web address',
    description: 'Identifies who controls the URI. id.gs1.org is the GS1 reference domain; brands can also use their own domain.',
    tone: 'bg-navy-900 text-white',
  },
  {
    value: '/01/09520123456788',
    label: 'GTIN',
    identifier: 'AI (01) · Global Trade Item Number',
    description: 'The primary identification key. It identifies the trade item and is expressed as a 14-digit value in the URI.',
    tone: 'bg-brand-500 text-white',
  },
  {
    value: '/10/ABC1',
    label: 'Batch or lot',
    identifier: 'AI (10) · Batch/Lot Number',
    description: 'A key qualifier that narrows the GTIN to a specific production batch or lot.',
    tone: 'bg-accent-500 text-white',
  },
  {
    value: '/21/12345',
    label: 'Serial number',
    identifier: 'AI (21) · Serial Number',
    description: 'A key qualifier that identifies one individual item within the product and batch.',
    tone: 'bg-purple-600 text-white',
  },
  {
    value: '?17=180426',
    label: 'Expiration date',
    identifier: 'AI (17) · Expiration Date',
    description: 'A data attribute in the query string. The value uses the GS1 YYMMDD date format—in this example, 26 April 2018.',
    tone: 'bg-emerald-600 text-white',
  },
];

const applicationIdentifierGroups = [
  {
    title: 'Identification keys',
    description: 'Identify the main entity the URI is about.',
    icon: Hash,
    items: [
      { ai: '00', name: 'SSCC', detail: 'Logistic unit' },
      { ai: '414', name: 'GLN', detail: 'Physical location' },
      { ai: '8003', name: 'GRAI', detail: 'Returnable asset' },
      { ai: '8004', name: 'GIAI', detail: 'Individual asset' },
    ],
  },
  {
    title: 'Key qualifiers',
    description: 'Make a primary identity more specific.',
    icon: Tag,
    items: [
      { ai: '10', name: 'Batch/Lot', detail: 'Production grouping' },
      { ai: '21', name: 'Serial Number', detail: 'Individual item' },
      { ai: '22', name: 'Consumer Product Variant', detail: 'Product variant' },
      { ai: '254', name: 'GLN Extension', detail: 'Location subdivision' },
    ],
  },
  {
    title: 'Data attributes',
    description: 'Describe the identified entity without changing its identity.',
    icon: Braces,
    items: [
      { ai: '11', name: 'Production Date', detail: 'When produced' },
      { ai: '15', name: 'Best Before Date', detail: 'Quality date' },
      { ai: '17', name: 'Expiration Date', detail: 'Use-by date' },
      { ai: '310n', name: 'Net Weight', detail: 'Weight in kilograms' },
    ],
  },
];

const buildingBlocks = [
  {
    icon: Package,
    number: '01',
    title: 'Primary identification key',
    description: 'Identifies the thing the URI is about. For a trade item, this is usually a GTIN using AI (01).',
    example: '/01/09520123456788',
    note: 'GTIN values are always written as 14 digits in new implementations.',
  },
  {
    icon: Tag,
    number: '10, 21',
    title: 'Key qualifiers',
    description: 'Narrow the identity from a product class to a batch, variant, or individual serialized item.',
    example: '/10/ABC1/21/12345',
    note: 'Qualifiers belong in the path and must follow the order defined by GS1.',
  },
  {
    icon: Braces,
    number: '17',
    title: 'Data attributes',
    description: 'Describe the identified thing without changing its identity, such as an expiry date or net weight.',
    example: '?17=180426',
    note: 'Attributes belong in the query string as AI=value pairs.',
  },
];

const formats = [
  {
    icon: ShieldCheck,
    code: 'FORMAT_01',
    title: 'Canonical URI',
    badge: 'Reference form',
    uri: 'https://id.gs1.org/01/09520123456788/10/ABC123',
    description: 'The unique, normalized reference form for the same GS1-identified thing. It uses the GS1 reference domain and numeric Application Identifiers.',
    points: ['HTTPS and id.gs1.org', '14-digit GTIN', 'No trailing slash'],
  },
  {
    icon: Globe2,
    code: 'FORMAT_02',
    title: 'Custom-domain URI',
    badge: 'Brand controlled',
    uri: 'https://brand.example/01/09520123456788/10/ABC123',
    description: 'A conformant URI can use a brand-owned domain and may include a custom path before the GS1 identifier.',
    points: ['Your domain and governance', 'Same GS1 path structure', 'Valid, but not canonical'],
  },
  {
    icon: Zap,
    code: 'FORMAT_03',
    title: 'Compressed URI',
    badge: 'Smaller symbol',
    uri: 'https://brand.example/AQnYJ7...',
    description: 'A compact representation can reduce URI length and QR symbol size while preserving the domain and recoverable GS1 data.',
    points: ['Useful for dense payloads', 'Decompressible without lookup', 'Defined by a separate GS1 standard'],
  },
];

const examples = [
  { use: 'Product', identity: 'GTIN', uri: 'https://id.gs1.org/01/09520123456788' },
  { use: 'Product batch', identity: 'GTIN + batch/lot', uri: 'https://id.gs1.org/01/09520123456788/10/ABC123' },
  { use: 'Individual item', identity: 'GTIN + serial', uri: 'https://id.gs1.org/01/09520123456788/21/12345' },
  { use: 'Item with expiry', identity: 'GTIN + batch + serial + expiry', uri: 'https://id.gs1.org/01/09520123456788/10/ABC1/21/12345?17=180426' },
  { use: 'Logistics unit', identity: 'SSCC', uri: 'https://id.gs1.org/00/195201234567891232' },
  { use: 'Physical location', identity: 'GLN', uri: 'https://id.gs1.org/414/9520123456788' },
];

const stakeholderBenefits = [
  {
    icon: Building2,
    stakeholder: 'Brands & manufacturers',
    outcome: 'One persistent identity across a product’s lifecycle',
    benefit: 'Update product content, support, campaigns, and compliance information without reprinting the code or changing the product identity.',
  },
  {
    icon: ShoppingCart,
    stakeholder: 'Retailers',
    outcome: 'Richer data from the same on-pack code',
    benefit: 'Connect checkout, inventory, product details, and digital experiences through identifiers their systems already understand.',
  },
  {
    icon: Truck,
    stakeholder: 'Supply-chain teams',
    outcome: 'More precise traceability',
    benefit: 'Use batch, serial, and expiry qualifiers to identify exactly which products moved through each checkpoint or require action.',
  },
  {
    icon: UserRound,
    stakeholder: 'Consumers',
    outcome: 'Useful information from a familiar scan',
    benefit: 'Open instructions, provenance, allergens, authenticity information, recycling guidance, or support with a standard smartphone camera.',
  },
  {
    icon: Scale,
    stakeholder: 'Regulators & industry',
    outcome: 'A shared, interoperable language',
    benefit: 'Improve data consistency across organizations, support targeted recalls, and reduce dependence on proprietary identifier formats.',
  },
];

export default function GS1URIFormatsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.04]" />
        <div className="absolute top-28 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-300/40 hidden lg:block" />
        <div className="absolute top-28 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-300/40 hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block font-mono text-[11px] text-brand-500 tracking-wider mb-4 px-3 py-1 bg-brand-100 rounded-full">GS1_URI_FORMATS</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              How product identity becomes a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">web address</span>
            </h1>
            <p className="text-xl text-cool-600 max-w-3xl mx-auto mb-8">
              GS1 Digital Link URI syntax gives products, locations, assets, and shipments a consistent web-friendly identity. Here is how to read and construct it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="#anatomy" className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition">
                Explore the anatomy <ArrowRight size={18} className="ml-2" />
              </a>
              <Link to="/barcodes-explained" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg border border-cool-200 hover:border-brand-300 transition">
                Start with 2D barcodes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="anatomy" className="py-16 lg:py-24 bg-white relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">SEC_01 — URI ANATOMY</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Read a GS1 Digital Link URI, part by part</h2>
          </div>
          <div className="max-w-6xl mx-auto bg-navy-950 rounded-2xl p-5 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-qr-grid-white opacity-[0.03]" />
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {anatomy.map((part, index) => (
                <div key={part.label + index} className="flex flex-col">
                  <code className={`${part.tone} flex items-center px-3 py-3 rounded-lg font-mono text-xs break-all min-h-14 mb-3`}>{part.value}</code>
                  <div className="border border-white/10 bg-white/5 rounded-lg p-4 flex-1">
                    <span className="font-mono text-[10px] text-brand-300">PART_{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-white font-semibold mt-2">{part.label}</p>
                    <p className="text-brand-200 text-[11px] font-mono mt-1 min-h-8">{part.identifier}</p>
                    <p className="text-navy-200 text-xs leading-relaxed mt-3">{part.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8 flex items-start gap-3 bg-brand-50 border border-brand-200 rounded-xl p-5">
            <Info className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
            <p className="text-cool-700">This example combines a domain with four commonly used GS1 Application Identifiers. The path expresses identity from broad to specific, while each AI—such as 01, 10, 21, or 17—defines the meaning and format of the value that follows. Many other GS1 Application Identifiers can also be used when permitted by the standard.</p>
          </div>
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">AI_REFERENCE — MORE EXAMPLES</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">More Application Identifiers you may encounter</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {applicationIdentifierGroups.map((group) => (
                <div key={group.title} className="bg-cool-50 border border-cool-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-100 border border-brand-200 rounded-lg flex items-center justify-center"><group.icon className="w-5 h-5 text-brand-500" /></div>
                    <h4 className="text-lg text-navy-900">{group.title}</h4>
                  </div>
                  <p className="text-sm text-cool-500 mb-5 min-h-10">{group.description}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item.ai} className="grid grid-cols-[3.5rem_1fr] gap-3 bg-white border border-cool-200 rounded-lg p-3">
                        <code className="text-brand-600 font-semibold">({item.ai})</code>
                        <div><p className="text-sm font-semibold text-navy-900">{item.name}</p><p className="text-xs text-cool-500 mt-0.5">{item.detail}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">SEC_02 — BUILDING BLOCKS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Identity in the path. Attributes in the query.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {buildingBlocks.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-white rounded-xl p-6 border border-cool-200 relative overflow-hidden">
                <span className="font-mono text-[10px] text-cool-400">BLOCK_{String(index + 1).padStart(2, '0')} · AI {item.number}</span>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center my-4"><item.icon className="w-6 h-6 text-brand-500" /></div>
                <h3 className="text-xl text-navy-900 mb-3">{item.title}</h3>
                <p className="text-cool-600 mb-4">{item.description}</p>
                <code className="block bg-navy-950 text-brand-200 rounded-lg p-3 text-sm overflow-x-auto">{item.example}</code>
                <p className="text-sm text-cool-500 mt-4">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">SEC_03 — FORMAT OPTIONS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Three forms you will encounter</h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">They can identify the same thing, but they serve different operational needs.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {formats.map((format) => (
              <div key={format.title} className="rounded-xl border border-cool-200 p-6 hover:border-brand-300 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center"><format.icon className="w-6 h-6 text-brand-500" /></div>
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full">{format.badge}</span>
                </div>
                <span className="font-mono text-[10px] text-cool-400">{format.code}</span>
                <h3 className="text-xl text-navy-900 mt-1 mb-3">{format.title}</h3>
                <code className="block min-h-20 bg-navy-950 text-brand-200 rounded-lg p-3 text-xs break-all mb-4">{format.uri}</code>
                <p className="text-cool-600 text-sm mb-5">{format.description}</p>
                <ul className="space-y-2">{format.points.map((point) => <li key={point} className="flex items-center text-sm text-cool-700"><Check size={16} className="text-emerald-500 mr-2 shrink-0" />{point}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-white opacity-[0.025]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="font-mono text-[10px] text-brand-300 tracking-wider mb-2 block">SEC_04 — EXAMPLES</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">From product to place</h2>
              <p className="text-navy-200 text-lg mb-6">GS1 Digital Link is not only for GTINs. The primary key in the path tells you what kind of entity the URI identifies.</p>
              <div className="flex items-start gap-3 text-sm text-navy-200 border border-white/10 bg-white/5 rounded-xl p-4">
                <Hash className="text-brand-300 w-5 h-5 shrink-0" />
                <p>The number after each slash is an Application Identifier. For example, 01 means GTIN, 00 means SSCC, and 414 means GLN.</p>
              </div>
            </div>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <div key={example.uri} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-base font-semibold">{example.use}</h3>
                    <span className="text-xs text-brand-200 bg-brand-500/15 px-2.5 py-1 rounded-full self-start">{example.identity}</span>
                  </div>
                  <div className="flex gap-3"><span className="font-mono text-[10px] text-navy-500 pt-1">{String(index + 1).padStart(2, '0')}</span><code className="text-sm text-brand-200 break-all">{example.uri}</code></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.025]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-12">
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">SEC_05 — STAKEHOLDER VALUE</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">One format, value across the ecosystem</h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">A consistent product identity lets every stakeholder use the same code for the outcome they need—without creating disconnected identifiers and experiences.</p>
          </div>
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholderBenefits.map((item, index) => (
              <motion.div key={item.stakeholder} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={`bg-white border border-cool-200 rounded-xl p-6 hover:border-brand-300 hover:shadow-md transition ${index >= 3 ? 'lg:translate-x-1/2' : ''}`}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-brand-100 border border-brand-200 rounded-lg flex items-center justify-center"><item.icon className="w-6 h-6 text-brand-500" /></div>
                  <span className="font-mono text-[10px] text-cool-400">VALUE_{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl text-navy-900 mb-2">{item.stakeholder}</h3>
                <p className="text-sm font-semibold text-brand-600 mb-3">{item.outcome}</p>
                <p className="text-cool-600 text-sm leading-relaxed">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-500 to-accent-500 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="font-mono text-[10px] text-brand-100">NEXT_STEP</span>
                <h2 className="text-3xl sm:text-4xl mt-2 mb-4">Make the format operational</h2>
                <p className="text-brand-50 text-lg max-w-2xl">BrandCodes generates compliant Digital Link URIs, connects them to resolver destinations, and measures what happens after the scan.</p>
              </div>
              <a href="/#contact" className="inline-flex items-center justify-center bg-white text-brand-600 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition whitespace-nowrap">Book a demo <ArrowRight size={18} className="ml-2" /></a>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-cool-200 pt-6 text-sm text-cool-500">
            <p className="flex items-center gap-2"><FileCode2 size={16} /> Based on GS1 Digital Link Standard: URI Syntax, release 1.6.0.</p>
            <a href="https://ref.gs1.org/standards/digital-link/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium">Read the official GS1 standard <ExternalLink size={14} className="ml-1" /></a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
