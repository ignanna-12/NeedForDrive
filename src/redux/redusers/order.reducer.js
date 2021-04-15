import { OrderTypes } from '../constants';

let initialState = {
  userCity: '',
  userPoint: '',
  model: '',
  userColor: [],
  priceMin: '',
  priceMax: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderTypes.SET_USER_CITY: {
      return { ...state, userCity: action.payload };
    }
    case OrderTypes.SET_USER_POINT: {
      return { ...state, userPoint: action.payload };
    }
    case OrderTypes.SET_MODEL: {
      return { ...state, model: action.payload };
    }
    case OrderTypes.SET_USER_COLOR: {
      return { ...state, userColor: action.payload };
    }
    case OrderTypes.SET_PRICE_MIN: {
      return { ...state, priceMin: action.payload };
    }
    case OrderTypes.SET_PRICE_MAX: {
      return { ...state, priceMax: action.payload };
    }
    default:
      return state;
  }
};

export default orderReducer;
