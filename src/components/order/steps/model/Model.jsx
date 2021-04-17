import React, { useState } from 'react';
import Radios from '../../../common/radios/Radios';
import CellTableCar from './CellTableCar';
import styles from './Model.module.scss';

const Model = ({ cars, filterCar, onChangeModel, setFilterCar, categor, filterCars }) => {
  return (
    <div className={styles.model_page}>
      <Radios
        setDefaultValue={(e) => {
          setFilterCar(cars);
        }}
        selectedValue={(e) => {
          filterCars(e);
        }}
        defaultText={'Все модели'}
        list={categor}
        holeList={cars}
      />
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
        {filterCar.map((c, i) => (
          <CellTableCar
            key={i}
            model={c.name}
            priceMin={c.priceMin}
            priceMax={c.priceMax}
            image={c.image}
            onChangeModel={onChangeModel}
            colors={c.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Model;
