export const PASSPORT_JOURNEY_ORDER = [
  'idle',
  'scanning',
  'verifying',
  'verified',
  'passport',
  'traceability',
] as const;

export const PASSPORT_JOURNEY_STATES = PASSPORT_JOURNEY_ORDER;

export type PassportJourneyState = (typeof PASSPORT_JOURNEY_ORDER)[number];
export type JourneyState = PassportJourneyState;

export type PassportPageId =
  | 'overview'
  | 'materials'
  | 'manufacturing-journey'
  | 'certifications'
  | 'environmental-impact'
  | 'care-and-repair';

export type TraceabilityVisualType =
  | 'cotton-field'
  | 'weaving-loom'
  | 'overshirt'
  | 'quality-check'
  | 'delivery';

export type PassportBenefitVisualType =
  | 'authenticity'
  | 'origins'
  | 'care'
  | 'warranty'
  | 'resale'
  | 'recycling';

export interface PassportPageStat {
  readonly label: string;
  readonly value: string;
}

export interface PassportCarouselPage {
  readonly id: PassportPageId;
  readonly label: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly summary: string;
  readonly detail: string;
  readonly stats: readonly PassportPageStat[];
}

export interface TraceabilityStep {
  readonly id: string;
  readonly label: string;
  readonly location: string;
  readonly date: string;
  readonly dateTime: string;
  readonly description: string;
  readonly visualType: TraceabilityVisualType;
  readonly verified: boolean;
}

export interface PassportBenefit {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly visualType: PassportBenefitVisualType;
}

export interface ProductPassport {
  readonly brand: string;
  readonly name: string;
  readonly category: string;
  readonly passportId: string;
  readonly manufactured: string;
  readonly digitalLink: string;
  readonly verificationLabel: string;
  readonly verified: boolean;
  readonly manufacturedDate: string;
  readonly productDescription: string;
  readonly pages: readonly PassportCarouselPage[];
  readonly traceability: readonly TraceabilityStep[];
  readonly benefits: readonly PassportBenefit[];
}

export const productPassport: ProductPassport = {
  brand: 'Field & Form',
  name: 'Organic Cotton Overshirt',
  category: 'Apparel / Overshirts',
  passportId: 'PP-2026-01842',
  manufactured: '14 February 2026',
  digitalLink: 'https://id.brandcodes.com/01/09506000184203',
  verificationLabel: 'Product verified',
  verified: true,
  manufacturedDate: '2026-02-14',
  productDescription:
    'A durable everyday layer made with traceable organic cotton and designed for a long, repairable life.',
  pages: [
    {
      id: 'overview',
      label: 'Product overview',
      eyebrow: 'The piece',
      title: 'Product overview',
      summary:
        'A relaxed workwear overshirt whose identity, ownership and production record travel with the garment.',
      detail:
        'Designed as a seasonless layer, this numbered piece can retain its verified record through care, repair and resale.',
      stats: [
        {
          label: 'Style',
          value: 'Relaxed workwear fit',
        },
        {
          label: 'Colour',
          value: 'Forest olive',
        },
        {
          label: 'Batch',
          value: 'OC-260214',
        },
      ],
    },
    {
      id: 'materials',
      label: 'Materials',
      eyebrow: 'What it is made from',
      title: 'Materials',
      summary:
        'Every primary material is documented to help customers make informed use, care and end-of-life decisions.',
      detail:
        'The 285 g/m² twill is paired with nickel-free recycled metal buttons, with fibre and trim evidence stored against the same batch.',
      stats: [
        {
          label: 'Main fabric',
          value: '98% GOTS organic cotton',
        },
        {
          label: 'Trims',
          value: '2% recycled metal',
        },
        {
          label: 'Cotton origin',
          value: 'Gujarat, India',
        },
      ],
    },
    {
      id: 'manufacturing-journey',
      label: 'Manufacturing journey',
      eyebrow: 'From fibre to finished garment',
      title: 'Manufacturing journey',
      summary:
        'Five verified handovers connect the cotton farm to the finished overshirt and its first customer.',
      detail:
        'Supplier records, batch documents and final inspection evidence form one continuous chain of custody.',
      stats: [
        {
          label: 'Verified stages',
          value: '5 of 5',
        },
        {
          label: 'Final assembly',
          value: 'Guimarães, Portugal',
        },
        {
          label: 'Recorded distance',
          value: '9,240 km',
        },
      ],
    },
    {
      id: 'certifications',
      label: 'Certifications',
      eyebrow: 'Independent standards',
      title: 'Certifications',
      summary:
        'The claims attached to this passport are backed by current scope certificates and supplier evidence.',
      detail:
        'Certification references remain linked to the organisations, facilities and production windows they actually cover.',
      stats: [
        {
          label: 'Textile',
          value: 'GOTS certified',
        },
        {
          label: 'Chemical safety',
          value: 'OEKO-TEX Standard 100',
        },
        {
          label: 'Workplace',
          value: 'Fair Wear audited',
        },
      ],
    },
    {
      id: 'environmental-impact',
      label: 'Environmental impact',
      eyebrow: 'Measured impact',
      title: 'Environmental impact',
      summary:
        'Product-level estimates make the trade-offs visible and preserve the methodology behind each figure.',
      detail:
        'Impact figures use supplier activity data where available and clearly identify modelled inputs in the underlying record.',
      stats: [
        {
          label: 'Carbon footprint',
          value: '18.4 kg CO₂e',
        },
        {
          label: 'Water use',
          value: '2,140 L',
        },
        {
          label: 'Packaging',
          value: '100% recycled paper',
        },
      ],
    },
    {
      id: 'care-and-repair',
      label: 'Care and repair',
      eyebrow: 'Keep it in use',
      title: 'Care and repair',
      summary:
        'Care guidance is tailored to this fabric, with repair support available before replacement is considered.',
      detail:
        'Cold washing, shade drying and early repairs help preserve the dense twill while reducing energy use.',
      stats: [
        {
          label: 'Wash',
          value: 'Cold wash at 30°C',
        },
        {
          label: 'Dry',
          value: 'Air dry in shade',
        },
        {
          label: 'Repair',
          value: 'Complimentary patch kit',
        },
      ],
    },
  ],
  traceability: [
    {
      id: 'cotton-grown',
      label: 'Cotton grown',
      location: 'Kutch, Gujarat, India',
      date: '12 September 2025',
      dateTime: '2025-09-12',
      description:
        'Rain-fed organic cotton was harvested from a cooperative of 34 regenerative farms.',
      visualType: 'cotton-field',
      verified: true,
    },
    {
      id: 'fabric-woven',
      label: 'Fabric woven',
      location: 'Bursa, Türkiye',
      date: '18 November 2025',
      dateTime: '2025-11-18',
      description:
        'The fibre was spun and woven into a substantial twill using renewable electricity.',
      visualType: 'weaving-loom',
      verified: true,
    },
    {
      id: 'garment-assembled',
      label: 'Garment assembled',
      location: 'Guimarães, Portugal',
      date: '28 January 2026',
      dateTime: '2026-01-28',
      description:
        'Specialist makers cut, stitched and finished the overshirt in one audited workshop.',
      visualType: 'overshirt',
      verified: true,
    },
    {
      id: 'quality-verified',
      label: 'Quality verified',
      location: 'Porto, Portugal',
      date: '14 February 2026',
      dateTime: '2026-02-14',
      description:
        'Construction, colourfastness and material records passed the final quality review.',
      visualType: 'quality-check',
      verified: true,
    },
    {
      id: 'delivered-to-customer',
      label: 'Delivered to customer',
      location: 'Singapore',
      date: '22 February 2026',
      dateTime: '2026-02-22',
      description:
        'The first delivery was recorded, preserving an authenticated history for future owners.',
      visualType: 'delivery',
      verified: true,
    },
  ],
  benefits: [
    {
      id: 'verify-authenticity',
      title: 'Verify authenticity',
      description:
        'Confirm that the product and its passport were issued by the original brand.',
      visualType: 'authenticity',
    },
    {
      id: 'understand-origins',
      title: 'Understand product origins',
      description:
        'Follow the materials, makers and verified handovers behind every item.',
      visualType: 'origins',
    },
    {
      id: 'personalised-care',
      title: 'Access personalised care instructions',
      description:
        'Use guidance matched to the exact materials, trims and finish of the product.',
      visualType: 'care',
    },
    {
      id: 'register-warranty',
      title: 'Register warranty',
      description:
        'Connect ownership to the passport without losing the product record.',
      visualType: 'warranty',
    },
    {
      id: 'verified-resale',
      title: 'Resell with verified history',
      description:
        'Transfer a trusted service and ownership record to the product’s next user.',
      visualType: 'resale',
    },
    {
      id: 'return-for-recycling',
      title: 'Return for recycling',
      description:
        'Find the right take-back route when repair and reuse are no longer possible.',
      visualType: 'recycling',
    },
  ],
};

export const organicCottonOvershirtPassport = productPassport;

export default productPassport;
