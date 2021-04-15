import { PointTypes } from '../constants';

let initialState = {
  points: [],
};

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PointTypes.SET_POINTS: {
      return { ...state, points: action.payload };
    }
    default:
      return state;
  }
};

export default pointsReducer;
