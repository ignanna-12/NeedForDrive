import React, { useState } from 'react';
import Radios from '../../../common/radios/Radios';
import CellTableCar from './CellTableCar';
import styles from './Model.module.scss';

const Model = ({
  cars,
  filterCar,
  onChangeModel,
  setFilterCar,
  categor,
  filterCars,
  checkedBefore,
}) => {
  return (
    <div className={styles.model_page}>
      <Radios
        setDefaultValue={() => {
          setFilterCar(cars);
        }}
        selectedValue={(e) => {
          filterCars(e);
        }}
        defaultText={'Все модели'}
        list={categor}
        holeList={cars}
        checkedBefore={checkedBefore}
      />
      <div className={styles.model}>
        {filterCar.map((c, i) => (
          <CellTableCar
            key={i}
            model={c.name}
            priceMin={c.priceMin}
            priceMax={c.priceMax}
            image={c.image}
            onChangeModel={onChangeModel}
            colors={c.colors}
            id={c.id}
            number={c.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Model;
