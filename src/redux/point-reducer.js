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

export const requestPoints = (city) => {
  return async (dispatch) => {
    let data = await getPoints();
    let point = [];
    for (var i in data.data) {
      if (data.data[i].cityId !== null && data.data[i].cityId.name == city) {
        point.push(data.data[i].address);
      }
    }
    dispatch(setPoints(point));
  };
};
export default pointsReducer;
