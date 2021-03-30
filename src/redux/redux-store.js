import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import citiesReducer from './city-reducer';

let reducers = combineReducers({
  citiesTable: citiesReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

export default store;
