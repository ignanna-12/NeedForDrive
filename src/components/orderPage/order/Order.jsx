import React from 'react';
import Button from '../../common/button/Button';
import styles from './Order.module.scss';

const Order = ({ city, address, model, priceMin, priceMax, btnText, onClick, disable_btn }) => (
  <div className={styles.user_choise}>
    <div className={styles.header}>Ваш заказ:</div>
    <div className={city ? styles.visible : styles.none_display}>
      <div className={styles.point}>
        <div>Пункт выдачи</div>
        <div className={styles.dots}></div>
        <div className={styles.address}>
          {city}
          <br></br>
          {address}
        </div>
      </div>
    </div>
    <div className={model ? styles.visible : styles.none_display}>
      <div className={styles.point}>
        <div>Модель</div>
        <div className={styles.dots}></div>
        <div className={styles.address}>{model}</div>
      </div>
      <div className={styles.price}>
        <b>Цена:</b> от {priceMin} до {priceMax} Р
      </div>
    </div>
    <Button innerText={btnText} onClick={onClick} disabled={disable_btn} />
  </div>
);

export default Order;
