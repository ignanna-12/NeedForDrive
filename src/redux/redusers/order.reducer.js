import { OrderTypes } from '../constants';

let initialState = {
  userCity: '',
  userCityId: '',
  userPoint: '',
  userPointId: '',
  model: '',
  carId: '',
  modelColor: [],
  modelNumber: '',
  modelImage: '',
  dateFrom: +new Date(),
  dateTo: '',
  rates: [],
  rateName: '',
  rateId: '',
  priceMin: '',
  priceMax: '',
  userColor: '',
  period: '',
  price: 0,
  tank: false,
  chair: false,
  wheel: false,
  rate: {},
  orderId: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderTypes.SET_USER_CITY: {
      return {
        ...state,
        userCity: action.payload,
        userCityId: '',
        userPoint: '',
        userPointId: '',
        model: '',
        carId: '',
        modelNumber: '',
        modelImage: '',
        dateFrom: +new Date(),
        dateTo: '',
        rateName: '',
        rateId: '',
        priceMin: '',
        priceMax: '',
        userColor: '',
        period: '',
        price: 0,
        tank: false,
        chair: false,
        wheel: false,
        orderId: '',
      };
    }
    case OrderTypes.SET_USER_CITY_ID: {
      return {
        ...state,
        userCityId: action.payload,
      };
    }
    case OrderTypes.SET_USER_POINT: {
      return {
        ...state,
        userPoint: action.payload,
        userPointId: '',
        model: '',
        carId: '',
        modelNumber: '',
        modelImage: '',
        dateFrom: +new Date(),
        dateTo: '',
        rateName: '',
        rateId: '',
        priceMin: '',
        priceMax: '',
        userColor: '',
        period: '',
        price: 0,
        tank: false,
        chair: false,
        wheel: false,
        orderId: '',
      };
    }
    case OrderTypes.SET_USER_POINT_ID: {
      return {
        ...state,
        userPointId: action.payload,
      };
    }
    case OrderTypes.SET_MODEL: {
      return {
        ...state,
        model: action.payload,
        carId: '',
        modelNumber: '',
        modelImage: '',
        dateFrom: +new Date(),
        dateTo: '',
        rateName: '',
        rateId: '',
        priceMin: '',
        priceMax: '',
        userColor: '',
        period: '',
        price: 0,
        tank: false,
        chair: false,
        wheel: false,
        orderId: '',
      };
    }
    case OrderTypes.SET_CAR_ID: {
      return {
        ...state,
        carId: action.payload,
      };
    }
    case OrderTypes.SET_MODEL_COLOR: {
      return {
        ...state,
        modelColor: action.payload,
      };
    }
    case OrderTypes.SET_MODEL_IMAGE: {
      return {
        ...state,
        modelImage: action.payload,
      };
    }
    case OrderTypes.SET_MODEL_NUMBER: {
      return {
        ...state,
        modelNumber: action.payload,
      };
    }
    case OrderTypes.SET_PRICE_MIN: {
      return { ...state, priceMin: action.payload };
    }
    case OrderTypes.SET_PRICE_MAX: {
      return { ...state, priceMax: action.payload };
    }
    case OrderTypes.SET_USER_COLOR: {
      return {
        ...state,
        userColor: action.payload,
      };
    }
    case OrderTypes.SET_PERIOD: {
      return { ...state, period: action.payload };
    }
    case OrderTypes.SET_RATES: {
      return { ...state, rates: action.payload };
    }
    case OrderTypes.SET_RATE: {
      return {
        ...state,
        rate: action.payload,
        rateId: '',
        period: '',
        price: 0,
        orderId: '',
      };
    }
    case OrderTypes.SET_RATE_ID: {
      return { ...state, rateId: action.payload };
    }
    case OrderTypes.SET_RATE_NAME: {
      return { ...state, rateName: action.payload, rateId: '', period: '', price: 0, orderId: '' };
    }
    case OrderTypes.SET_DATE_FROM: {
      return { ...state, dateFrom: action.payload };
    }
    case OrderTypes.SET_DATE_TO: {
      return { ...state, dateTo: action.payload };
    }
    case OrderTypes.SET_PRICE: {
      return { ...state, price: action.payload };
    }
    case OrderTypes.SET_TANK: {
      return { ...state, tank: action.payload };
    }
    case OrderTypes.SET_CHAIR: {
      return { ...state, chair: action.payload };
    }
    case OrderTypes.SET_WHEEL: {
      return { ...state, wheel: action.payload };
    }
    case OrderTypes.SET_ORDER_ID: {
      return { ...state, orderId: action.payload };
    }
    default:
      return state;
  }
};

export default orderReducer;
