import React from 'react';
import Button from '../button/Button';
import styles from './UserChoise.module.scss';

const UserChoise = ({ city, address, btnText, onClick, disable_btn }) => {
  return (
    <div className={styles.user_choise}>
      <div className={styles.header}>Ваш заказ:</div>
      <div className={styles.point}>
        <div>Пункт выдачи</div>
        <div className={styles.dots}></div>
        <div className={styles.address}>
          {city}
          <br></br>
          {address}
        </div>
      </div>
      <div className={styles.price}>
        <b>Цена:</b> от 8000 до 12000 Р
      </div>
      <Button innerText={btnText} onClick={onClick} disabled={disable_btn} />
    </div>
  );
};

export default UserChoise;
