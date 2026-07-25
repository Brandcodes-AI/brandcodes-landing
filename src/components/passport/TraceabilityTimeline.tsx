import { useId } from 'react';

import type {
  ProductPassport,
  TraceabilityVisualType,
} from './passportData';

export interface TraceabilityTimelineProps {
  passport: ProductPassport;
  activeStep?: number;
  compact?: boolean;
  className?: string;
}

interface TraceSceneProps {
  label: string;
  type: TraceabilityVisualType;
}

const TRACE_SCENE_LABELS: Record<TraceabilityVisualType, string> = {
  'cotton-field': 'Cotton growing in a field',
  'weaving-loom': 'Fabric being woven on a loom',
  overshirt: 'Finished overshirt',
  'quality-check': 'Quality inspection',
  delivery: 'Parcel arriving with its customer',
};

function TraceScene({ label, type }: TraceSceneProps) {
  const title = `${label}: ${TRACE_SCENE_LABELS[type]}`;

  if (type === 'cotton-field') {
    return (
      <svg
        className="passport-traceability__scene"
        viewBox="0 0 96 72"
        role="img"
        focusable="false"
        data-trace-visual={type}
      >
        <title>{title}</title>
        <circle
          className="passport-traceability__scene-sun"
          cx="76"
          cy="16"
          r="7"
          fill="currentColor"
        />
        <line x1="0" y1="55" x2="96" y2="55" stroke="currentColor" />
        <line x1="29" y1="55" x2="29" y2="32" stroke="currentColor" />
        <line x1="49" y1="55" x2="49" y2="27" stroke="currentColor" />
        <line x1="69" y1="55" x2="69" y2="35" stroke="currentColor" />
        <circle cx="24" cy="30" r="7" fill="none" stroke="currentColor" />
        <circle cx="33" cy="27" r="7" fill="none" stroke="currentColor" />
        <circle cx="44" cy="25" r="7" fill="none" stroke="currentColor" />
        <circle cx="53" cy="29" r="7" fill="none" stroke="currentColor" />
        <circle cx="65" cy="33" r="7" fill="none" stroke="currentColor" />
        <circle cx="73" cy="30" r="7" fill="none" stroke="currentColor" />
      </svg>
    );
  }

  if (type === 'weaving-loom') {
    return (
      <svg
        className="passport-traceability__scene"
        viewBox="0 0 96 72"
        role="img"
        focusable="false"
        data-trace-visual={type}
      >
        <title>{title}</title>
        <rect
          x="18"
          y="10"
          width="60"
          height="50"
          rx="2"
          fill="none"
          stroke="currentColor"
        />
        <line x1="27" y1="10" x2="27" y2="60" stroke="currentColor" />
        <line x1="37" y1="10" x2="37" y2="60" stroke="currentColor" />
        <line x1="47" y1="10" x2="47" y2="60" stroke="currentColor" />
        <line x1="57" y1="10" x2="57" y2="60" stroke="currentColor" />
        <line x1="67" y1="10" x2="67" y2="60" stroke="currentColor" />
        <line x1="18" y1="23" x2="78" y2="23" stroke="currentColor" />
        <line x1="18" y1="35" x2="78" y2="35" stroke="currentColor" />
        <line x1="18" y1="47" x2="78" y2="47" stroke="currentColor" />
        <line x1="12" y1="65" x2="84" y2="65" stroke="currentColor" />
      </svg>
    );
  }

  if (type === 'overshirt') {
    return (
      <svg
        className="passport-traceability__scene"
        viewBox="0 0 96 72"
        role="img"
        focusable="false"
        data-trace-visual={type}
      >
        <title>{title}</title>
        <polygon
          points="34,12 48,18 62,12 80,25 70,37 64,31 64,62 32,62 32,31 26,37 16,25"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <polyline
          points="40,15 48,26 56,15"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <line x1="48" y1="26" x2="48" y2="62" stroke="currentColor" />
        <rect
          x="52"
          y="34"
          width="8"
          height="9"
          fill="none"
          stroke="currentColor"
        />
        <circle cx="44" cy="33" r="1.5" fill="currentColor" />
        <circle cx="44" cy="42" r="1.5" fill="currentColor" />
        <circle cx="44" cy="51" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'quality-check') {
    return (
      <svg
        className="passport-traceability__scene"
        viewBox="0 0 96 72"
        role="img"
        focusable="false"
        data-trace-visual={type}
      >
        <title>{title}</title>
        <rect
          x="17"
          y="12"
          width="42"
          height="48"
          rx="2"
          fill="none"
          stroke="currentColor"
        />
        <line x1="26" y1="24" x2="49" y2="24" stroke="currentColor" />
        <line x1="26" y1="34" x2="43" y2="34" stroke="currentColor" />
        <circle cx="61" cy="42" r="14" fill="none" stroke="currentColor" />
        <line x1="71" y1="52" x2="82" y2="63" stroke="currentColor" />
        <polyline
          points="54,42 59,47 68,36"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="passport-traceability__scene"
      viewBox="0 0 96 72"
      role="img"
      focusable="false"
      data-trace-visual={type}
    >
      <title>{title}</title>
      <polygon
        points="11,34 30,19 49,34"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <rect
        x="16"
        y="34"
        width="28"
        height="27"
        fill="none"
        stroke="currentColor"
      />
      <rect
        x="61"
        y="34"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
      />
      <polyline
        points="61,34 72,26 83,34"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <line x1="72" y1="26" x2="72" y2="49" stroke="currentColor" />
      <line x1="50" y1="55" x2="58" y2="55" stroke="currentColor" />
      <polyline
        points="54,51 58,55 54,59"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerifiedMark() {
  return (
    <svg
      className="passport-traceability__verified-icon"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" />
      <polyline
        points="6,10 9,13 14,7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TraceabilityTimeline({
  passport,
  activeStep,
  compact = false,
  className,
}: TraceabilityTimelineProps) {
  const titleId = useId();
  const lastStepIndex = passport.traceability.length - 1;
  const requestedActiveStep =
    activeStep === undefined ? lastStepIndex : Math.trunc(activeStep);
  const resolvedActiveStep = Math.max(
    -1,
    Math.min(requestedActiveStep, lastStepIndex),
  );
  const classes = [
    'passport-traceability',
    compact ? 'passport-traceability--compact' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={classes}
      aria-labelledby={titleId}
      data-active-step={resolvedActiveStep}
      data-complete={resolvedActiveStep === lastStepIndex}
    >
      <header className="passport-traceability__intro">
        <p className="passport-traceability__eyebrow">Verified traceability</p>
        <h2 className="passport-traceability__title" id={titleId}>
          Follow every handover
        </h2>
        <p className="passport-traceability__summary">
          Each milestone is linked to evidence recorded in this product
          passport.
        </p>
      </header>

      <div className="passport-traceability__track">
        <svg
          className="passport-traceability__line"
          viewBox="0 0 24 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M 12 2 L 12 98"
            fill="none"
            stroke="currentColor"
            pathLength={1}
            vectorEffect="non-scaling-stroke"
            data-trace-line="true"
          />
        </svg>

        <ol className="passport-traceability__steps">
          {passport.traceability.map((step, index) => {
            const isActive = index <= resolvedActiveStep;
            const isCurrent = index === resolvedActiveStep;

            return (
              <li
                className="passport-traceability__step"
                key={step.id}
                data-trace-step={step.id}
                data-trace-index={index}
                data-active={isActive}
                data-current={isCurrent}
                data-verified={step.verified}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span
                  className="passport-traceability__node"
                  aria-hidden="true"
                />

                <div className="passport-traceability__visual">
                  <TraceScene label={step.label} type={step.visualType} />
                </div>

                <div className="passport-traceability__content">
                  <div className="passport-traceability__heading">
                    <h3 className="passport-traceability__step-title">
                      {step.label}
                    </h3>
                    {step.verified && (
                      <span className="passport-traceability__verified">
                        <VerifiedMark />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="passport-traceability__meta">
                    <span>{step.location}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={step.dateTime}>{step.date}</time>
                  </p>
                  <p className="passport-traceability__description">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default TraceabilityTimeline;
