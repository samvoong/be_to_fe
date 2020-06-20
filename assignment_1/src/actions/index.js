import keyMirror from 'keymirror';

const actionTypes = {
	posts: keyMirror({
		FETCH_POSTS_REQUEST: null,
		FETCH_POSTS_SUCCESS: null,
		FETCH_POSTS_ERROR: null,
	}),
	post: keyMirror({
		FETCH_ONE_POST_REQUEST: null,
		FETCH_ONE_POST_SUCCESS: null,
		FETCH_ONE_POST_ERROR: null,
	}),  
};

export default actionTypes;
