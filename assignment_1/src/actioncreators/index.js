import actionTypes from '../actions'
console.log("actionTypes", actionTypes)

// For all posts:
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

// For one post:
export const thunkFetchOnePostRequest = () => ({
    type: actionTypes.post.FETCH_ONE_POST_REQUEST
});

export const thunkFetchOnePostSuccess = users => ({
    type: actionTypes.post.FETCH_ONE_POST_SUCCESS,
    payload: users
});

export const thunkFetchOnePostError = err => ({
    type: actionTypes.post.FETCH_ONE_POST_ERROR,
    payload: err
});

export const fetchOnePost = ({ id }) => {
    return (dispatch) => {
        dispatch(thunkFetchOnePostRequest());
        fetch('https:/jsonplaceholder.typicode.com/posts/${id}')
        .then(response => response.json())
        .then(data => {
            dispatch(thunkFetchOnePostSuccess(data));
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(thunkFetchOnePostError(errMsg));
        })
    }
}