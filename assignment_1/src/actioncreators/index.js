import actionTypes from '../actions'
console.log("actionTypes", actionTypes)

export const thunkFetchPostsRequest = () => ({
    type: actionTypes.posts.FETCH_POSTS_REQUEST
});

export const thunkFetchPostsSuccess = users => ({
    type: actionTypes.posts.FETCH_POSTS_SUCCESS,
    payload: users
});

export const thunkFetchPostsError = err => ({
    type: actionTypes.posts.FETCH_POSTS_ERROR,
    payload: err
});

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(thunkFetchPostsRequest());
        fetch('https:/jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            dispatch(thunkFetchPostsSuccess(data));
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(thunkFetchPostsError(errMsg));
        })
    }
}