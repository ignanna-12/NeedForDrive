import { postOrder, getOrder } from '../../api/api';
import {
  setCarId,
  setModel,
  setOrderId,
  setPriceMax,
  setPriceMin,
  setUserCity,
  setUserCityId,
  setUserPoint,
  setUserPointId,
} from '../actions/actions';

export const sendOrder = (
  userCityId,
  userPointId,
  carId,
  userColor,
  dateFrom,
  dateTo,
  rateId,
  price,
  tank,
  chair,
  wheel
) => {
  return async (dispatch) => {
    let data = await postOrder(
      userCityId,
      userPointId,
      carId,
      userColor,
      dateFrom,
      dateTo,
      rateId,
      price,
      tank,
      chair,
      wheel
    );
    dispatch(setOrderId(data.data.id));
    window.history.pushState(
      window.location.href,
      null,
      '/NeedForDrive#/OrderPage/' + data.data.id
    );
    localStorage.setItem('orderId', data.data.id);
  };
};
export const requestOrder = () => {
  return async (dispatch) => {
    let data = await getOrder();
    dispatch(setUserCity(data.data.CityId.name));
    dispatch(setUserCityId(data.data.CityId.id));
    dispatch(setUserPoint(data.data.PointId.address));
    dispatch(setUserPointId(data.data.PointId.id));
    dispatch(setModel(data.data.CarId.name));
    dispatch(setCarId(data.data.CarId.id));
    dispatch(setPriceMin(data.data.CarId.priceMin));
    dispatch(setPriceMax(data.data.CarId.priceMax));
    
  };
};
