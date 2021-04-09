import React from 'react';
import SVG from 'react-inlinesvg';
import styles from './Model.module.scss';
import TableCar from './TableCar';

const Model = ({ cars }) => {
  return (
    <div className={styles.model}>
      <TableCar cars={cars} />
    </div>
  );
};

export default Model;
