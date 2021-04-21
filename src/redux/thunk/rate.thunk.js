import { getRate } from '../../api/api';
import { setRates } from '../actions/actions';

export const requestRate = () => {
  return async (dispatch) => {
    let data = await getRate();
    let rate = [];
    for (var i in data.data) {
      let elem = {};
      elem.name = data.data[i].rateTypeId.name;
      elem.id = data.data[i].id;
      elem.price = data.data[i].price;
      rate.push(elem);
    }
    dispatch(setRates(rate));
  };
};
