import React from 'react';
import { useSelector } from 'react-redux';
import { periodSel, priceSel, rateNameSel } from '../../../redux/selectors/selectors';
import Button from '../../common/button/Button';
import styles from './Order.module.scss';

const Order = ({
  city,
  address,
  model,
  priceMin,
  priceMax,
  btnText,
  onClick,
  disable_btn,
  color,
}) => {
  const period = useSelector(periodSel);
  const price = useSelector(priceSel);
  const rateName = useSelector(rateNameSel);
  return (
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
      </div>
      <div className={color ? styles.visible : styles.none_display}>
        <div className={styles.point}>
          <div>Цвет</div>
          <div className={styles.dots}></div>
          <div className={styles.address}>{color}</div>
        </div>
      </div>
      <div className={period ? styles.visible : styles.none_display}>
        <div className={styles.point}>
          <div>Длительность аренды</div>
          <div className={styles.dots}></div>
          <div className={styles.address}>{period}</div>
        </div>
      </div>
      <div className={rateName ? styles.visible : styles.none_display}>
        <div className={styles.point}>
          <div>Тариф</div>
          <div className={styles.dots}></div>
          <div className={styles.address}>{rateName}</div>
        </div>
      </div>
      <div className={model ? styles.price : styles.none_display}>
        {price ? (
          <p>
            <b>Цена:</b> {price} ₽
          </p>
        ) : (
          <p>
            <b>Цена:</b> от {priceMin} до {priceMax} ₽
          </p>
        )}
      </div>
      <Button innerText={btnText} onClick={onClick} disabled={disable_btn} />
    </div>
  );
};

export default Order;
