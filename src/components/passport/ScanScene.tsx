import React from 'react';

import { PhoneMockup } from './PhoneMockup';
import { QRScannerAnimation } from './QRScannerAnimation';
import { TraceabilityTimeline } from './TraceabilityTimeline';
import type {
  PassportJourneyState,
  ProductPassport,
} from './passportData';

interface ScanSceneProps {
  passport: ProductPassport;
  state: PassportJourneyState;
  status: string;
  activePage: number;
  activeTraceStep: number;
  onActivePageChange: (index: number) => void;
  onExplore: () => void;
}

export const ProductPackagingIllustration: React.FC = () => (
  <svg
    className="passport-packaging-art"
    viewBox="0 0 560 420"
    role="img"
    aria-label="Recycled paper product packaging with an organic cotton overshirt"
    data-packaging-art
  >
    <title>Sustainable packaging and an organic cotton overshirt</title>
    <path className="passport-packaging-art__shadow" d="M62 352h407l44 26H24Z" />
    <path
      className="passport-packaging-art__box-side"
      d="m82 116 274 31v196L82 309Z"
    />
    <path
      className="passport-packaging-art__box-front"
      d="m356 147 123-56v191l-123 61Z"
    />
    <path
      className="passport-packaging-art__box-top"
      d="M82 116 204 59l275 32-123 56Z"
    />
    <path
      className="passport-packaging-art__tape"
      d="m184 69 44-20 276 31-47 21Z"
    />
    <path
      className="passport-packaging-art__shirt"
      d="m124 166 51-30 47 24 46-14 50 32-26 48v79H148v-79Z"
    />
    <path
      className="passport-packaging-art__shirt-detail"
      d="m175 136 47 24 46-14-17 48h-57Zm47 24v145m-36-87h72M159 286h126"
    />
    <path
      className="passport-packaging-art__leaf"
      d="M394 191c29-35 60-34 60-34s-1 31-33 52c-15 10-28 4-27-18Z"
    />
    <path
      className="passport-packaging-art__leaf-detail"
      d="M381 229c18-31 40-50 66-66"
    />
    <g className="passport-packaging-art__wordmark">
      <path d="M388 246h55" />
      <path d="M388 258h38" />
      <path d="M388 270h47" />
    </g>
    <g
      className="passport-packaging-art__cotton"
      transform="translate(65 323)"
    >
      <path d="M0 27c27-2 44-12 57-32" />
      <path d="M27 18C17 2 2 4 5 17c3 11 13 13 22 1Z" />
      <path d="M38 9C34-10 49-15 57-4c7 10-2 20-19 13Z" />
      <path d="M48 3c7-17 23-14 24-1 1 12-11 17-24 1Z" />
    </g>
  </svg>
);

interface PassportGarmentTagProps {
  passport: ProductPassport;
  state: PassportJourneyState;
}

export const PassportGarmentTag: React.FC<PassportGarmentTagProps> = ({
  passport,
  state,
}) => (
  <article className="passport-garment-tag" data-garment-tag>
    <div className="passport-garment-tag__thread" aria-hidden="true">
      <span />
    </div>
    <div className="passport-garment-tag__header">
      <span>{passport.brand}</span>
      <small>Organic cotton</small>
    </div>
    <QRScannerAnimation
      payload={passport.digitalLink}
      state={state}
      showStatus={false}
      label={`Digital passport QR code for ${passport.name}`}
    />
    <div className="passport-garment-tag__footer">
      <span>Scan for origin, care and circularity</span>
      <span className="passport-garment-tag__mark" aria-hidden="true">
        FF
      </span>
    </div>
  </article>
);

export const ScanScene: React.FC<ScanSceneProps> = ({
  passport,
  state,
  status,
  activePage,
  activeTraceStep,
  onActivePageChange,
  onExplore,
}) => {
  const page = passport.pages[activePage] ?? passport.pages[0];
  const showInitial = state === 'idle';
  const showScan = state === 'scanning' || state === 'verifying';
  const showVerified = state === 'verified';
  const showPassport = state === 'passport';
  const showTraceability = state === 'traceability';

  return (
    <div className="passport-scan-scene" data-scan-scene>
      <div className="passport-scene__copy">
        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--idle"
          data-story-copy="idle"
          aria-hidden={!showInitial}
        >
          <p className="passport-story__eyebrow">
            <span>01</span>
            Product
          </p>
          <h1>Every product has a story.</h1>
          <p className="passport-story__lead">
            BrandCodes turns the GS1 2D barcode on your pack into a verified
            digital product passport - one scan for shoppers, retailers and
            regulators.
          </p>
          <div className="passport-story__actions">
            <button
              type="button"
              className="passport-story__primary-action"
              onClick={onExplore}
            >
              Explore the passport
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </button>
            <a className="passport-story__secondary-action" href="#contact">
              Book a demo
            </a>
          </div>
        </section>

        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--scan"
          data-story-copy="scan"
          aria-hidden={!showScan}
        >
          <p className="passport-story__eyebrow">
            <span>02</span>
            Secure scan
          </p>
          <h2>One code. One trusted identity.</h2>
          <p>
            This is a simulated scan. The product link is resolved and checked
            without requesting access to your camera.
          </p>
        </section>

        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--verified"
          data-story-copy="verified"
          aria-hidden={!showVerified}
        >
          <p className="passport-story__eyebrow">
            <span>03</span>
            Identity resolved
          </p>
          <h2>The code becomes a verified product record.</h2>
          <p>
            Brand, product and production data are joined under one persistent
            passport ID.
          </p>
        </section>

        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--passport"
          data-story-copy="passport"
          aria-hidden={!showPassport}
        >
          <p className="passport-story__eyebrow">
            <span>{String(activePage + 1).padStart(2, '0')}</span>
            {page.eyebrow}
          </p>
          <h2>{page.title}</h2>
          <p>{page.detail}</p>
          <div className="passport-scene__page-progress" aria-hidden="true">
            {passport.pages.map((passportPage, index) => (
              <span
                key={passportPage.id}
                className={index === activePage ? 'is-active' : ''}
              />
            ))}
          </div>
          <p className="passport-scene__interaction-hint">
            Drag the phone or use its arrow keys to explore all six pages.
          </p>
        </section>

        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--trace"
          data-story-copy="traceability"
          aria-hidden={!showTraceability}
        >
          <div className="passport-scene__trace-heading">
            <div>
              <p className="passport-story__eyebrow">
                <span>05</span>
                Traceability
              </p>
              <h2>A chain of verified handovers.</h2>
            </div>
            <p>
              Every stage adds evidence to the same product history, from
              fibre to first delivery.
            </p>
          </div>
          <TraceabilityTimeline
            passport={passport}
            activeStep={activeTraceStep}
            compact
          />
        </section>
      </div>

      <div className="passport-scene__visual">
        <div className="passport-product-scene" data-product-scene>
          <ProductPackagingIllustration />
          <div className="passport-tag-origin" data-tag-origin>
            <PassportGarmentTag passport={passport} state={state} />
          </div>
        </div>

        <PhoneMockup
          passport={passport}
          state={state}
          activePage={activePage}
          onActivePageChange={onActivePageChange}
        />
      </div>

      <div
        className="passport-scene__floating-status"
        data-floating-status
        aria-hidden={!showScan && !showVerified}
      >
        <span className="passport-scene__status-index" aria-hidden="true">
          {state === 'verified'
            ? '04'
            : state === 'verifying'
              ? '03'
              : '02'}
        </span>
        <p role="status" aria-live="polite" aria-atomic="true">
          {status}
        </p>
      </div>
    </div>
  );
};

export default ScanScene;
