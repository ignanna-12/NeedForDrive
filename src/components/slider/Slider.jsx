import React, { useState } from 'react';
import styles from './Slider.module.scss';
import Slide1 from '../../files/images/Slide1.png';
import Slide2 from '../../files/images/Slide2.png';
import Slide3 from '../../files/images/Slide3.png';
import Slide4 from '../../files/images/Slide4.png';

const images = [
  <img key={1} src={Slide1} alt={Slide1} />,
  <img key={2} src={Slide2} alt={Slide2} />,
  <img key={3} src={Slide3} alt={Slide3} />,
  <img key={4} src={Slide4} alt={Slide4} />,
];
const textsH1 = [
  <h1 key={5}>Бесплатная парковка</h1>,
  <h1 key={6}>Страховка</h1>,
  <h1 key={7}>Бензин</h1>,
  <h1 key={8}>Обслуживание</h1>,
];
const textsH2 = [
  <h2 key={9}>
    Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в
    аэропортах
  </h2>,
  <h2 key={10}>Полная страховка автомобиля</h2>,
  <h2 key={11}>Полный бак на любой заправке города за наш счёт</h2>,
  <h2 key={12}>Автомобиль проходит еженедельное ТО</h2>,
];
const classBtn = [
  styles.slider_content_btn0,
  styles.slider_content_btn1,
  styles.slider_content_btn2,
  styles.slider_content_btn3,
];
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickLeft = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };
  const onClickRight = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };
  // const onClickSpan = (id) => {
  //   setActiveIndex((current) => (current = id));
  // };

  // const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1;
  // const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className={styles.slider}>
      <button className={styles.slider_btn} onClick={onClickLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
        </svg>
      </button>
      <div className={styles.slider_content}>
        <div className={styles.slider_content_center}>
          {textsH1[activeIndex]}
          {textsH2[activeIndex]}
          <button className={classBtn[activeIndex]}>Подробнее</button>
        </div>
        <div className={styles.slider_content_dots}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <button className={styles.slider_btn} onClick={onClickRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
        </svg>
      </button>
      {/* <div className={styles.slider_img_prev} key={prevImageIndex}>
        {images[prevImageIndex]}
      </div> */}
      <div className={styles.slider_img} key={activeIndex}>
        {images[activeIndex]}
      </div>
      {/* <div className={styles.slider_img_next} key={nextImageIndex}>
        {images[nextImageIndex]}
      </div> */}
    </div>
  );
};

export default Slider;
