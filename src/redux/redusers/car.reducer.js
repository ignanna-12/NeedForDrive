let initialState = {
  cars: [
    { name: 'Лада', priceMin: '100', priceMax: '500', image: '' },
    { name: 'Ford', priceMin: '50', priceMax: '600', image: '' },
  ],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARS': {
      return { ...state, cars: action.cars };
    }
    default:
      return state;
  }
};

export default carsReducer;
