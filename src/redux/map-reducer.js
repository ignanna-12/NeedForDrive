import { getCoordinates } from '../api/api';

let initialState = {
  coordinates: [],
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COORD': {
      return { ...state, points: action.coordinates };
    }
    default:
      return state;
  }
};
export const setCoordinates = (coordinates) => ({ type: 'SET_COORD', coordinates });

export const requestCoordinates = (address) => {
  return async (dispatch) => {
    let data = await getCoordinates(address);
    dispatch(setCoordinates(data));
  };
};
export default mapReducer;
