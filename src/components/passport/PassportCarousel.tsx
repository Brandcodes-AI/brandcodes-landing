import React, { useEffect, useRef } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type {
  PassportPageId,
  ProductPassport,
} from './passportData';

interface PassportCarouselProps {
  passport: ProductPassport;
  activeIndex: number;
  onActivePageChange: (index: number) => void;
  interactive?: boolean;
  className?: string;
}

const updateSlideAccessibility = (swiper: SwiperInstance) => {
  swiper.slides.forEach((slide, index) => {
    const isActive = index === swiper.activeIndex;
    slide.setAttribute('aria-hidden', String(!isActive));
    slide.toggleAttribute('inert', !isActive);
  });
};

const PassportPageGlyph: React.FC<{ pageId: PassportPageId }> = ({
  pageId,
}) => {
  if (pageId === 'materials') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 29c7-1 8-9 12-18 4 9 5 17 12 18" />
        <path d="M13 22c4 0 6 2 7 7M27 22c-4 0-6 2-7 7" />
      </svg>
    );
  }

  if (pageId === 'manufacturing-journey') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="9" cy="29" r="3" />
        <circle cx="20" cy="19" r="3" />
        <circle cx="31" cy="10" r="3" />
        <path d="m11 27 7-6m4-4 7-5" />
      </svg>
    );
  }

  if (pageId === 'certifications') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 5 32 10v9c0 8-5 13-12 16-7-3-12-8-12-16v-9Z" />
        <path d="m14 20 4 4 8-9" />
      </svg>
    );
  }

  if (pageId === 'environmental-impact') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M31 8C18 9 10 15 10 24c0 5 4 8 9 8 9 0 13-10 12-24Z" />
        <path d="M8 34c5-9 11-14 19-19" />
      </svg>
    );
  }

  if (pageId === 'care-and-repair') {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="m9 30 8-8m6-6 8-8M26 7l7 7M7 26l7 7" />
        <path d="M17 22 9 14l5-5 8 8M23 16l8 8-5 5-8-8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M10 8h20v24H10z" />
      <path d="M15 14h10M15 20h10M15 26h6" />
    </svg>
  );
};

export const PassportCarousel: React.FC<PassportCarouselProps> = ({
  passport,
  activeIndex,
  onActivePageChange,
  interactive = true,
  className = '',
}) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed || swiper.activeIndex === activeIndex) {
      return;
    }
    swiper.slideTo(activeIndex, 320);
  }, [activeIndex]);

  const goToPreviousPage = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextPage = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div
      className={`relative min-h-0 flex-1 px-[0.2rem] pb-[0.45rem] ${className}`.trim()}
      data-passport-carousel
    >
      <Swiper
        modules={[A11y, Keyboard]}
        className="h-[calc(100%-3.15rem)]"
        slidesPerView={1}
        speed={360}
        threshold={5}
        resistanceRatio={0.72}
        simulateTouch
        allowTouchMove={interactive}
        grabCursor={interactive}
        keyboard={{
          enabled: interactive,
          onlyInViewport: true,
          pageUpDown: false,
        }}
        a11y={{
          enabled: true,
          containerRole: 'region',
          containerRoleDescriptionMessage: 'Product passport pages',
          itemRoleDescriptionMessage: 'Product passport page',
          slideLabelMessage: '{{index}} of {{slidesLength}}',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          if (swiper.activeIndex !== activeIndex) {
            swiper.slideTo(activeIndex, 0);
          }
          updateSlideAccessibility(swiper);
        }}
        onSlideChange={(swiper) => {
          updateSlideAccessibility(swiper);
          onActivePageChange(swiper.activeIndex);
        }}
      >
        {passport.pages.map((page, index) => (
          <SwiperSlide key={page.id}>
            <article
              className="h-full overflow-hidden px-[0.95rem] pt-[0.8rem] pb-[2.1rem]"
              aria-labelledby={`passport-page-${page.id}`}
              data-passport-page={page.id}
            >
              <div className="relative flex min-h-[5.7rem] items-center justify-center overflow-hidden border border-[var(--passport-line)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--passport-paper)_82%,var(--passport-forest-soft))_0%,var(--passport-paper)_100%)]">
                <span className="grid size-[4.15rem] place-items-center text-[var(--passport-forest-strong)] [&_svg]:w-[3.2rem] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.35] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
                  <PassportPageGlyph pageId={page.id} />
                </span>
                <span className="absolute top-[0.48rem] right-2 text-[0.56rem] font-bold tracking-[0.08em] text-[var(--passport-charcoal-soft)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-[0.68rem] mb-[0.24rem] text-[0.5rem] font-[750] tracking-[0.12em] text-[var(--passport-forest-strong)] uppercase">
                {page.eyebrow}
              </p>
              <h3
                className="m-0! font-['Newsreader',serif]! text-[clamp(1.18rem,1.8vw,1.55rem)] leading-none! font-[470]! tracking-[-0.035em]!"
                id={`passport-page-${page.id}`}
              >
                {page.title}
              </h3>
              <p className="mt-[0.42rem] mb-0 text-[clamp(0.58rem,0.72vw,0.68rem)] leading-[1.42] text-[var(--passport-charcoal-soft)]">
                {page.summary}
              </p>
              <dl className="mt-[0.62rem] mb-0 border-t border-[var(--passport-line)]">
                {page.stats.map((fact) => (
                  <div
                    className="grid grid-cols-[0.8fr_1.2fr] gap-[0.55rem] border-b border-[var(--passport-line)] py-[0.38rem]"
                    key={fact.label}
                  >
                    <dt className="text-[0.5rem] tracking-[0.05em] text-[var(--passport-charcoal-soft)] uppercase">
                      {fact.label}
                    </dt>
                    <dd className="m-0 text-right text-[0.57rem] leading-[1.35] font-[680]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-[0.45rem] bottom-0 left-[0.45rem] z-[5] grid min-h-11 grid-cols-[2.8rem_1fr_2.8rem] items-center border-t border-[var(--passport-line)] bg-[var(--passport-paper)]">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={!interactive || activeIndex === 0}
          aria-label="Previous passport page"
          className="grid size-11 place-items-center border-0 bg-transparent text-[var(--passport-charcoal)] disabled:cursor-default disabled:text-[var(--passport-line-strong)] [&_svg]:w-[1.15rem] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.55] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <span
          aria-live="polite"
          className="overflow-hidden text-center text-[0.51rem] font-[680] tracking-[0.04em] text-ellipsis whitespace-nowrap text-[var(--passport-charcoal-soft)] uppercase"
        >
          {passport.pages[activeIndex]?.label}
        </span>
        <button
          type="button"
          onClick={goToNextPage}
          disabled={
            !interactive || activeIndex === passport.pages.length - 1
          }
          aria-label="Next passport page"
          className="grid size-11 place-items-center border-0 bg-transparent text-[var(--passport-charcoal)] disabled:cursor-default disabled:text-[var(--passport-line-strong)] [&_svg]:w-[1.15rem] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.55] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PassportCarousel;
