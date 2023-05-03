import React from 'react';
import images from '../../constants';
import ImageSlider from '../ImageSlider/ImageSlider';
// import Navigation from '../../common/Navigation';
import styles from './FirstSection.module.css';

function FistSection() {
  // Navigation();
  const slides = [
    { id: 'slide1', url: images.bmw7, title: 'Bmw7' },
    { id: 'slide2', url: images.audi, title: 'Audi' },
    { id: 'slide3', url: images.dodgeChallenger, title: 'Dodge Challenger' },
    { id: 'slide4', url: images.fordMustang, title: 'Ford Mustang' },
    { id: 'slide5', url: images.mercedes, title: 'Mercedes' },
  ];
  return (
    <div className={styles.firstSection}>
      <div className={styles.showCase}>
        <ImageSlider
          slides={slides}
          leftArrowLabel="❮"
          rightArrowLabel="❯"
        />
      </div>

    </div>
  );
}

export default FistSection;
