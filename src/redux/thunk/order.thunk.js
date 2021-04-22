import { postOrder } from '../../api/api';
import { setOrderId } from '../actions/actions';

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
  };
};
