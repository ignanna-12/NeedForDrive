import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = ({ title, value, text, addtext }) => {
  return (
    <div className={value ? styles.visible : styles.none_display}>
      <div className={styles.point}>
        <div>{title}</div>
        <div className={styles.dots}></div>
        <div className={styles.address}>
          {text}
          <br></br>
          {addtext}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
