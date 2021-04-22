import React from 'react';
import { useSelector } from 'react-redux';
import {
  chairSel,
  periodSel,
  priceSel,
  rateNameSel,
  tankSel,
  wheelSel,
} from '../../../redux/selectors/selectors';
import Button from '../../common/button/Button';
import styles from './Order.module.scss';
import OrderItem from './OrderItem';

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
  const tank = useSelector(tankSel);
  const chair = useSelector(chairSel);
  const wheel = useSelector(wheelSel);

  return (
    <div className={styles.user_choise}>
      <div className={styles.header}>Ваш заказ:</div>
      <OrderItem title={'Пункт выдачи'} value={city} text={city} addtext={address} />
      <OrderItem title={'Модель'} value={model} text={model} />
      <OrderItem title={'Цвет'} value={color} text={color} />
      <OrderItem title={'Длительность аренды'} value={period} text={period} />
      <OrderItem title={'Тариф'} value={rateName} text={rateName} />
      <OrderItem title={'Полный бак'} value={tank} text={'Да'} />
      <OrderItem title={'Детское кресло'} value={chair} text={'Да'} />
      <OrderItem title={'Правый руль'} value={wheel} text={'Да'} />
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
