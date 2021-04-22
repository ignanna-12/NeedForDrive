import React from 'react';
import styles from './CellTableCar.module.scss';
import defCar from '../../../../assets/images/car.jpg';

const CellTableCar = ({ model, priceMin, priceMax, image, colors, onChangeModel, id, number }) => {
  return (
    <button
      className={styles.cell}
      onClick={(e) => {
        onChangeModel(model, priceMin, priceMax, colors, id, number, image);
      }}
    >
      <div>
        <div className={styles.model}>{model ? model : 'Model'}</div>
        <div className={styles.price}>
          {priceMin ? priceMin : '0'} - {priceMax ? priceMax : '0'} ₽
        </div>
      </div>
      <div className={styles.car_image}>
        <img src={image ? image : defCar} />
      </div>
    </button>
  );
};

export default CellTableCar;
