import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Scan,
  X,
  Check,
  QrCode,
  Grid3x3,
  ShieldCheck,
  Package,
  Calendar,
  Hash,
  MapPin,
  ExternalLink,
  Pill,
  Leaf,
  ShoppingCart,
  Sparkles,
  Cpu,
  ArrowRight,
  RefreshCw,
  Factory,
  Hospital,
  User,
  Scale,
  FileBarChart,
  Globe,
  Layers,
} from 'lucide-react';

/* ──────────────────────────────────────────
   DATA
   ────────────────────────────────────────── */

const oneDLimitations = [
  { capability: 'Product identification', supported: true },
  { capability: 'Batch or expiry date', supported: false },
  { capability: 'Unique item identity', supported: false },
  { capability: 'Dynamic information', supported: false },
];

const barcodeTypes = [
  {
    name: 'QR Code',
    icon: QrCode,
    purpose: 'General purpose, URL-friendly',
    use: 'Marketing, website links, payments',
    highlight: false,
  },
  {
    name: 'DataMatrix',
    icon: Grid3x3,
    purpose: 'Compact, high density',
    use: 'Small items, electronics, pharma',
    highlight: false,
  },
  {
    name: 'PDF417',
    icon: FileBarChart,
    purpose: 'High-capacity stacked barcode',
    use: 'ID cards, boarding passes, logistics',
    highlight: false,
  },
  {
    name: 'Aztec Code',
    icon: Layers,
    purpose: 'No quiet zone needed, compact',
    use: 'Transport tickets, boarding passes',
    highlight: false,
  },
  {
    name: 'GS1 2D Barcode',
    icon: Globe,
    purpose: 'QR Code following GS1 standards',
    use: 'Consumer-facing packaging, digital links',
    highlight: true,
  },
  {
    name: 'GS1 DataMatrix',
    icon: ShieldCheck,
    purpose: 'DataMatrix following GS1 standards',
    use: 'Healthcare, supply chain, serialization',
    highlight: true,
  },
];

type BarcodeTypeKey = '1D' | 'QR Code' | 'GS1 2D';

const toggleData: Record<
  BarcodeTypeKey,
  {
    capacity: string;
    analogy: string;
    canDo: string[];
    cantDo: string[];
    color: string;
    bgColor: string;
    borderColor: string;
  }
> = {
  '1D': {
    capacity: '~20 characters',
    analogy: 'Like a phone number — identifies someone, nothing more.',
    canDo: ['Product ID (UPC/EAN)'],
    cantDo: ['Batch / expiry', 'Serialization', 'URLs or links', 'Any dynamic data'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  'QR Code': {
    capacity: '~4,000 characters',
    analogy: 'Like a website link — leads to information.',
    canDo: ['URLs and text', 'Larger data payloads', 'Error correction', 'Custom branding & colors'],
    cantDo: ['Structured global standards', 'Supply chain interoperability', 'Serialization per item', 'Batch or expiry tracking'],
    color: 'text-brand-600',
    bgColor: 'bg-brand-50',
    borderColor: 'border-brand-200',
  },
  'GS1 2D': {
    capacity: '~4,000 characters (structured)',
    analogy: 'Like a digital identity — enables services everywhere.',
    canDo: [
      'Product ID (GTIN)',
      'Batch & expiry dates',
      'Unique serial number per item',
      'Full supply chain traceability',
      'Digital Link to online content',
      'Country of origin & certifications',
      'Net weight, count, or volume',
      'Interoperable across all GS1 systems globally',
    ],
    cantDo: [],
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
};

const gs1Capabilities = [
  {
    icon: Package,
    title: 'Product identification (GTIN)',
    description: 'Global Trade Item Number for universal recognition across all markets.',
  },
  {
    icon: Calendar,
    title: 'Batch and expiry',
    description: 'Track manufacturing dates and shelf life for safety and compliance.',
  },
  {
    icon: Hash,
    title: 'Serialization',
    description: 'Unique identifier for each individual item — no two are the same.',
  },
  {
    icon: MapPin,
    title: 'Traceability',
    description: 'Track origin and journey through the entire supply chain.',
  },
  {
    icon: ExternalLink,
    title: 'Digital Link',
    description: 'Connect the physical product to online content and digital services.',
  },
];

const stakeholders = [
  { icon: Factory, label: 'Manufacturer', outcome: 'Track production & batches' },
  { icon: ShoppingCart, label: 'Retailer', outcome: 'Verify authenticity & stock' },
  { icon: Hospital, label: 'Hospital', outcome: 'Check expiry & dosage' },
  { icon: User, label: 'Consumer', outcome: 'Access product info & support' },
  { icon: Scale, label: 'Regulator', outcome: 'Audit compliance & recalls' },
];

const realWorldExamples = [
  {
    icon: Pill,
    industry: 'Pharma',
    challenge: 'Counterfeit drugs endanger patients.',
    solution: 'Verify authenticity and expiry at point of sale with a single scan.',
  },
  {
    icon: Leaf,
    industry: 'Food',
    challenge: 'Recalls are slow and imprecise.',
    solution: 'Trace origin from farm to fork. Pinpoint affected batches instantly.',
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    challenge: 'Consumers want more than a label.',
    solution: 'Deliver product info, sustainability data, and setup guides via scan.',
  },
];

const flowSteps = [
  { label: 'GS1 2D Barcode', sub: 'Physical product' },
  { label: 'Scan', sub: 'Any device' },
  { label: 'GS1 Identifier', sub: 'GTIN + data' },
  { label: 'Resolver', sub: 'Routes by context' },
  { label: 'Destination', sub: 'Right experience' },
];

const howItWorksSteps = [
  {
    number: '01',
    code: 'STEP_01',
    title: 'The Barcode Contains Structured Data',
    description:
      'A GS1 2D barcode encodes standardized data elements — not webpages, not URLs, but structured identity.',
    keyLine: 'The barcode does not contain webpages. It contains identity.',
    fields: [
      { label: 'GTIN', value: '09506000134352', icon: Package },
      { label: 'Batch', value: 'LOT-2024-A19', icon: Hash },
      { label: 'Expiry', value: '2026-02-12', icon: Calendar },
      { label: 'Serial', value: 'SN-00482910', icon: Hash },
    ],
  },
  {
    number: '02',
    code: 'STEP_02',
    title: 'The Resolver Translates Identity',
    description:
      "Like the internet's DNS, a resolver reads the product identity and routes to the correct digital destination based on context.",
    keyLine: 'Same identifier, different outcomes — depending on who is scanning.',
    routes: [
      { scanner: 'Hospital scanner', destination: 'Clinical database', icon: Hospital },
      { scanner: 'Consumer phone', destination: 'Product information page', icon: User },
      { scanner: 'Regulator system', destination: 'Compliance records', icon: Scale },
    ],
  },
  {
    number: '03',
    code: 'STEP_03',
    title: 'Dynamic Outcomes from One Code',
    description:
      'The same barcode produces different results depending on context. The intelligence lives in the network, not in the barcode.',
    keyLine: 'The intelligence lives in the network, not in the barcode itself.',
    outcomes: [
      { who: 'Warehouse', what: 'Inventory verification', icon: Factory },
      { who: 'Pharmacy', what: 'Expiry validation', icon: Pill },
      { who: 'Consumer', what: 'Usage information', icon: User },
      { who: 'Regulator', what: 'Traceability record', icon: Scale },
    ],
  },
];

const futureCapabilities = [
  { icon: Scan, title: 'Supply chain scanning', description: 'Every checkpoint reads the same code.' },
  { icon: User, title: 'Consumer scanning', description: 'Rich product experiences from any phone.' },
  { icon: Cpu, title: 'AI-powered experiences', description: 'Intelligent assistants trained on your products.' },
  { icon: RefreshCw, title: 'Real-time updates', description: 'Dynamic content that evolves after printing.' },
];

/* ──────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────── */

export default function BarcodesExplainedPage() {
  const [selectedType, setSelectedType] = useState<BarcodeTypeKey>('1D');
  const [hasScanned, setHasScanned] = useState(false);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ═══════════════════════════════════════
          SECTION 1 — HOOK
          ═══════════════════════════════════════ */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.03]" />
        <div className="absolute top-28 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-300/40 hidden lg:block" />
        <div className="absolute top-28 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-300/40 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block font-mono text-[11px] text-brand-500 tracking-wider mb-4 px-3 py-1 bg-brand-100 rounded-full">
              BARCODE_EXPLAINED
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              Every product has a barcode.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                Few people know what it can actually do.
              </span>
            </h1>
            <p className="text-xl text-cool-600 max-w-2xl mx-auto">
              Barcodes started as simple identifiers. Today, they can connect physical products
              to entire digital ecosystems. Here's how that evolution happened.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 1 — SEE THE DIFFERENCE
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              SEC_01 — THE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              See the Difference in Action
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              What happens when you scan each type?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* 1D Scan Result */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-orange-300/60" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-orange-300/60" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-orange-300/60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-orange-300/60" />
                <div className="bg-cool-50 rounded-xl p-5 border border-cool-200 h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-cool-400">SCAN_1D</span>
                    <span className="text-xs font-medium text-orange-500 bg-orange-100 px-2 py-0.5 rounded">1D Barcode</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!hasScanned ? (
                        <motion.div
                          key="placeholder-1d"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center text-cool-400"
                        >
                          <div className="w-20 h-14 bg-barcode-lines text-cool-300 mb-3 rounded" />
                          <span className="text-sm">Waiting for scan...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="result-1d"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="w-full"
                        >
                          <div className="bg-white rounded-lg p-4 border border-cool-200 font-mono text-sm">
                            <span className="text-cool-400">Product ID:</span>{' '}
                            <span className="text-navy-900">5901234123457</span>
                          </div>
                          <p className="text-xs text-cool-400 mt-3 text-center">
                            That's it. Just a number. No context, no detail.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* QR Code Scan Result */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-brand-300/60" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-brand-300/60" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-brand-300/60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-brand-300/60" />
                <div className="bg-brand-50 rounded-xl p-5 border border-brand-200 h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-cool-400">SCAN_QR</span>
                    <span className="text-xs font-medium text-brand-600 bg-brand-100 px-2 py-0.5 rounded">QR Code</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!hasScanned ? (
                        <motion.div
                          key="placeholder-qr"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center text-cool-400"
                        >
                          <QrCode className="w-14 h-14 text-brand-200 mb-3" />
                          <span className="text-sm">Waiting for scan...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="result-qr"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                          className="w-full"
                        >
                          <div className="bg-white rounded-lg p-4 border border-brand-200 font-mono text-sm break-all">
                            <span className="text-brand-500">https://example.com/product/12345</span>
                          </div>
                          <p className="text-xs text-cool-400 mt-3 text-center">
                            A link. But no product data, no standard, no interoperability.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* GS1 2D Scan Result */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-green-400/60" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-green-400/60" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-green-400/60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-green-400/60" />
                <div className="bg-green-50 rounded-xl p-5 border border-green-200 h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-cool-400">SCAN_GS1_2D</span>
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">GS1 2D</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!hasScanned ? (
                        <motion.div
                          key="placeholder-gs1"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center text-cool-400"
                        >
                          <div className="w-14 h-14 bg-qr-grid opacity-30 rounded mb-3" />
                          <span className="text-sm">Waiting for scan...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="result-gs1"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="w-full"
                        >
                          <div className="bg-white rounded-lg p-3 border border-green-200 space-y-1.5 text-sm">
                            <div className="flex justify-between">
                              <span className="text-cool-500">Product</span>
                              <span className="text-navy-900 font-medium">Organic Whole Milk 1L</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">GTIN</span>
                              <span className="font-mono text-navy-900 text-xs">09312345678901</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">Batch</span>
                              <span className="font-mono text-navy-900 text-xs">A1923-X</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">Serial</span>
                              <span className="font-mono text-navy-900 text-xs">SN-482910-0037</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">Expiry</span>
                              <span className="text-navy-900 font-medium">12 Feb 2026</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">Origin</span>
                              <span className="text-navy-900 font-medium">Victoria, AU</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">Manufacturer</span>
                              <span className="text-navy-900 font-medium">Greenfield Dairy</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-cool-500">Certified</span>
                              <span className="text-green-600 font-medium">Organic, HACCP</span>
                            </div>
                            <div className="pt-1.5 border-t border-green-100 flex items-center justify-between">
                              <span className="text-brand-500 font-medium text-xs cursor-pointer hover:text-brand-600 transition flex items-center gap-1">
                                Product page <ArrowRight className="w-3 h-3" />
                              </span>
                              <span className="text-brand-500 font-medium text-xs cursor-pointer hover:text-brand-600 transition flex items-center gap-1">
                                Recall check <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setHasScanned(!hasScanned)}
                className="inline-flex items-center justify-center gap-2 w-44 py-3 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors duration-200 cursor-pointer"
              >
                <Scan className="w-5 h-5" />
                {hasScanned ? 'Reset' : 'Scan All'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — THE PROBLEM WITH 1D
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
                SEC_02 — THE LIMITATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                The Problem with 1D Barcodes
              </h2>
              <p className="text-lg text-cool-600 mb-6">
                The barcode you see on most products today is a 1D barcode — a row of vertical lines
                encoding a single number. Think of it like a phone number: it identifies someone,
                but tells you nothing about them.
              </p>
              <p className="text-xl font-semibold text-navy-900 border-l-4 border-orange-400 pl-4">
                A 1D barcode tells you <em>what</em> the product is. Nothing more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-orange-300/60" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-orange-300/60" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-orange-300/60" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-orange-300/60" />

              <div className="bg-cool-50 rounded-2xl p-8 border border-cool-200">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] text-cool-400 tracking-wider">CAPABILITY_CHECK</span>
                  <span className="text-sm text-cool-500">1D Barcode</span>
                </div>
                <table className="w-full">
                  <tbody>
                    {oneDLimitations.map((row, index) => (
                      <motion.tr
                        key={row.capability}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="border-b border-cool-200 last:border-0"
                      >
                        <td className="py-3 text-cool-700">{row.capability}</td>
                        <td className="py-3 text-right">
                          {row.supported ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-green-100 rounded-lg">
                              <Check className="w-4 h-4 text-green-600" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 bg-red-50 rounded-lg">
                              <X className="w-4 h-4 text-red-400" />
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — EVOLUTION TO 2D
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              SEC_03 — THE EVOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              The Evolution to 2D Barcodes
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto mb-6">
              2D barcodes store information in two directions — horizontal and vertical.
              The result: more data, smaller space, more resilience.
            </p>
            <p className="text-xl font-semibold text-navy-900 max-w-2xl mx-auto">
              If a 1D barcode is a <span className="text-orange-500">word</span>,
              a 2D barcode is a <span className="text-brand-500">paragraph</span>.
            </p>
          </motion.div>

          {/* 1D → 2D visual transformation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16"
          >
            {/* 1D representation */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-24 bg-white rounded-xl border border-cool-200 flex items-center justify-center overflow-hidden relative">
                <div className="w-28 h-16 bg-barcode-lines text-navy-900 opacity-80" />
              </div>
              <span className="mt-3 text-sm font-medium text-cool-500">1D Barcode</span>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="w-8 h-8 text-brand-400 rotate-90 sm:rotate-0" />
            </div>

            {/* 2D representation */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-xl border border-brand-200 flex items-center justify-center overflow-hidden relative">
                <div className="w-16 h-16 bg-qr-grid opacity-60" />
                {/* QR finder patterns */}
                <div className="absolute top-2 left-2 w-4 h-4 border-2 border-navy-900 rounded-sm" />
                <div className="absolute top-2 right-2 w-4 h-4 border-2 border-navy-900 rounded-sm" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-navy-900 rounded-sm" />
              </div>
              <span className="mt-3 text-sm font-medium text-brand-500">2D Barcode</span>
            </div>
          </motion.div>

          {/* Common 2D types */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {barcodeTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className={`rounded-xl p-5 border transition relative overflow-hidden group ${type.highlight
                      ? 'bg-green-50 border-green-200 hover:border-green-400 hover:shadow-md'
                      : 'bg-white border-cool-200 hover:border-brand-300 hover:shadow-md'
                    }`}
                >
                  <div className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity ${type.highlight ? 'border-green-400' : 'border-brand-300'}`} />
                  <div className={`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity ${type.highlight ? 'border-green-400' : 'border-brand-300'}`} />
                  <div className={`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity ${type.highlight ? 'border-green-400' : 'border-brand-300'}`} />
                  <div className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity ${type.highlight ? 'border-green-400' : 'border-brand-300'}`} />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines opacity-0 group-hover:opacity-30 transition-opacity ${type.highlight ? 'text-green-300' : 'text-brand-200'}`} />

                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border flex-shrink-0 ${type.highlight
                        ? 'bg-green-100 border-green-200'
                        : 'bg-brand-100 border-brand-200'
                      }`}>
                      <type.icon className={`w-5 h-5 ${type.highlight ? 'text-green-600' : 'text-brand-500'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-navy-900">{type.name}</h3>
                        {type.highlight && (
                          <span className="text-[10px] font-medium text-green-700 bg-green-100 px-1.5 py-0.5 rounded">GS1</span>
                        )}
                      </div>
                      <p className="text-cool-600 text-sm mb-1">{type.purpose}</p>
                      <p className="text-cool-400 text-xs font-mono">{type.use}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center text-sm text-cool-500 mt-6"
            >
              The <span className="text-green-600 font-medium">GS1 variants</span> follow global standards — making them interoperable across supply chains worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — KEY INSIGHT (INTERACTIVE)
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              SEC_04 — THE KEY INSIGHT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Not All 2D Barcodes Are Equal
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              Three barcodes can look nearly identical — but the standard behind them
              determines what they can do. Explore the difference.
            </p>
          </motion.div>

          {/* Interactive Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex justify-center mb-8" role="tablist" aria-label="Barcode type selector">
              {(['1D', 'QR Code', 'GS1 2D'] as BarcodeTypeKey[]).map((type) => (
                <button
                  key={type}
                  role="tab"
                  aria-selected={selectedType === type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2.5 font-medium text-sm transition-all duration-200 cursor-pointer first:rounded-l-lg last:rounded-r-lg border ${selectedType === type
                      ? type === '1D'
                        ? 'bg-orange-500 text-white border-orange-500'
                        : type === 'QR Code'
                          ? 'bg-brand-500 text-white border-brand-500'
                          : 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-cool-600 border-cool-200 hover:border-cool-300'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedType}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`rounded-2xl p-8 border ${toggleData[selectedType].bgColor} ${toggleData[selectedType].borderColor} relative overflow-hidden`}
              >
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-current opacity-20" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-current opacity-20" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-current opacity-20" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-current opacity-20" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-cool-400 tracking-wider">
                    TYPE_{selectedType.replace(' ', '_')}
                  </span>
                  <span className={`text-sm font-medium ${toggleData[selectedType].color}`}>
                    {toggleData[selectedType].capacity}
                  </span>
                </div>

                <p className="text-lg text-navy-900 font-medium mb-6 italic">
                  "{toggleData[selectedType].analogy}"
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" /> Can encode
                    </h4>
                    <ul className="space-y-2">
                      {toggleData[selectedType].canDo.map((item) => (
                        <li key={item} className="text-sm text-cool-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {toggleData[selectedType].cantDo.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900 mb-3 flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400" /> Cannot encode
                      </h4>
                      <ul className="space-y-2">
                        {toggleData[selectedType].cantDo.map((item) => (
                          <li key={item} className="text-sm text-cool-500 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {toggleData[selectedType].cantDo.length === 0 && (
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-green-700">Full capability</p>
                        <p className="text-xs text-cool-500">No limitations</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Key sentence */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xl font-semibold text-navy-900 mt-12 max-w-2xl mx-auto"
          >
            The power of a barcode is not its shape.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
              It's the standard behind it.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — GS1 2D DIFFERENT
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-cool-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-light opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              SEC_05 — THE STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What Makes GS1 2D Different
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              One barcode, many stakeholders. Everyone scans the same code
              but gets the outcome they need.
            </p>
          </motion.div>

          {/* Stakeholder radial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-col items-center">
              {/* Central barcode */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-brand-300 flex items-center justify-center shadow-lg">
                  <QrCode className="w-10 h-10 text-brand-500" />
                </div>
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-brand-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-brand-400" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-brand-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-brand-400" />
              </div>

              {/* Stakeholder cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl">
                {stakeholders.map((s, index) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                    className="bg-white rounded-xl p-4 border border-cool-200 text-center hover:border-brand-300 hover:shadow-md transition group relative overflow-hidden"
                  >
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-brand-200">
                      <s.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <h4 className="text-sm font-semibold text-navy-900 mb-1">{s.label}</h4>
                    <p className="text-xs text-cool-500">{s.outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Analogy callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <p className="text-xl font-semibold text-navy-900 max-w-2xl mx-auto">
              GS1 2D barcodes are like{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                passports for products
              </span>
              . Understood everywhere, trusted by everyone.
            </p>
          </motion.div>

          {/* Capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {gs1Capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-cool-200 hover:border-green-300 hover:shadow-md transition relative overflow-hidden group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-green-200 opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 flex-shrink-0">
                    <cap.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">{cap.title}</h3>
                    <p className="text-sm text-cool-600">{cap.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              SEC_06 — HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              From Barcode to Digital Experience
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto mb-2">
              One scan. Multiple destinations.
            </p>
            <p className="text-base text-cool-500 max-w-2xl mx-auto">
              A GS1 2D barcode doesn't store webpages. It contains identity.
              A resolver translates that identity into the right experience.
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 relative"
          >
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-brand-300/40 hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-10 h-10 border-t-2 border-r-2 border-brand-300/40 hidden lg:block" />
            <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b-2 border-l-2 border-brand-300/40 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-brand-300/40 hidden lg:block" />

            <div className="bg-cool-50 rounded-2xl border border-cool-200 p-6 sm:p-8 lg:p-10">
              {/* Horizontal flow on desktop, vertical on mobile */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0">
                {flowSteps.map((step, index) => (
                  <div key={step.label} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className={`relative px-5 py-3 rounded-xl border text-center min-w-[140px] ${
                        index === 3
                          ? 'bg-green-50 border-green-300 shadow-md'
                          : index === 4
                            ? 'bg-brand-50 border-brand-300'
                            : 'bg-white border-cool-200'
                      }`}
                    >
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-brand-300/40" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-brand-300/40" />
                      <p className="text-sm font-semibold text-navy-900">{step.label}</p>
                      <p className="text-[11px] text-cool-500 font-mono">{step.sub}</p>
                    </motion.div>
                    {index < flowSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="lg:px-2"
                      >
                        <ArrowRight className="w-5 h-5 text-brand-400 rotate-90 lg:rotate-0" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3 Step Cards */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Step 1 — Structured Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cool-50 rounded-2xl p-6 sm:p-8 border border-cool-200 relative overflow-hidden group hover:border-brand-300 transition"
            >
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center border border-brand-200 flex-shrink-0">
                  <span className="font-mono text-lg font-bold text-brand-600">{howItWorksSteps[0].number}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cool-400 tracking-wider block mb-1">
                    {howItWorksSteps[0].code}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">{howItWorksSteps[0].title}</h3>
                  <p className="text-cool-600 mt-1">{howItWorksSteps[0].description}</p>
                </div>
              </div>

              {/* Data fields */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {howItWorksSteps[0].fields!.map((field, idx) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    className="bg-white rounded-lg px-4 py-3 border border-cool-200 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center border border-brand-200 flex-shrink-0">
                      <field.icon className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cool-400 block">{field.label}</span>
                      <span className="text-sm font-mono font-medium text-navy-900">{field.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-base font-semibold text-navy-900 border-l-4 border-brand-400 pl-4 italic">
                "{howItWorksSteps[0].keyLine}"
              </p>
            </motion.div>

            {/* Step 2 — Resolver */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200 relative overflow-hidden group hover:border-green-400 transition"
            >
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-green-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-green-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-green-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-green-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center border border-green-300 flex-shrink-0">
                  <span className="font-mono text-lg font-bold text-green-700">{howItWorksSteps[1].number}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cool-400 tracking-wider block mb-1">
                    {howItWorksSteps[1].code}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">{howItWorksSteps[1].title}</h3>
                  <p className="text-cool-600 mt-1">{howItWorksSteps[1].description}</p>
                </div>
              </div>

              {/* Resolver visual: GTIN → Resolver → Experience */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
                <div className="bg-white rounded-lg px-4 py-2 border border-green-200 text-center">
                  <span className="text-[10px] font-mono text-cool-400 block">GTIN</span>
                  <span className="font-mono text-sm font-medium text-navy-900">09506000134352</span>
                </div>
                <ArrowRight className="w-5 h-5 text-green-500 rotate-90 sm:rotate-0" />
                <div className="bg-green-100 rounded-lg px-4 py-2 border border-green-300 text-center">
                  <span className="text-[10px] font-mono text-green-600 block">RESOLVER</span>
                  <span className="text-sm font-medium text-green-800">Checks rules & context</span>
                </div>
                <ArrowRight className="w-5 h-5 text-green-500 rotate-90 sm:rotate-0" />
                <div className="bg-white rounded-lg px-4 py-2 border border-green-200 text-center">
                  <span className="text-[10px] font-mono text-cool-400 block">RESULT</span>
                  <span className="text-sm font-medium text-navy-900">Right experience</span>
                </div>
              </div>

              {/* Routing examples */}
              <div className="space-y-3 mb-6">
                {howItWorksSteps[1].routes!.map((route, idx) => (
                  <motion.div
                    key={route.scanner}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="bg-white rounded-lg px-4 py-3 border border-green-200 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 flex-shrink-0">
                      <route.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-cool-600 flex-1">{route.scanner}</span>
                    <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-900">{route.destination}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-base font-semibold text-navy-900 border-l-4 border-green-500 pl-4 italic">
                "{howItWorksSteps[1].keyLine}"
              </p>
            </motion.div>

            {/* Step 3 — Dynamic Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cool-50 rounded-2xl p-6 sm:p-8 border border-cool-200 relative overflow-hidden group hover:border-brand-300 transition"
            >
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-300/40 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center border border-brand-200 flex-shrink-0">
                  <span className="font-mono text-lg font-bold text-brand-600">{howItWorksSteps[2].number}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cool-400 tracking-wider block mb-1">
                    {howItWorksSteps[2].code}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">{howItWorksSteps[2].title}</h3>
                  <p className="text-cool-600 mt-1">{howItWorksSteps[2].description}</p>
                </div>
              </div>

              {/* Outcomes grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {howItWorksSteps[2].outcomes!.map((outcome, idx) => (
                  <motion.div
                    key={outcome.who}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    className="bg-white rounded-lg px-4 py-3 border border-cool-200 flex items-center gap-3 hover:border-brand-300 transition"
                  >
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center border border-brand-200 flex-shrink-0">
                      <outcome.icon className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cool-400">{outcome.who}</span>
                      <p className="text-sm font-medium text-navy-900">{outcome.what}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-base font-semibold text-navy-900 border-l-4 border-brand-400 pl-4 italic">
                "{howItWorksSteps[2].keyLine}"
              </p>
            </motion.div>
          </div>

          {/* Closing line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xl font-semibold text-navy-900 mt-16 max-w-3xl mx-auto"
          >
            A GS1 2D barcode is not just a code on packaging.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
              It is a gateway connecting physical products to digital systems.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — REAL WORLD IMPACT
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid opacity-[0.015]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-2 block">
              SEC_07 — REAL WORLD
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Real World Impact
            </h2>
            <p className="text-lg text-cool-600 max-w-3xl mx-auto">
              This isn't theoretical. Industries are already using GS1 2D barcodes
              to solve real problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {realWorldExamples.map((example, index) => (
              <motion.div
                key={example.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl p-6 border border-cool-200 hover:border-brand-300 hover:shadow-md transition relative overflow-hidden group"
              >
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-barcode-lines text-brand-200 opacity-0 group-hover:opacity-30 transition-opacity" />

                <span className="font-mono text-[10px] text-cool-400 tracking-wider mb-3 block">
                  IND_{String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 border border-brand-200">
                  <example.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{example.industry}</h3>
                <p className="text-sm text-cool-500 mb-3">{example.challenge}</p>
                <p className="text-sm text-cool-700">{example.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7 — THE FUTURE
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-white opacity-[0.04]" />
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/20 hidden lg:block" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/20 hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/20 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/20 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-[10px] text-brand-300 tracking-wider mb-2 block">
              SEC_08 — THE FUTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Future: One Barcode for Everything
            </h2>
            <p className="text-lg text-brand-200 max-w-3xl mx-auto">
              The line between physical products and digital services is disappearing.
              One barcode will bridge them all.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {futureCapabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition group"
              >
                <div className="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center mb-4 border border-brand-400/30">
                  <cap.icon className="w-5 h-5 text-brand-300" />
                </div>
                <h3 className="font-semibold text-white mb-1">{cap.title}</h3>
                <p className="text-sm text-brand-200">{cap.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-2xl sm:text-3xl font-bold text-white max-w-3xl mx-auto mb-2">
              Barcodes started as labels.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-400 max-w-3xl mx-auto">
              They are becoming the digital identity of every product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-500 to-accent-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-qr-grid-white opacity-[0.05]" />
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/30 hidden lg:block" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/30 hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/30 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/30 hidden lg:block" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to future-proof your products?
            </h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
              BrandCodes generates GS1-compliant 2D barcodes, AI-powered product pages,
              and intelligent experiences — automatically.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-brand-500 font-semibold rounded-lg hover:bg-cool-100 transition"
              >
                Book a Demo
              </Link>
              <Link
                to="/why"
                className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition"
              >
                Why BrandCodes?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
