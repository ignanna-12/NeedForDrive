import React from 'react';
import { useSelector } from 'react-redux';
import {
  dateFromSel,
  modelImageSel,
  modelNumberSel,
  orderIdSel,
  tankSel,
  userModelSel,
} from '../../../../redux/selectors/selectors';
import styles from './Summary.module.scss';

const Summary = ({ orderCanc }) => {
  const model = useSelector(userModelSel);
  const modelNumber = useSelector(modelNumberSel);
  const modelImage = useSelector(modelImageSel);
  const tank = useSelector(tankSel);
  const startDate = useSelector(dateFromSel);
  const orderId = useSelector(orderIdSel);
  const date = new Date(startDate);
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return (
    <div className={styles.summary}>
      <div className={styles.info}>
        <div className={orderId ? styles.confirm : styles.display_none}>Ваш заказ подтвержден</div>
        <div className={orderCanc ? styles.confirm : styles.display_none}>Ваш заказ отменен</div>
        <div className={styles.model}>{model}</div>
        <div className={modelNumber ? styles.number : styles.display_none}>{modelNumber}</div>
        <div className={tank ? styles.string : styles.display_none}>
          <b>Топливо:</b> 100%
        </div>
        <div className={startDate ? styles.string : styles.display_none}>
          <b>Доступна с: </b> {date.toLocaleDateString('ru', options)}
        </div>
      </div>
      <img src={modelImage}></img>
    </div>
  );
};

export default Summary;
