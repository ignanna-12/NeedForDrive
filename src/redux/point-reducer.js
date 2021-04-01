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

export const requestPoints = (data_id) => {
  return async (dispatch) => {
    let data = await getPoints(data_id);
    let point = [];
    for (var i in data.data) {
      point.push(data.data[i].name);
    }
    dispatch(setPoints(point));
  };
};
export default pointsReducer;
