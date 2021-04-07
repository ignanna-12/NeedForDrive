import { getPoints } from '../api/api';

let initialState = {
  points: [
    'Ульяновск, Нариманова 1, корп.2',
    'Ульяновск, Московское шоссе 34',
    'Ульяновск, Гончарова 27',
    'Ульяновск, Октябрьская улица, 30Б',
    'Ульяновск, Гончарова, 21',
    'Ульяновск, Московское шоссе, 92',
  ],
};

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POINTS': {
      return { ...state, points: action.points };
    }
    default:
      return state;
  }
};
export const setPoints = (points) => ({ type: 'SET_POINTS', points });

export const requestPoints = () => {
  return async (dispatch) => {
    let data = await getPoints();
    let point = [];
    for (var i in data.data) {
      if (data.data[i].cityId !== null) {
        let elem = {};
        elem.city = data.data[i].cityId.name;
        elem.address = data.data[i].address;
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
export default pointsReducer;
