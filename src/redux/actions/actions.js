import { CarTypes, CityTypes, OrderTypes, PointTypes } from '../constants';

export const setCars = (cars) => ({ type: CarTypes.SET_CARS, payload: cars });
export const setPoints = (points) => ({ type: PointTypes.SET_POINTS, payload: points });
export const setCities = (cities) => ({ type: CityTypes.SET_CITIES, payload: cities });
export const setId = (id) => ({ type: CityTypes.SET_ID, payload: id });
export const setUserCity = (city) => ({ type: OrderTypes.SET_USER_CITY, payload: city });
export const setUserPoint = (point) => ({ type: OrderTypes.SET_USER_POINT, payload: point });
export const setModel = (model) => ({ type: OrderTypes.SET_MODEL, payload: model });
export const setUserColor = (color) => ({ type: OrderTypes.SET_USER_COLOR, payload: color });
export const setPriceMin = (price) => ({ type: OrderTypes.SET_PRICE_MIN, payload: price });
export const setPriceMax = (price) => ({ type: OrderTypes.SET_PRICE_MAX, payload: price });
