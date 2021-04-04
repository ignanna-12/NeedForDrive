import React from 'react';
import styles from './UserChoise.module.scss';

const UserChoise = ({ city, address }) => {
  return (
    <div className={styles.user_choise}>
      <div className={styles.header}>Ваш заказ:</div>
      <div className={styles.point}>
        <div>Пункт выдачи</div>
        <div>
          {city}
          <br></br>
          {address}
        </div>
      </div>
      <div className={styles.price}>
        <p>Цена:</p> от 8000 до 12000 Р
      </div>
    </div>
  );
};

export default UserChoise;
