import { getCities } from '../api/api';

let initialState = {
  cities: ['Ульяновск', 'Самара', 'Сочи', 'Уфа', 'Саранск'],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITIES': {
      return { ...state, cities: action.cities };
    }
    default:
      return state;
  }
};
export const setCities = (cities) => ({ type: 'SET_CITIES', cities });

export const requestCities = () => {
  return async (dispatch) => {
    let data = await getCities();
    dispatch(setCities(data.cities));
  };
};
export default citiesReducer;
