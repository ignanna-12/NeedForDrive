import React, { useState } from 'react';
import Model from './Model';

const ModelContainer = ({ cars, onChangeModel }) => {
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
    <Model
      cars={cars}
      filterCar={fiterCar}
      onChangeModel={onChangeModel}
      setFilterCar={setFilterCar}
      categor={categor}
      filterCars={filterCars}
    />
  );
};

export default ModelContainer;
