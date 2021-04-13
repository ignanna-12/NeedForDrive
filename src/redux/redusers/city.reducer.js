let initialState = {
  cities: [],
  id: [],
  index: 0,
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

export default citiesReducer;
