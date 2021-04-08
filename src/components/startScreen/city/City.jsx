import React from 'react';
import SVG from 'react-inlinesvg';
import Loco from '../../../assets/icons/Group.svg';
import styles from './City.module.scss';

const City = ({ userCity }) => {
  return (
    <div className={styles.loco}>
      <SVG src={Loco} />
      <div className={styles.city}>{userCity == '' ? 'Ульяновск' : userCity}</div>
    </div>
  );
};

export default City;
