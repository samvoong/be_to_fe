import actionTypes from '../actions';

const initialState = {
    loading: true,
    data: [],
    error: ''
};

const postsReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.fetchposts.FETCH_POSTS_REQUEST:
            return { ...state, loading: true };
        case actionTypes.fetchposts.FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: ''};
        case actionTypes.fetchposts.FETCH_POSTS_ERROR:
            return { ...state, loading: false, data: [], error: action.payload};
        default:
            return state;
    }
}

export default postsReducer;