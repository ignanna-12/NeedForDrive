import { CarTypes, CityTypes, OrderTypes, PointTypes } from '../constants';

export const setCars = (cars) => ({ type: CarTypes.SET_CARS, payload: cars });
export const setPoints = (points) => ({ type: PointTypes.SET_POINTS, payload: points });
export const setCities = (cities) => ({ type: CityTypes.SET_CITIES, payload: cities });
export const setId = (id) => ({ type: CityTypes.SET_ID, payload: id });
export const setUserCity = (city) => ({ type: OrderTypes.SET_USER_CITY, payload: city });
export const setUserCityId = (id) => ({ type: OrderTypes.SET_USER_CITY_ID, payload: id });
export const setUserPoint = (point) => ({ type: OrderTypes.SET_USER_POINT, payload: point });
export const setUserPointId = (id) => ({ type: OrderTypes.SET_USER_POINT_ID, payload: id });
export const setModel = (model) => ({ type: OrderTypes.SET_MODEL, payload: model });
export const setCarId = (id) => ({ type: OrderTypes.SET_CAR_ID, payload: id });
export const setModelColor = (colors) => ({ type: OrderTypes.SET_MODEL_COLOR, payload: colors });
export const setPriceMin = (price) => ({ type: OrderTypes.SET_PRICE_MIN, payload: price });
export const setPriceMax = (price) => ({ type: OrderTypes.SET_PRICE_MAX, payload: price });
export const setUserColor = (color) => ({ type: OrderTypes.SET_USER_COLOR, payload: color });
export const setPeriod = (period) => ({ type: OrderTypes.SET_PERIOD, payload: period });
export const setPrice = (price) => ({ type: OrderTypes.SET_PRICE, payload: price });
export const setRates = (rates) => ({ type: OrderTypes.SET_RATES, payload: rates });
export const setRate = (rate) => ({ type: OrderTypes.SET_RATE, payload: rate });
export const setRateId = (id) => ({ type: OrderTypes.SET_RATE_ID, payload: id });
export const setRateName = (name) => ({ type: OrderTypes.SET_RATE_NAME, payload: name });
export const setDateFrom = (date) => ({ type: OrderTypes.SET_DATE_FROM, payload: date });
export const setDateTo = (date) => ({ type: OrderTypes.SET_DATE_TO, payload: date });
export const setTank = (tank) => ({ type: OrderTypes.SET_TANK, payload: tank });
export const setChair = (chair) => ({ type: OrderTypes.SET_CHAIR, payload: chair });
export const setWheel = (wheel) => ({ type: OrderTypes.SET_WHEEL, payload: wheel });
