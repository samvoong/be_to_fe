import actionTypes from '../actions'
console.log("actionTypes", actionTypes)

// Set URLs
const proxyServer = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https:/jsonplaceholder.typicode.com/posts";

// Fetching all posts from 3rd party API
export const fetchPostsRequest = () => ({
    type: actionTypes.fetchposts.FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = posts => ({
    type: actionTypes.fetchposts.FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsError = err => ({
    type: actionTypes.fetchposts.FETCH_POSTS_ERROR,
    payload: err
});

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            dispatch(fetchPostsSuccess(data));
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(fetchPostsError(errMsg));
        })
    }
}

// Adding post to 3rd aprty API
let nextPostId = 10000

export const addPostRequest = () => ({
    type: actionTypes.addpost.ADD_POST_REQUEST
});

export const addPostSuccess = () => ({
    type: actionTypes.addpost.ADD_POST_SUCCESS
});

export const addPostError = err => ({
    type: actionTypes.addpost.ADD_POST_ERROR,
    payload: err
});

export const addPost = (title, body) => {
    const postNew = {
        id: nextPostId++,
        title: title,
        body: body
    };
    return (dispatch) => {
        dispatch(addPostRequest());
        fetch(proxyServer + baseUrl, {
            method: 'POST',
            body: JSON.stringify(postNew),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                // "Access-Control-Allow-Origin": "*",
                // "API-Key": "20200616004806"
              }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addPostSuccess(data));
        })
        .catch(err => {
            const errMsg = err.message;
            dispatch(addPostError(errMsg));
        })
      };
}

// Loading the new post onto the list of all posts
export const LOAD_POST = "LOAD_POST";

export const loadPost = (title, body) => ({
    type: LOAD_POST,
    postdata: {
        id: nextPostId++,
        title,
        body
    }
  
});