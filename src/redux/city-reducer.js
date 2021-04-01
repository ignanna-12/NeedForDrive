import { getCities } from '../api/api';

let initialState = {
  cities: ['Ульяновск', 'Самара', 'Сочи', 'Уфа', 'Саранск'],
  id: ['1', '2'],
  index: 100,
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITIES': {
      return { ...state, cities: action.cities };
    }
    case 'SET_ID': {
      return { ...state, id: action.id };
    }
    case 'SET_INDEX': {
      return { ...state, index: action.index };
    }
    default:
      return state;
  }
};
export const setCities = (cities) => ({ type: 'SET_CITIES', cities });
export const setId = (id) => ({ type: 'SET_ID', id });
export const setIndex = (index) => ({ type: 'SET_INDEX', index });

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
export default citiesReducer;
