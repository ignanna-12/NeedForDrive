import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import CellTableCar from './CellTableCar';
import styles from './Model.module.scss';

const Model = ({ cars, onChangeModel }) => {
  const [fiterCar, setFilterCar] = useState(cars);
  const filterCars = (catName) => {
    let filterCarWithCat = [];
    for (var i in cars) {
      if (cars[i].category == catName) {
        filterCarWithCat.push(cars[i]);
      }
    }
    setFilterCar(filterCarWithCat);
  };
  let categ = [];
  for (var i in cars) {
    categ.push(cars[i].category);
  }
  const categor = Array.from(new Set(categ));
  return (
    <div className={styles.model_page}>
      <div className={styles.radios}>
        <label
          value="Все модели"
          onClick={(e) => {
            setFilterCar(cars);
          }}
        >
          <button className={styles.circle} />
          <span>Все модели</span>
        </label>
        {categor.map((cat, i) => (
          <label
            key={i}
            onClick={(e) => {
              filterCars(cat);
            }}
          >
            <button className={styles.circle} />
            <span>{cat}</span>
          </label>
        ))}
      </div>
      <div className={styles.model}>
        {fiterCar.map((c, i) => (
          <CellTableCar
            key={i}
            model={c.name}
            priceMin={c.priceMin}
            priceMax={c.priceMax}
            image={c.image}
            onChangeModel={onChangeModel}
          />
        ))}
      </div>
    </div>
  );
};

export default Model;
