import React from 'react';
import styles from './HeroBlock.module.scss';

const HeroBlock = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.carshering}>Каршеринг</h1>
      <h1 className={styles.need}>Need for drive</h1>
      <br></br>
      <h2 className={styles.arenda}>Поминутная аренда авто твоего города</h2>
    </div>
  );
};

export default HeroBlock;
