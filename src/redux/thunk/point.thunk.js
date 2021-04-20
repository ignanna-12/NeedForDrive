import { getPoints } from '../../api/api';
import { setPoints } from '../actions/actions';

export const requestPoints = () => {
  return async (dispatch) => {
    let data = await getPoints();
    let point = [];
    for (var i in data.data) {
      if (data.data[i].cityId !== null) {
        let elem = {};
        elem.city = data.data[i].cityId.name;
        elem.address = data.data[i].address;
        elem.id = data.data[i].id;
        point.push(elem);
      }
    }
    dispatch(setPoints(point));
  };
};

export const filterPointsByCity = (points, city) => {
  let filterPoints = [];
  for (var i in points) {
    if (points[i].city == city) {
      filterPoints.push(points[i].address);
    }
  }
  return filterPoints;
};
