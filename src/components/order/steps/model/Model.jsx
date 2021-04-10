import React from 'react';
import SVG from 'react-inlinesvg';
import CellTableCar from './CellTableCar';
import styles from './Model.module.scss';

const Model = ({ cars }) => {
  return (
    <div className={styles.model}>
      {cars.map((c, i) => (
        <CellTableCar
          key={i}
          model={c.name}
          priceMin={c.priceMin}
          priceMax={c.priceMax}
          image={c.image}
        />
      ))}
    </div>
  );
};

export default Model;
