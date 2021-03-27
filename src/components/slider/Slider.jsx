import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import LeftArrow from '../../assets/icons/-keyboard-arrow-left_90113.svg';
import RightArrow from '../../assets/icons/-keyboard-arrow-right_90294.svg';
import styles from './Slider.module.scss';
import Slide1 from '../../assets/images/Slide1.png';
import Slide2 from '../../assets/images/Slide2.png';
import Slide3 from '../../assets/images/Slide3.png';
import Slide4 from '../../assets/images/Slide4.png';

const images = [
  <img key={1} src={Slide1} alt={Slide1} />,
  <img key={2} src={Slide2} alt={Slide2} />,
  <img key={3} src={Slide3} alt={Slide3} />,
  <img key={4} src={Slide4} alt={Slide4} />,
];
const textsH1 = ['Бесплатная парковка', 'Страховка', 'Бензин', 'Обслуживание'];
const textsH2 = [
  'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах',
  'Полная страховка автомобиля',
  'Полный бак на любой заправке города за наш счёт',
  'Автомобиль проходит еженедельное ТО',
];
const classBtn = [
  styles.slider_content_btn0,
  styles.slider_content_btn1,
  styles.slider_content_btn2,
  styles.slider_content_btn3,
];
const classBackground = [styles.slider0, styles.slider1, styles.slider2, styles.slider3];
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickLeft = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };
  const onClickRight = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className={classBackground[activeIndex]}>
      <button className={styles.slider_btn} onClick={onClickLeft}>
        <SVG src={LeftArrow} />
      </button>
      <div className={styles.slider_content}>
        <div></div>
        <div className={styles.slider_content_center}>
          <div className={styles.text_header}>{textsH1[activeIndex]}</div>
          <p>{textsH2[activeIndex]}</p>
          <button className={classBtn[activeIndex]}>Подробнее</button>
        </div>
        <div className={styles.slider_content_dots}>
          <span
            className={
              activeIndex === 0
                ? styles.slider_content_dots_span_active
                : styles.slider_content_dots_span
            }
            onClick={(e) => {
              setActiveIndex(0);
            }}
          />
          <span
            className={
              activeIndex === 1
                ? styles.slider_content_dots_span_active
                : styles.slider_content_dots_span
            }
            onClick={(e) => {
              setActiveIndex(1);
            }}
          />
          <span
            className={
              activeIndex === 2
                ? styles.slider_content_dots_span_active
                : styles.slider_content_dots_span
            }
            onClick={(e) => {
              setActiveIndex(2);
            }}
          />
          <span
            className={
              activeIndex === 3
                ? styles.slider_content_dots_span_active
                : styles.slider_content_dots_span
            }
            onClick={(e) => {
              setActiveIndex(3);
            }}
          />
        </div>
      </div>
      <button className={styles.slider_btn} onClick={onClickRight}>
        <SVG src={RightArrow} />
      </button>
    </div>
  );
};

export default Slider;
