import actionTypes from '../actions';

const initialState = {
    loading: true,
    data: [],
    // error: ''
};

const addReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.addpost.ADD_POST_REQUEST: 
        return { ...state, loading: true };
    case actionTypes.addpost.ADD_POST_SUCCESS: 
        return [...state, action.item];
    case actionTypes.addpost.ADD_POST_ERROR:
      return { ...state, loading: false, data: [], error: action.payload};
    default: {
      return state;
    }
  }
};

export default addReducer;