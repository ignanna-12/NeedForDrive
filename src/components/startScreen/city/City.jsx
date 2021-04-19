import React from 'react';
import SVG from 'react-inlinesvg';
import Loco from '../../../assets/icons/Group.svg';
import styles from './City.module.scss';

const City = ({ userCity }) => {
  return (
    <div className={userCity == '' ? styles.display_none : styles.loco}>
      <SVG src={Loco} />
      <div className={styles.city}>{userCity}</div>
    </div>
  );
};

export default City;
