import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import citiesReducer from './city-reducer';
import mapReducer from './map-reducer';
import pointsReducer from './point-reducer';

let reducers = combineReducers({
  citiesTable: citiesReducer,
  pointsTable: pointsReducer,
  coordinates: mapReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
