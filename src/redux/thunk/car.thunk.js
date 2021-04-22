import { getCars } from '../../api/api';
import { setCars } from '../actions/actions';

export const requestCars = () => {
  return async (dispatch) => {
    let data = await getCars();
    let car = [];
    for (var i in data.data) {
      let elem = {};
      elem.name = data.data[i].name;
      elem.id = data.data[i].id;
      elem.category = data.data[i].categoryId.name;
      elem.priceMax = data.data[i].priceMax;
      elem.priceMin = data.data[i].priceMin;
      if (data.data[i].thumbnail.path.slice(0, 7) == '/files/') {
        elem.image = 'https://api-factory.simbirsoft1.com' + data.data[i].thumbnail.path;
      } else {
        elem.image = data.data[i].thumbnail.path;
      }
      elem.colors = data.data[i].colors;
      elem.number = data.data[i].number;
      car.push(elem);
    }
    dispatch(setCars(car));
  };
};
