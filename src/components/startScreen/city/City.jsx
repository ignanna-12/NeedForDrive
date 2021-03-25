import React from 'react';
import SVG from 'react-inlinesvg';
import Location from '../../../assets/icons/Group.svg';
import styles from './City.module.scss';

const City = () => {
  return (
    <div className={styles.autocomplete}>
      <SVG src={Location} />
      <div className="styles.autocontainer">Ульяновск</div>
    </div>
  );
};

export default City;
