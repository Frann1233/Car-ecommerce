import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styles from './ImageSlider.module.css';
import { useComponentStore } from '../../stores/Store';

const ImageSlider = observer(({ slides, leftArrowLabel, rightArrowLabel }) => {
  const { imageSliderStore } = useComponentStore();
  const goToPrevious = () => {
    const isFirstSlide = imageSliderStore.currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : imageSliderStore.currentIndex - 1;
    imageSliderStore.setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = imageSliderStore.currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : imageSliderStore.currentIndex + 1;
    imageSliderStore.setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    imageSliderStore.setCurrentIndex(slideIndex);
  };
  const sliderStyles = {
    backgroundImage: `url(${slides[imageSliderStore.currentIndex].url})`,
  };
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.leftArrowStyles} role="button" onKeyDown={goToPrevious} tabIndex={-1} onClick={goToPrevious}>
          {leftArrowLabel}
        </div>
        <div className={styles.rightArrowStyles} role="button" onKeyDown={goToPrevious} tabIndex={-1} onClick={goToNext}>
          {rightArrowLabel}
        </div>
        <div className={styles.slides} style={sliderStyles} />
      </div>
      <div className={styles.paginationSlider}>
        {slides.map((slide) => (
          <div
            role="button"
            onKeyDown={goToPrevious}
            tabIndex={-1}
            className={styles.dotStyles}
            key={`${slide.id}-slide`}
            onClick={() => goToSlide(slide.id)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
});

ImageSlider.propTypes = {
  slides: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  leftArrowLabel: PropTypes.string.isRequired,
  rightArrowLabel: PropTypes.string.isRequired,
};

export default ImageSlider;
