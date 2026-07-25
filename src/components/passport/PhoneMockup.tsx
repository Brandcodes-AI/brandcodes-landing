import React from 'react';

import { PassportCarousel } from './PassportCarousel';
import type {
  PassportJourneyState,
  ProductPassport,
} from './passportData';

interface PhoneMockupProps {
  passport: ProductPassport;
  state: PassportJourneyState;
  activePage: number;
  onActivePageChange: (index: number) => void;
  renderPassportPages?: boolean;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  passport,
  state,
  activePage,
  onActivePageChange,
  renderPassportPages = true,
  className = '',
}) => {
  const showsIdle =
    state === 'idle' || state === 'scanning' || state === 'verifying';
  const showsVerified = state === 'verified';
  const showsPassport = state === 'passport' || state === 'traceability';

  return (
    <div
      className={`passport-phone ${className}`.trim()}
      data-phone
      data-phone-state={state}
      aria-label="Interactive product passport preview"
    >
      <span className="passport-phone__side passport-phone__side--top" />
      <span className="passport-phone__side passport-phone__side--middle" />
      <div className="passport-phone__bezel">
        <div className="passport-phone__screen">
          <div className="passport-phone__statusbar" aria-hidden="true">
            <span>9:41</span>
            <span className="passport-phone__island" />
            <span className="passport-phone__signal">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div
            className="passport-phone__layer passport-phone__layer--idle"
            data-phone-idle
            aria-hidden={!showsIdle}
          >
            <div className="passport-phone__brandline">
              <img
                className="passport-phone__brandmark"
                src="/logo/bc-mock-logo-background-removed.png"
                alt="BrandCodes"
                loading="lazy"
              />
              <span>digital passport</span>
            </div>
            <div className="passport-phone__ready">
              <span className="passport-phone__ready-ring" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <path d="M15 8H8v7M33 8h7v7M15 40H8v-7M33 40h7v-7" />
                  <rect x="17" y="17" width="14" height="14" />
                </svg>
              </span>
              <p>Digital product passport</p>
              <strong>Ready for a secure scan</strong>
              <small>No camera access required in this demonstration.</small>
            </div>
          </div>

          <div
            className="passport-phone__layer passport-phone__layer--verified"
            data-phone-verified
            aria-hidden={!showsVerified}
          >
            <div className="passport-verified-mark" aria-hidden="true">
              <svg viewBox="0 0 72 72">
                <circle
                  cx="36"
                  cy="36"
                  r="29"
                  data-verification-circle
                />
                <path d="m23 36 9 9 18-20" data-verification-check />
              </svg>
            </div>
            <p className="passport-phone__verified-label">
              {passport.verificationLabel}
            </p>
            <h2>{passport.name}</h2>
            <dl className="passport-phone__verified-facts">
              <div>
                <dt>Passport ID</dt>
                <dd>{passport.passportId}</dd>
              </div>
              <div>
                <dt>Manufactured</dt>
                <dd>
                  <time dateTime={passport.manufacturedDate}>
                    {passport.manufactured}
                  </time>
                </dd>
              </div>
            </dl>
          </div>

          {renderPassportPages ? (
            <div
              className="passport-phone__layer passport-phone__layer--passport"
              data-phone-passport
              aria-hidden={!showsPassport}
            >
              <div className="passport-phone__passport-header">
                <span>{passport.brand}</span>
                <span className="passport-phone__verified-chip">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="m5 10 3 3 7-7" />
                  </svg>
                  Verified
                </span>
              </div>
              <PassportCarousel
                passport={passport}
                activeIndex={activePage}
                onActivePageChange={onActivePageChange}
                interactive={showsPassport}
              />
            </div>
          ) : null}

          <span
            className="passport-phone__qr-target"
            data-phone-qr-target
            aria-hidden="true"
          />
          <span className="passport-phone__home" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
