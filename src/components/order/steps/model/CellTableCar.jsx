import React from 'react';
import SVG from 'react-inlinesvg';
import styles from './CellTableCar.module.scss';
import defCar from '../../../../assets/images/car.jpg';

const CellTableCar = ({ model, priceMin, priceMax, image }) => {
  return (
    <div className={styles.cell} onClick={(e) => {}}>
      <div>
        <div className={styles.model}>{model ? model : 'Model'}</div>
        <div className={styles.price}>
          {priceMin ? priceMin : '0'} - {priceMax ? priceMax : '0'} ₽
        </div>
      </div>
      <div className={styles.car_image}>
        <img src={image ? image : defCar} />
      </div>
    </div>
  );
};

export default CellTableCar;
