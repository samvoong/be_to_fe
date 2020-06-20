import keyMirror from 'keymirror';

const actionTypes = {
	fetchposts: keyMirror({
		FETCH_POSTS_REQUEST: null,
		FETCH_POSTS_SUCCESS: null,
		FETCH_POSTS_ERROR: null
	}),
	fetchonepost: keyMirror({
		FETCH_ONE_POST_REQUEST: null,
		FETCH_ONE_POST_SUCCESS: null,
		FETCH_ONE_POST_ERROR: null
	}),
	addpost: keyMirror({
		ADD_POST_REQUEST: null,
		ADD_POST_SUCCESS: null,
		ADD_POST_ERROR: null
	}),
};

export default actionTypes;