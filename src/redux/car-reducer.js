import { getCars } from '../api/api';

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
export const setCars = (cars) => ({ type: 'SET_CARS', cars });

export const requestCars = () => {
  return async (dispatch) => {
    let data = await getCars();
    let car = [];
    for (var i in data.data) {
      let elem = {};
      elem.name = data.data[i].name;
      elem.category = data.data[i].categoryId.name;
      elem.priceMax = data.data[i].priceMax;
      elem.priceMin = data.data[i].priceMin;
      if (data.data[i].thumbnail.path.slice(0, 7) == '/files/') {
        elem.image = 'https://api-factory.simbirsoft1.com' + data.data[i].thumbnail.path;
      } else {
        elem.image = data.data[i].thumbnail.path;
      }
      elem.colors = data.data[i].colors;
      car.push(elem);
    }
    dispatch(setCars(car));
  };
};

export default carsReducer;
