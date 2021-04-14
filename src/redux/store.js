import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import citiesReducer from './redusers/city.reducer';
import pointsReducer from './redusers/point.reducer';
import carsReduser from './redusers/car.reducer';
import orderReducer from './redusers/order.reducer';

let reducers = combineReducers({
  citiesTable: citiesReducer,
  pointsTable: pointsReducer,
  carsTable: carsReduser,
  orderTable: orderReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
