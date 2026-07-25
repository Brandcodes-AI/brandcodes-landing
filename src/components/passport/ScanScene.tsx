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
}

export const ProductPackagingIllustration: React.FC = () => (
  <svg
    className="passport-packaging-art"
    viewBox="0 0 560 420"
    role="img"
    aria-label="An open shipping box with a folded overshirt inside"
    data-packaging-art
  >
    <title>An open shipping box with a folded overshirt inside</title>
    <path className="passport-packaging-art__shadow" d="M62 352h407l44 26H24Z" />

    {/* flaps folded back and left, drawn behind the box body */}
    <path
      className="passport-packaging-art__flap"
      d="M204 59 479 91 495 50 220 18Z"
    />
    <path
      className="passport-packaging-art__flap"
      d="M82 116 204 59 172 33 50 90Z"
    />

    {/* open mouth of the box, with the folded garment resting inside */}
    <path
      className="passport-packaging-art__interior"
      d="M82 116 204 59l275 32-123 56Z"
    />
    <path
      className="passport-packaging-art__contents-edge"
      d="m129 108 225 26v8l-225-27Z"
    />
    <path
      className="passport-packaging-art__contents"
      d="m129 108 77-36 225 27-77 35Z"
    />
    <path
      className="passport-packaging-art__contents-fold"
      d="m155 96 225 26M181 84l224 26"
    />

    <path
      className="passport-packaging-art__box-side"
      d="m82 116 274 31v196L82 309Z"
    />
    <path
      className="passport-packaging-art__box-front"
      d="m356 147 123-56v191l-123 61Z"
    />

    {/* the garment printed on the front panel, tucked under the open flap */}
    <g className="passport-packaging-art__garment">
      <path
        className="passport-packaging-art__shirt"
        d="M174 208 149 224l14 37 21-9v50h76v-50l21 9 14-37-25-16-22-6q-24 15-48 0Z"
      />
      <path
        className="passport-packaging-art__shirt-detail"
        d="m196 202 25 22-24 3-14-15Zm50 0-25 22 24 3 14-15Z"
      />
      <path
        className="passport-packaging-art__shirt-detail"
        d="M221 226v76M163 253l21-9m94 9-21-9"
      />
      <path
        className="passport-packaging-art__shirt-detail"
        d="M193 244h20v17h-20zm35 0h20v17h-20z"
      />
      <circle className="passport-packaging-art__button" cx="221" cy="244" r="2.6" />
      <circle className="passport-packaging-art__button" cx="221" cy="266" r="2.6" />
      <circle className="passport-packaging-art__button" cx="221" cy="288" r="2.6" />
    </g>

    {/* front and right flaps, folded outward over the box body */}
    <path
      className="passport-packaging-art__flap"
      d="M82 116 356 147 338 185 64 154Z"
    />
    <path
      className="passport-packaging-art__flap"
      d="M356 147 479 91l40 29-123 56Z"
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
    <svg
      className="passport-garment-tag__thread"
      viewBox="0 0 64 96"
      aria-hidden="true"
      focusable="false"
    >
      {/* hanging strand, knot, and a string loop threaded through the eyelet */}
      <path d="M60 0C52 16 46 28 41 39" />
      <path d="M41 39c-16 5-19 21-9 33" />
      <path d="M41 39c5 12 1 24-9 33" />
      <ellipse cx="41" cy="39" rx="3.4" ry="2.6" />
      <circle className="passport-garment-tag__eyelet" cx="32" cy="72" r="4.6" />
    </svg>
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
        NS
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
}) => {
  const page = passport.pages[activePage] ?? passport.pages[0];
  const showInitial = state === 'idle';
  const showScan = state === 'scanning' || state === 'verifying';
  const showVerified = state === 'verified';
  const showPassport = state === 'passport';
  const showTraceability = state === 'traceability';

  return (
    <div className="passport-scan-scene" data-scan-scene>
      <div className="passport-scene__frame" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

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
            A resolver infrastructure layer for companies transitioning to GS1
            2D barcodes.
          </p>
          <a className="passport-story__primary-action" href="#contact">
            Book a demo
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </a>
        </section>

        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--scan"
          data-story-copy="scan"
          aria-hidden={!showScan}
        >
          <p className="passport-story__eyebrow">
            <span>02</span>
            The scan
          </p>
          <h2>Someone picks it up and scans.</h2>
          <p>
            A shopper in the aisle points a phone at the tag.
          </p>
        </section>

        <section
          className="passport-scene__copy-layer passport-scene__copy-layer--verified"
          data-story-copy="verified"
          aria-hidden={!showVerified}
        >
          <p className="passport-story__eyebrow">
            <span>03</span>
            The answer
          </p>
          <h2>The code answers back.</h2>
          <p>
            In a second the resolver knows exactly which product this is, and
            brand, batch and production records arrive together under one
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
            Swipe the phone to keep reading. Six pages, one product.
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
                The journey
              </p>
              <h2>And behind it, everywhere it has been.</h2>
            </div>
            <p>
              Each hand that touched this product left a record behind, from the
              field it grew in to the doorstep it arrived at. This is the trail
              a single scan opens up.
            </p>
          </div>
          <TraceabilityTimeline
            passport={passport}
            activeStep={activeTraceStep}
            compact
          />
          <a className="passport-story__primary-action" href="#contact">
            Book a demo
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </a>
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
