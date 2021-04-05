import { getPoints } from '../api/api';

let initialState = {
  points: ['Street 1', 'Street 2', 'Street 3', 'Street 4', 'Street 5'],
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
