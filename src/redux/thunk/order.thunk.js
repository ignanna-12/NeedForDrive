import { postOrder, getOrder } from '../../api/api';
import {
  setCarId,
  setChair,
  setDateFrom,
  setDateTo,
  setModel,
  setModelColor,
  setModelImage,
  setOrderId,
  setPrice,
  setPriceMax,
  setPriceMin,
  setTank,
  setUserCity,
  setUserCityId,
  setUserPoint,
  setUserPointId,
  setWheel,
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
export const requestOrder = (orderId) => {
  return async (dispatch) => {
    let data = await getOrder(orderId);
    dispatch(setUserCity(data.data.cityId.name));
    dispatch(setUserCityId(data.data.cityId.id));
    dispatch(setUserPoint(data.data.pointId.address));
    dispatch(setUserPointId(data.data.pointId.id));
    dispatch(setModel(data.data.carId.name));
    dispatch(setCarId(data.data.carId.id));
    dispatch(setPriceMin(data.data.carId.priceMin));
    dispatch(setPriceMax(data.data.carId.priceMax));
    if (data.data.carId.thumbnail.path.slice(0, 7) == '/files/') {
      dispatch(
        setModelImage('https://api-factory.simbirsoft1.com' + data.data.carId.thumbnail.path)
      );
    } else {
      setModelImage(data.data.carId.thumbnail.path);
    }
    dispatch(setModelColor(data.data.color));
    dispatch(setDateFrom(data.data.dateFrom));
    dispatch(setDateTo(data.data.dateTo));
    dispatch(setPrice(data.data.price));
    dispatch(setTank(data.data.isFullTank));
    dispatch(setChair(data.data.isNeedChildChair));
    dispatch(setWheel(data.data.isRightWheel));
    dispatch(setOrderId(data.data.id));
  };
};
