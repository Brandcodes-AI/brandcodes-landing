import React, { useEffect, useRef } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
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

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;

    swiper.el
      .querySelectorAll<HTMLButtonElement>('.swiper-pagination-bullet')
      .forEach((button) => {
        button.disabled = !interactive;
        button.tabIndex = interactive ? 0 : -1;
      });
  }, [interactive]);

  const goToPreviousPage = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextPage = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div
      className={`passport-carousel ${className}`.trim()}
      data-passport-carousel
    >
      <Swiper
        modules={[A11y, Keyboard, Pagination]}
        className="passport-carousel__swiper"
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
        pagination={{
          clickable: interactive,
          bulletElement: 'button',
          renderBullet: (index, className) =>
            `<button type="button" class="${className}" aria-label="Open passport page ${index + 1}"></button>`,
        }}
        a11y={{
          enabled: true,
          containerRole: 'region',
          containerRoleDescriptionMessage: 'Product passport pages',
          itemRoleDescriptionMessage: 'Product passport page',
          paginationBulletMessage: 'Open passport page {{index}}',
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
              className="passport-carousel__page"
              aria-labelledby={`passport-page-${page.id}`}
              data-passport-page={page.id}
            >
              <div className="passport-carousel__page-heading">
                <span className="passport-carousel__glyph">
                  <PassportPageGlyph pageId={page.id} />
                </span>
                <span className="passport-carousel__counter">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="passport-carousel__eyebrow">{page.eyebrow}</p>
              <h3 id={`passport-page-${page.id}`}>{page.title}</h3>
              <p className="passport-carousel__summary">{page.summary}</p>
              <dl className="passport-carousel__facts">
                {page.stats.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="passport-carousel__controls">
        <button
          type="button"
          onClick={goToPreviousPage}
          disabled={!interactive || activeIndex === 0}
          aria-label="Previous passport page"
          className="passport-carousel__arrow"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m15 6-6 6 6 6" />
          </svg>
        </button>
        <span aria-live="polite" className="passport-carousel__page-name">
          {passport.pages[activeIndex]?.label}
        </span>
        <button
          type="button"
          onClick={goToNextPage}
          disabled={
            !interactive || activeIndex === passport.pages.length - 1
          }
          aria-label="Next passport page"
          className="passport-carousel__arrow"
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
