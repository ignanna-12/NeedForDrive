let initialState = {
  userCity: '',
  userPoint: '',
  model: '',
  userColor: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_CITY': {
      return { ...state, userCity: action.userCity };
    }
    case 'SET_USER_POINT': {
      return { ...state, userPoint: action.userPoint };
    }
    case 'SET_MODEL': {
      return { ...state, model: action.model };
    }
    case 'SET_USER_COLOR': {
      return { ...state, userColor: action.userColor };
    }
    default:
      return state;
  }
};

export default orderReducer;
