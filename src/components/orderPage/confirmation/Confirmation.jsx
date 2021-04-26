import React from 'react';
import Button from '../../common/button/Button';
import styles from './Confirmation.module.scss';

const Confirmation = ({ onClick, otherOnClick }) => {
  return (
    <div className={styles.screen}>
      <div className={styles.string}>Подтвердить заказ</div>
      <div className={styles.buttons}>
        <Button innerText={'Подтвердить'} onClick={otherOnClick} />
        <Button innerText={'Вернуться'} onClick={onClick} isRed={true} />
      </div>
    </div>
  );
};

export default Confirmation;
