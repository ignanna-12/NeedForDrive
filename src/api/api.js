import * as axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api-factory.simbirsoft1.com/api/' : '',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
  },
});

export const getCities = () => {
  return instance.get('db/city').then((response) => {
    return response.data;
  });
};

export const getPoints = () => {
  return instance.get('db/point/').then((response) => {
    return response.data;
  });
};

export const getCars = () => {
  return instance.get('db/car/').then((response) => {
    return response.data;
  });
};

export const getRate = () => {
  return instance.get('db/rate/').then((response) => {
    return response.data;
  });
};

export const postOrder = (
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
  return instance
    .post('db/order/', {
      orderStatusId: '5e26a191099b810b946c5d89',
      cityId: userCityId,
      pointId: userPointId,
      carId: carId,
      color: userColor,
      dateFrom: dateFrom,
      dateTo: dateTo,
      rateId: rateId,
      price: price,
      isFullTank: tank,
      isNeedChildChair: chair,
      isRightWheel: wheel,
    })
    .then((response) => {
      return response.data;
    });
};

export const getOrder = (orderId) => {
  return instance.get('db/order/' + orderId).then((response) => {
    return response.data;
  });
};

export const deleteOrder = (orderId) => {
  return instance.get('db/order/' + orderId).then((response) => {
    return response.data;
  });
};
