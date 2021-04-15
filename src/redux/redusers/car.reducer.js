import { CarTypes } from '../constants';

let initialState = {
  cars: [
    { name: 'Лада', priceMin: '100', priceMax: '500', image: '' },
    { name: 'Ford', priceMin: '50', priceMax: '600', image: '' },
  ],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CarTypes.SET_CARS: {
      return { ...state, cars: action.payload };
    }
    default:
      return state;
  }
};

export default carsReducer;
