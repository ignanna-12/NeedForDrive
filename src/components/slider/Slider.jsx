import React, { useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import Slide1 from '../../files/images/Slide1.png';
import Slide2 from '../../files/images/Slide2.png';
import Slide3 from '../../files/images/Slide3.png';
import Slide4 from '../../files/images/Slide4.png';

const images = [
  <img key={Slide1} src={Slide1} alt={Slide1} />,
  <img key={Slide2} src={Slide2} alt={Slide2} />,
  <img key={Slide3} src={Slide3} alt={Slide3} />,
  <img key={Slide4} src={Slide4} alt={Slide4} />,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const Interval = setInterval(() => {
  //     setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  //   }, 30000);
  //   return () => clearInterval();
  // }, []);
  const onClickLeft = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };
  const onClickRight = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className={styles.slider}>
      <div className={styles.slider_arrows}>
        <button className={styles.slider_btn} onClick={onClickLeft}>
          Left
        </button>
        <button className={styles.slider_btn} onClick={onClickRight}>
          Right
        </button>
      </div>
      <div className={styles.slider_img_prev} key={prevImageIndex}>
        {images[prevImageIndex]}
      </div>
      <div className={styles.slider_img} key={activeIndex}>
        {images[activeIndex]}
      </div>
      <div className={styles.slider_img_next} key={nextImageIndex}>
        {images[nextImageIndex]}
      </div>
    </div>
  );
};

export default Slider;
