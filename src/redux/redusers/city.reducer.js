import { CityTypes } from '../constants';

let initialState = {
  cities: [],
  id: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CityTypes.SET_CITIES: {
      return { ...state, cities: action.payload };
    }
    case CityTypes.SET_ID: {
      return { ...state, id: action.payload };
    }
    default:
      return state;
  }
};

export default citiesReducer;
