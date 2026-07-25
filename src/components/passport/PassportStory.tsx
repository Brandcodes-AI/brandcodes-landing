import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

import { PhoneMockup } from './PhoneMockup';
import { QRScannerAnimation } from './QRScannerAnimation';
import {
  PassportGarmentTag,
  ProductPackagingIllustration,
  ScanScene,
} from './ScanScene';
import { TraceabilityTimeline } from './TraceabilityTimeline';
import {
  PASSPORT_JOURNEY_STATES,
  organicCottonOvershirtPassport,
  type PassportJourneyState,
  type ProductPassport,
} from './passportData';
import './PassportStory.css';

gsap.registerPlugin(ScrollTrigger);

interface PassportStoryProps {
  passport?: ProductPassport;
}

const PINNED_STORY_VIEWPORT_QUERY =
  '(min-height: 620px) and (prefers-reduced-motion: no-preference)';
const MIN_PINNED_STORY_WIDTH = 840;

const STATE_SCROLL_PROGRESS: Record<PassportJourneyState, number> = {
  idle: 0,
  scanning: 0.16,
  verifying: 0.29,
  verified: 0.42,
  passport: 0.62,
  traceability: 0.82,
};

const STATE_LABELS: Record<PassportJourneyState, string> = {
  idle: 'Product',
  scanning: 'Scan',
  verifying: 'Verify',
  verified: 'Verified',
  passport: 'Passport',
  traceability: 'Traceability',
};

const STATUS_LABELS: Record<PassportJourneyState, string> = {
  idle: 'Ready to scan',
  scanning: 'Locating product',
  verifying: 'Verifying identity',
  verified: 'Product verified',
  passport: 'Passport ready',
  traceability: 'Traceability verified',
};

function useMediaQuery(query: string) {
  const getMatches = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(query).matches;
  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      return undefined;
    }

    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function useObservedWidth(elementRef: React.RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const updateWidth = (nextWidth = element.getBoundingClientRect().width) => {
      setWidth((currentWidth) =>
        Math.abs(currentWidth - nextWidth) < 0.5 ? currentWidth : nextWidth,
      );
    };

    updateWidth();
    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver((entries) => {
            const entry = entries[0];
            updateWidth(entry?.contentRect.width);
          });
    resizeObserver?.observe(element);
    const handleWindowResize = () => updateWidth();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [elementRef]);

  return width;
}

interface DesktopPassportStoryProps extends PassportStoryProps {
  passport: ProductPassport;
  reducedMotion: boolean;
}

const DesktopPassportStory: React.FC<DesktopPassportStoryProps> = ({
  passport,
  reducedMotion,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const currentStateRef = useRef<PassportJourneyState>('idle');
  const currentTraceStepRef = useRef(-1);
  const [journeyState, setJourneyState] =
    useState<PassportJourneyState>('idle');
  const [activePage, setActivePage] = useState(0);
  const [activeTraceStep, setActiveTraceStep] = useState(-1);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) return undefined;

    const stage = root.querySelector<HTMLElement>('[data-passport-stage]');
    const tag = root.querySelector<HTMLElement>('[data-garment-tag]');
    const tagOrigin = root.querySelector<HTMLElement>('[data-tag-origin]');
    const qrFrame = root.querySelector<HTMLElement>('[data-qr-frame]');
    const phoneTarget = root.querySelector<HTMLElement>(
      '[data-phone-qr-target]',
    );
    const phone = root.querySelector<HTMLElement>('[data-phone]');
    const productScene =
      root.querySelector<HTMLElement>('[data-product-scene]');
    const packaging = root.querySelector<SVGElement>('[data-packaging-art]');
    const floatingStatus = root.querySelector<HTMLElement>(
      '[data-floating-status]',
    );
    const idleCopy = root.querySelector<HTMLElement>(
      '[data-story-copy="idle"]',
    );
    const scanCopy = root.querySelector<HTMLElement>(
      '[data-story-copy="scan"]',
    );
    const verifiedCopy = root.querySelector<HTMLElement>(
      '[data-story-copy="verified"]',
    );
    const passportCopy = root.querySelector<HTMLElement>(
      '[data-story-copy="passport"]',
    );
    const traceCopy = root.querySelector<HTMLElement>(
      '[data-story-copy="traceability"]',
    );
    const phoneIdle =
      root.querySelector<HTMLElement>('[data-phone-idle]');
    const phoneVerified = root.querySelector<HTMLElement>(
      '[data-phone-verified]',
    );
    const phonePassport = root.querySelector<HTMLElement>(
      '[data-phone-passport]',
    );
    const scanCorners = root.querySelectorAll<HTMLElement>(
      '[data-scan-corner]',
    );
    const scanBeam =
      root.querySelector<HTMLElement>('[data-scan-beam]');
    const verificationRipple = root.querySelector<HTMLElement>(
      '[data-verification-ripple]',
    );
    const verificationCircle = root.querySelector<SVGElement>(
      '[data-verification-circle]',
    );
    const verificationCheck = root.querySelector<SVGElement>(
      '[data-verification-check]',
    );
    const traceLine =
      root.querySelector<SVGPathElement>('[data-trace-line]');
    const traceSteps =
      root.querySelectorAll<HTMLElement>('[data-trace-step]');

    if (
      !stage ||
      !tag ||
      !tagOrigin ||
      !qrFrame ||
      !phoneTarget ||
      !phone ||
      !productScene ||
      !packaging ||
      !floatingStatus ||
      !idleCopy ||
      !scanCopy ||
      !verifiedCopy ||
      !passportCopy ||
      !traceCopy ||
      !phoneIdle ||
      !phoneVerified ||
      !phonePassport ||
      !scanBeam ||
      !verificationRipple ||
      !verificationCircle ||
      !verificationCheck ||
      !traceLine
    ) {
      return undefined;
    }

    const scrollRoot = root.closest<HTMLElement>(
      '[data-dashboard-scroll-root]',
    );
    const scroller: HTMLElement | Window = scrollRoot ?? window;
    const matchMedia = gsap.matchMedia();
    const context = gsap.context(() => {
      matchMedia.add(PINNED_STORY_VIEWPORT_QUERY, () => {
        const offsetFromOrigin = (
          target: HTMLElement,
          horizontalBias = 0.5,
          verticalBias = 0.5,
        ) => {
          const originRect = tagOrigin.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          return {
            x:
              targetRect.left +
              targetRect.width * horizontalBias -
              (originRect.left + originRect.width / 2),
            y:
              targetRect.top +
              targetRect.height * verticalBias -
              (originRect.top + originRect.height / 2),
          };
        };
        const offsetToStageCentre = () => {
          const originRect = tagOrigin.getBoundingClientRect();
          const stageRect = stage.getBoundingClientRect();
          return {
            x:
              stageRect.left +
              stageRect.width * 0.51 -
              (originRect.left + originRect.width / 2),
            y:
              stageRect.top +
              stageRect.height * 0.5 -
              (originRect.top + originRect.height / 2),
          };
        };

        gsap.set([scanCopy, verifiedCopy, passportCopy, traceCopy], {
          autoAlpha: 0,
          y: 24,
        });
        gsap.set([phoneVerified, phonePassport], { autoAlpha: 0 });
        gsap.set(scanCorners, { autoAlpha: 0, scale: 0.86 });
        gsap.set(floatingStatus, { autoAlpha: 0, y: 14 });
        gsap.set(scanBeam, {
          autoAlpha: 0,
          y: () => -qrFrame.clientHeight * 0.04,
        });
        gsap.set(verificationRipple, { autoAlpha: 0, scale: 0.8 });
        gsap.set(verificationCircle, {
          strokeDasharray: 190,
          strokeDashoffset: 190,
        });
        gsap.set(verificationCheck, {
          strokeDasharray: 70,
          strokeDashoffset: 70,
        });
        gsap.set(traceLine, {
          strokeDasharray: 1,
          strokeDashoffset: 1,
        });
        gsap.set(traceSteps, { autoAlpha: 0.16, y: 12 });

        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: stage,
            scroller,
            start: 'top top',
            end: () =>
              `+=${Math.max(
                (scrollRoot?.clientHeight ?? window.innerHeight) * 6.2,
                4600,
              )}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .addLabel('idle', 0)
          .to(idleCopy, { autoAlpha: 1, duration: 0.8 })
          .addLabel('scanning', 0.8)
          .to(idleCopy, { autoAlpha: 0, y: -18, duration: 0.36 }, 0.8)
          .to(scanCopy, { autoAlpha: 1, y: 0, duration: 0.44 }, 0.92)
          .to(packaging, { autoAlpha: 0.18, scale: 0.95, duration: 0.68 }, 0.84)
          .to(
            tag,
            {
              x: () => offsetToStageCentre().x,
              y: () => offsetToStageCentre().y,
              scale: 1.46,
              duration: 0.82,
            },
            0.86,
          )
          .to(qrFrame, { scale: 1.18, duration: 0.58 }, 1.06)
          .to(
            scanCorners,
            { autoAlpha: 1, scale: 1, stagger: 0.035, duration: 0.28 },
            1.2,
          )
          .to(
            floatingStatus,
            { autoAlpha: 1, y: 0, duration: 0.32 },
            1.25,
          )
          .to(scanBeam, { autoAlpha: 0.82, duration: 0.12 }, 1.28)
          .to(
            scanBeam,
            { y: () => qrFrame.clientHeight * 0.92, duration: 0.5 },
            1.38,
          )
          .set(scanBeam, { y: () => -qrFrame.clientHeight * 0.04 }, 1.9)
          .to(
            scanBeam,
            { y: () => qrFrame.clientHeight * 0.92, duration: 0.52 },
            1.92,
          )
          .addLabel('verifying', 2.34)
          .set(scanBeam, { y: () => -qrFrame.clientHeight * 0.04 }, 2.44)
          .to(
            scanBeam,
            { y: () => qrFrame.clientHeight * 0.92, duration: 0.56 },
            2.46,
          )
          .to(qrFrame, { scale: 1.24, duration: 0.34 }, 2.48)
          .to(qrFrame, { scale: 1.18, duration: 0.34 }, 2.84)
          .addLabel('verified', 3.2)
          .to(scanBeam, { autoAlpha: 0, duration: 0.18 }, 3.2)
          .to(
            verificationRipple,
            { autoAlpha: 0.7, scale: 1.5, duration: 0.24 },
            3.2,
          )
          .to(
            verificationRipple,
            { autoAlpha: 0, scale: 1.82, duration: 0.3 },
            3.44,
          )
          .to(tag, { scale: 1.51, duration: 0.09 }, 3.2)
          .to(tag, { scale: 1.43, duration: 0.15 }, 3.29)
          .to(scanCopy, { autoAlpha: 0, y: -18, duration: 0.3 }, 3.28)
          .to(
            verifiedCopy,
            { autoAlpha: 1, y: 0, duration: 0.42 },
            3.45,
          )
          .to(
            tag,
            {
              x: () => offsetFromOrigin(phoneTarget).x,
              y: () => offsetFromOrigin(phoneTarget).y,
              scale: () =>
                Math.max(
                  0.28,
                  phoneTarget.getBoundingClientRect().width /
                    tagOrigin.getBoundingClientRect().width,
                ),
              duration: 0.92,
            },
            3.78,
          )
          .to(qrFrame, { scale: 1, duration: 0.46 }, 3.84)
          .to(phoneIdle, { autoAlpha: 0, duration: 0.32 }, 4.04)
          .to(phoneVerified, { autoAlpha: 1, duration: 0.44 }, 4.34)
          .to(tag, { autoAlpha: 0, duration: 0.22 }, 4.48)
          .to(
            verificationCircle,
            { strokeDashoffset: 0, duration: 0.42 },
            4.38,
          )
          .to(
            verificationCheck,
            { strokeDashoffset: 0, duration: 0.3 },
            4.65,
          )
          .to(
            floatingStatus,
            { autoAlpha: 0, y: 10, duration: 0.28 },
            4.86,
          )
          .addLabel('passport', 5.18)
          .to(
            verifiedCopy,
            { autoAlpha: 0, y: -18, duration: 0.3 },
            5.18,
          )
          .to(
            passportCopy,
            { autoAlpha: 1, y: 0, duration: 0.44 },
            5.36,
          )
          .to(phoneVerified, { autoAlpha: 0, duration: 0.3 }, 5.2)
          .to(phonePassport, { autoAlpha: 1, duration: 0.42 }, 5.4)
          .to(phone, { scale: 1, duration: 1.55 }, 5.52)
          .addLabel('traceability', 7.14)
          .to(
            passportCopy,
            { autoAlpha: 0, y: -18, duration: 0.3 },
            7.14,
          )
          .to(traceCopy, { autoAlpha: 1, y: 0, duration: 0.46 }, 7.32)
          .to(productScene, { autoAlpha: 0, duration: 0.2 }, 7.14)
          .to(phone, { xPercent: 3, scale: 0.96, duration: 0.52 }, 7.32)
          .to(traceLine, { strokeDashoffset: 0, duration: 1.72 }, 7.48)
          .to(
            traceSteps,
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.25,
              duration: 0.32,
            },
            7.5,
          )
          .to(phone, { scale: 0.96, duration: 0.8 }, 8.75);

        const updateStoryState = () => {
          const time = timeline.time();
          const nextState: PassportJourneyState =
            time >= timeline.labels.traceability
              ? 'traceability'
              : time >= timeline.labels.passport
                ? 'passport'
                : time >= timeline.labels.verified
                  ? 'verified'
                  : time >= timeline.labels.verifying
                    ? 'verifying'
                    : time >= timeline.labels.scanning
                      ? 'scanning'
                      : 'idle';

          if (nextState !== currentStateRef.current) {
            currentStateRef.current = nextState;
            setJourneyState(nextState);
          }

          const traceDuration = timeline.duration() - timeline.labels.traceability;
          const traceProgress =
            traceDuration > 0
              ? Math.max(
                  0,
                  Math.min(
                    1,
                    (time - timeline.labels.traceability) / traceDuration,
                  ),
                )
              : 0;
          const nextTraceStep =
            nextState === 'traceability'
              ? Math.min(
                  passport.traceability.length - 1,
                  Math.floor(traceProgress * passport.traceability.length),
                )
              : -1;

          if (nextTraceStep !== currentTraceStepRef.current) {
            currentTraceStepRef.current = nextTraceStep;
            setActiveTraceStep(nextTraceStep);
          }
        };

        timeline.eventCallback('onUpdate', updateStoryState);
        triggerRef.current = timeline.scrollTrigger ?? null;

        return () => {
          timeline.eventCallback('onUpdate', null);
          triggerRef.current = null;
        };
      });
    }, root);

    let cancelled = false;
    void document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      matchMedia.revert();
      context.revert();
    };
  }, [passport, reducedMotion]);

  // During traceability the phone shows the manufacturing page, derived rather
  // than synced through state so the carousel stays in one source of truth.
  const manufacturingPage = passport.pages.findIndex(
    (page) => page.id === 'manufacturing-journey',
  );
  const visiblePage =
    journeyState === 'traceability' && manufacturingPage >= 0
      ? manufacturingPage
      : activePage;

  const scrollToProgress = useCallback(
    (progress: number) => {
      const trigger = triggerRef.current;
      const root = rootRef.current;
      if (!trigger || !root) return;
      const target = trigger.start + (trigger.end - trigger.start) * progress;
      const scrollRoot = root.closest<HTMLElement>(
        '[data-dashboard-scroll-root]',
      );
      const behavior: ScrollBehavior = reducedMotion ? 'auto' : 'smooth';

      if (scrollRoot) {
        scrollRoot.scrollTo({ top: target, behavior });
      } else {
        window.scrollTo({ top: target, behavior });
      }
    },
    [reducedMotion],
  );

  const explorePassport = useCallback(() => {
    scrollToProgress(STATE_SCROLL_PROGRESS.scanning);
    rootRef.current
      ?.querySelector<HTMLButtonElement>('[data-state-control="scanning"]')
      ?.focus({ preventScroll: true });
  }, [scrollToProgress]);

  return (
    <div
      ref={rootRef}
      className="passport-story passport-story--landing passport-story--desktop"
      data-passport-story
      data-journey-state={journeyState}
      data-motion-mode="full"
    >
      <section
        className="passport-story__stage"
        data-passport-stage
        aria-label="Digital product passport journey"
      >
        <ScanScene
          passport={passport}
          state={journeyState}
          status={STATUS_LABELS[journeyState]}
          activePage={visiblePage}
          activeTraceStep={activeTraceStep}
          onActivePageChange={setActivePage}
          onExplore={explorePassport}
        />

        <ol
          className="passport-story__state-rail"
          aria-label="Passport journey states"
        >
          {PASSPORT_JOURNEY_STATES.map((state, index) => (
            <li key={state}>
              <button
                type="button"
                onClick={() => scrollToProgress(STATE_SCROLL_PROGRESS[state])}
                data-state-control={state}
                aria-current={state === journeyState ? 'step' : undefined}
                aria-label={`${String(index + 1).padStart(2, '0')} ${
                  STATE_LABELS[state]
                } - go to state`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{STATE_LABELS[state]}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

interface MobilePassportStoryProps extends PassportStoryProps {
  passport: ProductPassport;
  reducedMotion: boolean;
}

const MobilePassportStory: React.FC<MobilePassportStoryProps> = ({
  passport,
  reducedMotion,
}) => {
  const timersRef = useRef<number[]>([]);
  const scanSectionRef = useRef<HTMLElement>(null);
  const sampleSectionRef = useRef<HTMLElement>(null);
  const [scanState, setScanState] = useState<PassportJourneyState>('idle');
  const [scanStatus, setScanStatus] = useState(STATUS_LABELS.idle);
  const [activePage, setActivePage] = useState(0);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const runScan = useCallback(() => {
    clearTimers();
    scanSectionRef.current?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'center',
    });
    scanSectionRef.current
      ?.querySelector<HTMLElement>('h2')
      ?.focus({ preventScroll: true });

    if (reducedMotion) {
      setScanState('verified');
      setScanStatus(STATUS_LABELS.verified);
      return;
    }

    setScanState('scanning');
    setScanStatus(STATUS_LABELS.scanning);
    timersRef.current = [
      window.setTimeout(() => {
        setScanState('verifying');
        setScanStatus(STATUS_LABELS.verifying);
      }, 720),
      window.setTimeout(() => {
        setScanState('verified');
        setScanStatus(STATUS_LABELS.verified);
      }, 1540),
    ];
  }, [clearTimers, reducedMotion]);

  return (
    <div
      className="passport-story passport-story--landing passport-story--mobile"
      data-passport-story
      data-journey-state={scanState}
      data-motion-mode={reducedMotion ? 'reduced' : 'light'}
    >
      <section
        className="passport-mobile"
        aria-label="Digital product passport journey"
      >
        <section className="passport-mobile__section passport-mobile__product">
          <div className="passport-mobile__copy">
            <p className="passport-story__eyebrow">
              <span>01</span>
              Product
            </p>
            <h1>Every product has a story.</h1>
            <p>
              BrandCodes turns the GS1 2D barcode on your pack into a verified
              digital product passport - one scan for shoppers, retailers and
              regulators.
            </p>
            <div className="passport-story__actions">
              <button
                type="button"
                className="passport-story__primary-action"
                onClick={runScan}
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
          </div>
          <div className="passport-mobile__still-life">
            <ProductPackagingIllustration />
            <PassportGarmentTag passport={passport} state="idle" />
          </div>
        </section>

        <section
          ref={scanSectionRef}
          className="passport-mobile__section passport-mobile__scan"
          aria-labelledby="passport-mobile-scan-title"
        >
          <div className="passport-mobile__copy">
            <p className="passport-story__eyebrow">
              <span>02</span>
              QR scan
            </p>
            <h2 id="passport-mobile-scan-title" tabIndex={-1}>
              See a safe, simulated scan.
            </h2>
            <p>
              No camera permission is requested. The demo resolves the same
              product link a customer would scan from the garment tag.
            </p>
          </div>
          <div className="passport-mobile__scanner">
            <QRScannerAnimation
              payload={passport.digitalLink}
              state={scanState}
              status={scanStatus}
              label={`Digital passport QR code for ${passport.name}`}
            />
            {reducedMotion ? (
              <ol className="passport-mobile__static-statuses">
                <li>Locating product</li>
                <li>Verifying identity</li>
                <li>Product verified</li>
              </ol>
            ) : null}
            <button
              type="button"
              className="passport-story__text-action"
              onClick={runScan}
            >
              {scanState === 'idle' ? 'Start simulated scan' : 'Replay scan'}
            </button>
          </div>
        </section>

        <section
          className="passport-mobile__section passport-mobile__phone-section"
          aria-labelledby="passport-mobile-verified-title"
        >
          <div className="passport-mobile__copy">
            <p className="passport-story__eyebrow">
              <span>03</span>
              Product verified
            </p>
            <h2 id="passport-mobile-verified-title">
              The code becomes a trusted product record.
            </h2>
          </div>
          <PhoneMockup
            passport={passport}
            state="verified"
            activePage={0}
            onActivePageChange={() => undefined}
            renderPassportPages={false}
          />
        </section>

        <section
          ref={sampleSectionRef}
          id="sample-passport"
          className="passport-mobile__section passport-mobile__phone-section"
          aria-labelledby="passport-mobile-pages-title"
        >
          <div className="passport-mobile__copy">
            <p className="passport-story__eyebrow">
              <span>04</span>
              Digital passport
            </p>
            <h2 id="passport-mobile-pages-title" tabIndex={-1}>
              Six useful views, built for touch.
            </h2>
            <p>{passport.pages[activePage]?.detail}</p>
          </div>
          <PhoneMockup
            passport={passport}
            state="passport"
            activePage={activePage}
            onActivePageChange={setActivePage}
          />
        </section>

        <section className="passport-mobile__section passport-mobile__trace">
          <TraceabilityTimeline passport={passport} />
        </section>
      </section>
    </div>
  );
};

export const PassportStory: React.FC<PassportStoryProps> = ({
  passport = organicCottonOvershirtPassport,
}) => {
  const layoutProbeRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const supportsPinnedViewport = useMediaQuery(PINNED_STORY_VIEWPORT_QUERY);
  const storyWidth = useObservedWidth(layoutProbeRef);
  const supportsPinnedStory =
    supportsPinnedViewport && storyWidth >= MIN_PINNED_STORY_WIDTH;

  useEffect(() => {
    if (!supportsPinnedStory || reducedMotion) return undefined;
    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(frame);
  }, [reducedMotion, storyWidth, supportsPinnedStory]);

  return (
    <>
      <div
        ref={layoutProbeRef}
        className="passport-story__layout-probe"
        aria-hidden="true"
      />
      {supportsPinnedStory && !reducedMotion ? (
        <DesktopPassportStory passport={passport} reducedMotion={false} />
      ) : (
        <MobilePassportStory
          passport={passport}
          reducedMotion={reducedMotion}
        />
      )}
    </>
  );
};

export default PassportStory;
