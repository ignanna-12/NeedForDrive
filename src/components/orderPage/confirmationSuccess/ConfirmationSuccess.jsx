import React from 'react';
import styles from './ConfirmationSuccess.module.scss';

const ConfirmationSuccess = ({ orderId }) => {
  return (
    <div className={styles.lines}>
      <div className={styles.string}>Заказ номер {orderId}</div>
    </div>
  );
};

export default ConfirmationSuccess;
