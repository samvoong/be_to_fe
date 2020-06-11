import actionTypes from '../actions'
console.log("actionTypes", actionTypes)

export const thunkFetchUserRequest = () => ({
    type: actionTypes.thunk.FETCH_USER_REQUEST
});

export const thunkFetchUserSuccess = users => ({
    type: actionTypes.thunk.FETCH_USER_SUCCESS,
    payload: users
});

export const thunkFetchUserError = err => ({
    type: actionTypes.thunk.FETCH_USER_ERROR,
    payload: err
});

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(thunkFetchUserRequest());
        fetch('https:/jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            dispatch(thunkFetchUserSuccess(data));
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(thunkFetchUserError(errMsg));
        })
    }
}