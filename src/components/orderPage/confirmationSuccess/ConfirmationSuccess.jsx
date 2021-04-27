import React from 'react';
import styles from './ConfirmationSuccess.module.scss';

const ConfirmationSuccess = ({ orderId }) => {
  return <div className={styles.string}>Заказ номер {orderId}</div>;
};

export default ConfirmationSuccess;
