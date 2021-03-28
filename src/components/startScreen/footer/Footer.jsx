import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
      <p className={styles.phone}>8 (495) 234-22-44</p>
    </div>
  );
};

export default Footer;
