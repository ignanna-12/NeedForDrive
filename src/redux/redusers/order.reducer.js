import { OrderTypes } from '../constants';

let initialState = {
  userCity: '',
  userPoint: '',
  model: '',
  modelColor: [],
  priceMin: '',
  priceMax: '',
  userColor: '',
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
    case OrderTypes.SET_MODEL_COLOR: {
      return { ...state, modelColor: action.payload };
    }
    case OrderTypes.SET_PRICE_MIN: {
      return { ...state, priceMin: action.payload };
    }
    case OrderTypes.SET_PRICE_MAX: {
      return { ...state, priceMax: action.payload };
    }
    case OrderTypes.SET_USER_COLOR: {
      return { ...state, userColor: action.payload };
    }
    default:
      return state;
  }
};

export default orderReducer;
