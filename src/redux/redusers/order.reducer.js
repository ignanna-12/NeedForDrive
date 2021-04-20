import { OrderTypes } from '../constants';

let initialState = {
  userCity: '',
  userCityId: '',
  userPoint: '',
  userPointId: '',
  model: '',
  carId: '',
  modelColor: [],
  dateFrom: 0,
  dateTo: 0,
  rateId: {},
  priceMin: '',
  priceMax: '',
  userColor: '',
  period: '',
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderTypes.SET_USER_CITY: {
      return { ...state, userCity: action.payload };
    }
    case OrderTypes.SET_USER_CITY_ID: {
      return { ...state, userCityId: action.payload };
    }
    case OrderTypes.SET_USER_POINT: {
      return { ...state, userPoint: action.payload };
    }
    case OrderTypes.SET_USER_POINT_ID: {
      return { ...state, userPointId: action.payload };
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
    case OrderTypes.SET_PERIOD: {
      return { ...state, period: action.payload };
    }
    case OrderTypes.SET_PRICE: {
      return { ...state, price: action.payload };
    }
    default:
      return state;
  }
};

export default orderReducer;
