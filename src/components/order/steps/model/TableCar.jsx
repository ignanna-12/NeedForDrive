import React from 'react';
import SVG from 'react-inlinesvg';
import CellTableCar from './CellTableCar';
import styles from './TableCar.module.scss';

const TableCar = ({ cars }) => (
  <div className={styles.model}>
    <table className={styles.table}>
      {cars.map((c, i) => (
        <tr key={i}>
          <td>
            <CellTableCar
              model={c.name}
              priceMin={c.priceMin}
              priceMax={c.priceMax}
              image={c.image}
            />
          </td>
          <td key={i + 1}>
            <CellTableCar
              model={c.name}
              priceMin={c.priceMin}
              priceMax={c.priceMax}
              image={c.image}
            />
          </td>
        </tr>
      ))}
    </table>
  </div>
);

export default TableCar;
