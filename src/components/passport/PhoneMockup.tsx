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

const phoneLayerClass =
  'passport-phone__layer absolute inset-x-0 bottom-0 top-[2.75rem] invisible pointer-events-none opacity-0 [will-change:opacity,transform]';

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
      className={`passport-phone relative z-[4] col-start-2 aspect-[9/19.45] w-[min(25cqw,22rem)] justify-self-center text-[var(--passport-charcoal)] [filter:drop-shadow(0_24px_35px_var(--passport-shadow))] will-change-transform ${className}`.trim()}
      data-phone
      data-phone-state={state}
      aria-label="Interactive product passport preview"
    >
      <span className="absolute top-[20%] left-[-0.18rem] -z-10 h-[7%] w-1 rounded-l-[2px] bg-[var(--passport-charcoal-soft)]" />
      <span className="absolute top-[31%] left-[-0.18rem] -z-10 h-[12%] w-1 rounded-l-[2px] bg-[var(--passport-charcoal-soft)]" />
      <div className="h-full w-full rounded-[3.1rem] border border-[var(--passport-charcoal-soft)] bg-[var(--passport-charcoal)] p-[0.56rem]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.58rem] bg-[var(--passport-paper)] text-[var(--passport-charcoal)]">
          <div
            className="relative z-10 grid h-11 grid-cols-[1fr_auto_1fr] items-center px-[1.15rem] text-[0.58rem] font-[720]"
            aria-hidden="true"
          >
            <span>9:41</span>
            <span className="h-[1.35rem] w-[4.4rem] rounded-2xl bg-[var(--passport-charcoal)]" />
            <span className="flex items-end justify-end gap-0.5">
              <i className="block h-[3px] w-0.5 bg-[var(--passport-charcoal)]" />
              <i className="block h-[5px] w-0.5 bg-[var(--passport-charcoal)]" />
              <i className="block h-[7px] w-0.5 bg-[var(--passport-charcoal)]" />
            </span>
          </div>

          <div
            className={`${phoneLayerClass} passport-phone__layer--idle`}
            data-phone-idle
            aria-hidden={!showsIdle}
          >
            <div className="flex min-h-11 items-center justify-between gap-2 border-b border-[var(--passport-line)] px-4 text-[0.58rem] font-[720] tracking-[0.055em] uppercase">
              <img
                className="h-[1.05rem] w-auto flex-none object-contain"
                src="/logo/bc-mock-logo-background-removed.png"
                alt="BrandCodes"
                loading="lazy"
              />
              <span>digital passport</span>
            </div>
            <div className="flex h-[calc(100%-2.8rem)] flex-col items-center justify-center px-5 text-center">
              <span
                className="grid size-[5.8rem] place-items-center rounded-full border border-[var(--passport-line-strong)]"
                aria-hidden="true"
              >
                <svg
                  className="w-11 fill-none stroke-[var(--passport-forest-strong)] stroke-[1.2] [stroke-linejoin:round]"
                  viewBox="0 0 48 48"
                >
                  <path d="M15 8H8v7M33 8h7v7M15 40H8v-7M33 40h7v-7" />
                  <rect x="17" y="17" width="14" height="14" />
                </svg>
              </span>
              <p className="mt-[1.4rem] mb-[0.3rem] text-[0.57rem] font-[760] tracking-[0.12em] text-[var(--passport-forest-strong)] uppercase">
                Digital product passport
              </p>
              <strong className="max-w-48 font-['Newsreader',serif] text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.05] font-[520]">
                Ready for a secure scan
              </strong>
              <small className="mt-[0.7rem] max-w-44 text-[0.56rem] leading-6 text-[var(--passport-charcoal-soft)]">
                No camera access required in this demonstration.
              </small>
            </div>
          </div>

          <div
            className={`${phoneLayerClass} passport-phone__layer--verified flex flex-col items-center justify-center px-[1.35rem] text-center`}
            data-phone-verified
            aria-hidden={!showsVerified}
          >
            <div
              className="w-[4.5rem] text-[var(--passport-forest-strong)]"
              aria-hidden="true"
            >
              <svg
                className="w-full overflow-visible fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                viewBox="0 0 72 72"
              >
                <circle
                  cx="36"
                  cy="36"
                  r="29"
                  data-verification-circle
                />
                <path d="m23 36 9 9 18-20" data-verification-check />
              </svg>
            </div>
            <p className="mt-[0.85rem] mb-[0.65rem] text-[0.6rem] font-[770] tracking-[0.13em] text-[var(--passport-forest-strong)] uppercase">
              {passport.verificationLabel}
            </p>
            <h2 className="m-0! max-w-[10ch]! font-['Newsreader',serif]! text-[clamp(1.65rem,2.4vw,2.2rem)]! leading-[0.97]! font-[460]! tracking-[-0.04em]!">
              {passport.name}
            </h2>
            <dl className="mt-[1.6rem] w-full border-t border-[var(--passport-line)]">
              <div className="grid grid-cols-[0.8fr_1.2fr] gap-[0.6rem] border-b border-[var(--passport-line)] py-[0.72rem] text-left">
                <dt className="text-[0.55rem] tracking-[0.05em] text-[var(--passport-charcoal-soft)] uppercase">
                  Passport ID
                </dt>
                <dd className="m-0 text-right text-[0.64rem] font-[680]">
                  {passport.passportId}
                </dd>
              </div>
              <div className="grid grid-cols-[0.8fr_1.2fr] gap-[0.6rem] border-b border-[var(--passport-line)] py-[0.72rem] text-left">
                <dt className="text-[0.55rem] tracking-[0.05em] text-[var(--passport-charcoal-soft)] uppercase">
                  Manufactured
                </dt>
                <dd className="m-0 text-right text-[0.64rem] font-[680]">
                  <time dateTime={passport.manufacturedDate}>
                    {passport.manufactured}
                  </time>
                </dd>
              </div>
            </dl>
          </div>

          {renderPassportPages ? (
            <div
              className={`${phoneLayerClass} passport-phone__layer--passport flex flex-col overflow-hidden`}
              data-phone-passport
              aria-hidden={!showsPassport}
            >
              <header className="relative z-[4] flex-none border-b border-[var(--passport-line)] bg-[var(--passport-paper)] px-4 pt-[0.7rem] pb-[0.75rem]">
                <div className="flex items-center justify-between gap-[0.45rem] text-[0.48rem] font-[740] tracking-[0.1em] text-[var(--passport-charcoal-soft)] uppercase">
                  <span>Digital product passport</span>
                  <span className="inline-flex items-center gap-[0.2rem] text-[0.5rem] text-[var(--passport-forest-strong)]">
                    <svg
                      className="w-[0.85rem] fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="m5 10 3 3 7-7" />
                    </svg>
                    Verified
                  </span>
                </div>
                <h2 className="mt-[0.42rem]! mb-0! font-['Newsreader',serif]! text-[clamp(1.35rem,2vw,1.75rem)]! leading-none! font-[510]! tracking-[-0.035em]!">
                  {passport.name}
                </h2>
                <p className="mt-[0.28rem] mb-0 text-[0.55rem] leading-[1.35] text-[var(--passport-charcoal-soft)]">
                  {passport.brand} <span aria-hidden="true">·</span>{' '}
                  {passport.category}
                </p>
                <dl className="mt-[0.55rem] mb-0 text-[0.48rem]">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-[680] tracking-[0.1em] text-[var(--passport-charcoal-soft)] uppercase">
                      Passport ID
                    </dt>
                    <dd className="m-0 font-[720] tracking-[0.035em]">
                      {passport.passportId}
                    </dd>
                  </div>
                </dl>
              </header>
              <PassportCarousel
                passport={passport}
                activeIndex={activePage}
                onActivePageChange={onActivePageChange}
                interactive={showsPassport}
              />
            </div>
          ) : null}

          <span
            className="absolute top-1/2 left-1/2 -z-10 aspect-square w-[29%] -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none"
            data-phone-qr-target
            aria-hidden="true"
          />
          <span
            className="absolute bottom-[0.34rem] left-1/2 z-20 h-[0.24rem] w-[34%] -translate-x-1/2 rounded-2xl bg-[var(--passport-charcoal)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
