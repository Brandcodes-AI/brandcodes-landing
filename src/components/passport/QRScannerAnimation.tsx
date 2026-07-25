import React, { useMemo } from 'react';
import QRCode from 'qrcode';

import type { PassportJourneyState } from './passportData';

interface QRScannerAnimationProps {
  payload: string;
  state: PassportJourneyState;
  status?: string;
  showStatus?: boolean;
  className?: string;
  label?: string;
}

const QUIET_ZONE = 4;

const buildQrPath = (payload: string) => {
  const qr = QRCode.create(payload, { errorCorrectionLevel: 'M' });
  const size = qr.modules.size;
  const commands: string[] = [];

  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (qr.modules.get(row, column)) {
        commands.push(
          `M${column + QUIET_ZONE} ${row + QUIET_ZONE}h1v1h-1z`,
        );
      }
    }
  }

  return {
    path: commands.join(''),
    viewBoxSize: size + QUIET_ZONE * 2,
  };
};

export const QRScannerAnimation: React.FC<QRScannerAnimationProps> = ({
  payload,
  state,
  status,
  showStatus = true,
  className = '',
  label = 'Simulated GS1 Digital Link QR code',
}) => {
  const qr = useMemo(() => buildQrPath(payload), [payload]);
  const isScanning = state === 'scanning' || state === 'verifying';
  const isVerified =
    state === 'verified' ||
    state === 'passport' ||
    state === 'traceability';

  return (
    <div
      className={`passport-qr-scanner ${className}`.trim()}
      data-qr-scanner
      data-scan-state={state}
    >
      <div
        className={`passport-qr-frame ${
          isScanning ? 'passport-qr-frame--active' : ''
        } ${isVerified ? 'passport-qr-frame--verified' : ''}`}
        data-qr-frame
      >
        <span
          className="passport-scanner-corner passport-scanner-corner--tl"
          data-scan-corner
          aria-hidden="true"
        />
        <span
          className="passport-scanner-corner passport-scanner-corner--tr"
          data-scan-corner
          aria-hidden="true"
        />
        <span
          className="passport-scanner-corner passport-scanner-corner--bl"
          data-scan-corner
          aria-hidden="true"
        />
        <span
          className="passport-scanner-corner passport-scanner-corner--br"
          data-scan-corner
          aria-hidden="true"
        />

        <svg
          className="passport-qr-code"
          viewBox={`0 0 ${qr.viewBoxSize} ${qr.viewBoxSize}`}
          role="img"
          aria-label={label}
          shapeRendering="crispEdges"
          data-qr-code
        >
          <rect
            width={qr.viewBoxSize}
            height={qr.viewBoxSize}
            className="passport-qr-code__paper"
          />
          <path d={qr.path} className="passport-qr-code__ink" />
        </svg>

        <span
          className="passport-scanner-beam"
          data-scan-beam
          aria-hidden="true"
        />
        <span
          className="passport-verification-ripple"
          data-verification-ripple
          aria-hidden="true"
        />
      </div>

      {showStatus ? (
        <div
          className="passport-scan-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span
            className={`passport-scan-status__dot ${
              isVerified ? 'passport-scan-status__dot--verified' : ''
            }`}
            aria-hidden="true"
          />
          <span>{status ?? 'Ready to scan'}</span>
        </div>
      ) : null}
    </div>
  );
};

export default QRScannerAnimation;
