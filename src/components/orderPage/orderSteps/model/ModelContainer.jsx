import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCarId,
  setModel,
  setModelColor,
  setModelImage,
  setModelNumber,
  setPriceMax,
  setPriceMin,
} from '../../../../redux/actions/actions';
import Model from './Model';

const ModelContainer = ({ cars }) => {
  const dispatch = useDispatch();

  const changeModel = (model, priceMin, priceMax, colors, id, number, image) => {
    dispatch(setModel(model));
    dispatch(setCarId(id));
    dispatch(setModelColor(colors));
    dispatch(setPriceMin(priceMin));
    dispatch(setPriceMax(priceMax));
    dispatch(setModelNumber(number));
    dispatch(setModelImage(image));
  };
  const [fiterCar, setFilterCar] = useState(cars);
  const [checkedCategory, setCheckedCategory] = useState('');

  const filterCars = (catName) => {
    setCheckedCategory(catName);
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
      onChangeModel={changeModel}
      setFilterCar={setFilterCar}
      categor={categor}
      filterCars={filterCars}
      checkedBefore={checkedCategory}
    />
  );
};

export default ModelContainer;
