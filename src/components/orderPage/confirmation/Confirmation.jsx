import React from 'react';
import styles from './Confirmation.module.scss';

const Confirmation = ({ orderId }) => {
  return (
    <div className={styles.lines}>
      <div className={styles.string}>Заказ номер {orderId}</div>
    </div>
  );
};

export default Confirmation;
