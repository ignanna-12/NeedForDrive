import { getCities } from '../../api/api';
import { setCities, setId } from '../actions/actions';

export const requestCities = () => {
  return async (dispatch) => {
    let data = await getCities();
    let city = [];
    let id = [];
    for (var i in data.data) {
      city.push(data.data[i].name);
      id.push(data.data[i].id);
    }
    dispatch(setCities(city));
    dispatch(setId(id));
  };
};
