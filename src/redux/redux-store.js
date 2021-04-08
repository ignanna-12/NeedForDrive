import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import citiesReducer from './city-reducer';
import pointsReducer from './point-reducer';

let reducers = combineReducers({
  citiesTable: citiesReducer,
  pointsTable: pointsReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
