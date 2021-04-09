import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import citiesReducer from './city-reducer';
import pointsReducer from './point-reducer';
import carsReduser from './car-reducer';

let reducers = combineReducers({
  citiesTable: citiesReducer,
  pointsTable: pointsReducer,
  carsTable: carsReduser,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
