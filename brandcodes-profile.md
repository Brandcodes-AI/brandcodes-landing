BrandCodes Profile
1. Company Information
Company name: BrandCodes
Country of registration: Singapore
Website: https://brandcodes.io
Year founded: 2025

2. Primary Contacts
Contact Person 1: Jaehyeok Choi
Job title: Founder / CEO
Email: j.choi@u.nus.edu
Phone: +65 90353055
Contact Person 2: Lim Hur
Job title: Founder / CTO
Email: lim.hur@u.nus.edu
Phone: +65 88120118

3. Company Overview
BrandCodes is a GS1-compliant digital link and barcode solution platform enabling brands, manufacturers, and retailers to seamlessly migrate to 2D barcodes, implement GS1 Digital Link resolution, and unlock consumer engagement at scale. Our platform provides enterprise-grade infrastructure for barcode generation, resolver management, analytics, and product data synchronization, empowering supply chain visibility and omnichannel consumer experiences. Built for integration with existing e-commerce and product information management systems, BrandCodes accelerates Digital Link adoption.

4. GS1 Standards and Capabilities
GS1 standards supported:
GS1 Digital Link 
GTIN validation: GTIN-8, GTIN-12 (UPC), GTIN-13 (EAN), GTIN-14
2D Barcodes: GS1 QR Code, GS1 DataMatrix
Modulo-10 check digit validation (per GS1 General Specifications)
Primary identification: GTIN (01)
Application Identifier (AI) support:  Batch/Lot (10), Due (12), Expiry (17), Serial (21)
GS1 standard link types
Key capabilities:
GS1 Digital Link URI generation with full AI encoding
GS1 URI compression algorithms for compact QR codes
GS1 Resolver infrastructure with dynamic routing (/01/{GTIN}/10/{batch}/21/{serial})
Bulk URL generation and validation API
GS1 URL parsing and decomposition
Barcode compliance validation with scannability scoring
Support for all 37 GS1 link types (gs1:pip, gs1:hasRetailers, gs1:recipeInfo, etc.)
Context-aware routing (territory, language, media type, date range)

5. Solutions & Use Cases
Main solution categories:
SaaS platform for barcode and Digital Link lifecycle management
Cloud-based GS1 resolver with dynamic routing and redirection
API-first architecture for enterprise integration
White-label resolver and infrastructure partnerships
Consumer engagement features:
AI-powered product assistant with RAG (Retrieval-Augmented Generation)
  Trained on product manuals, specifications, FAQs, and web-scraped data
  Real-time streaming chat responses (Server-Sent Events)
  Session persistence across visits
  Category-specific safety disclaimers (Pharma, Food, Baby Products, Industrial, etc.)
Voice AI capabilities
  Text-to-speech with 10 voice options (multilingual support)
  Speech-to-text for voice queries
  Accessibility-focused design
Multilingual support
  7 languages: English, Spanish, French, German, Japanese, Korean, Mandarin
  Automatic locale detection
  AI-powered real-time translation
  Regional content variations
Smart product landing pages
  Auto-generated from GTIN/SKU
  Product specifications, compliance data, support information
  Document downloads (manuals, videos, guides)
  Multi-link hub with all 37 GS1 link types
Progressive Web App (PWA)
  Offline viewing capability
  Translation caching for offline multilingual support
  Works in low-connectivity environments
QR code and barcode design:
Custom QR styling (colors, module shapes, eye styles)
Logo integration with positioning controls
Preset themes and AI design assistance
Scannability scoring and validation
Multi-format export: SVG, PNG, PDF (up to 600 DPI)
X-dimension and quiet zone configuration
Analytics and insights:
Real-time scan tracking with geolocation (country, region, city)
Link click analytics
AI chat interaction metrics
Chat sentiment analysis (positive/neutral/negative/mixed)
Intent classification (support, inquiry, complaint, feedback, purchase)
Resolution tracking
Topic clustering and trending questions
Time-series analytics (hourly/daily/weekly/monthly)
Regional breakdown and trends
Export capabilities
Product data management:
Multi-step product creation wizard (10 steps)
Product variants with batch/serial/expiry management
Bulk import via CSV/API (thousands of products/variants)
Document management (PDFs, videos, links)
Web enrichment: auto-extract data from manufacturer websites
Data source consensus algorithms
Typical use cases:
2D barcode migration on consumer packaged goods (Sunrise 2027)
Multilingual product information for global markets
Consumer engagement and marketing journey orchestration
Customer engagement analytics 
Planned:
Product traceability and recall management
Omnichannel product data linking (e-commerce, retail, mobile)
Supply chain visibility and logistics optimization
Brand authentication and anti-counterfeiting initiatives
Regulatory compliance (ingredients, allergens, warnings, certifications)
Customer support automation via AI assistant

6. Target Industries & Customer Types
Industries:
Fast-Moving Consumer Goods (FMCG)
Food & Beverage
Retail and E-commerce
Healthcare and Pharmaceuticals
Logistics and Supply Chain
Manufacturing
Customer profiles:
Brand owners and manufacturers
Retailers and distributors
Solution integrators and system providers
Supply chain consultants
E-commerce platforms

7. Technical & Commercial Details
Deployment model:
Cloud-based SaaS platform with API-first architecture
White-label resolver infrastructure available for qualified partners
Multi-tenant architecture with complete data isolation per organization
Technology stack:
Backend: Django 5.0 + Django REST Framework (Python)
Frontend: React 18 + TypeScript + Vite
Database: PostgreSQL via Supabase
Vector DB: Qdrant (semantic search, RAG)
AI/ML: OpenAI GPT-4o, text-embedding-3-small
Authentication: OAuth 2.0 (Google, GitHub), Supabase Auth, JWT
API endpoints (public and authenticated):
Product management: CRUD, variants, links, documents
GS1 services: /gs1/bulk-generate/, /gs1/validate/, /gs1/parse/
Resolver: /01/{GTIN}/ with batch/serial/expiry support
AI services: /chat/, /translate/, /voice/tts/, /voice/stt/
Analytics: /analytics/, /analytics/regions/, /analytics/chat-insights/
QR codes: /qrcodes/, /custom-qrcodes/, download endpoints
Integration options:
RESTful APIs for barcode generation, resolver management, and analytics
Webhooks for real-time event notifications
SDKs for common platforms (JavaScript/TypeScript, Python)
Direct database integration support
CSV/XML import/export for bulk operations
Security:
Role-based access control (Owner, Admin, Member)
Organization-scoped data isolation
HTTPS encryption in production (Cloudflare Pages for frontend & Google Cloud Run for backend)
CSRF protection (Django middleware)
API key support for integrations
Performance:
Async batch processing for large imports
Vector database caching for fast semantic search
Strategic database indexing
Streaming responses for large payloads
CDN-ready static assets (Cloudflare)

Commercial model (to be discussed):
Subscription tiers (starter, professional, enterprise)
Volume-based pricing for barcode generation and scan events
Custom enterprise and partnership pricing available
Detailed discussion upon platform exploration and scope alignment

8. Branding Assets
Company logo: 


9. Differentiating Features
Complete GS1 Digital Link implementation with 37+ Application Identifiers
AI-powered consumer engagement (RAG-based chat, voice AI, multilingual)
2D Barcode & QR code design configuration options
AI-assisted product page design
Comprehensive analytics with sentiment analysis and intent classification
PWA with offline capability for low-connectivity environments
Bulk operations: import thousands of products/variants/links via CSV or API
Web enrichment: automatically extract product data from manufacturer websites
Multi-tenant architecture suitable for enterprise and partner deployments
Notes 
We are ready to provision a sandbox/demo account for your team's exploration and evaluation
Live demo available at: https://app.brandcodes.io
Example product page: https://app.brandcodes.io/01/00040000424314
This profile can be updated or adapted to align with GS1 Singapore's official Solution Partner profile template
Particularly suited for Sunrise 2027 migration initiatives and consumer engagement use cases

