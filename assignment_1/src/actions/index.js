import keyMirror from 'keymirror';

const actionTypes = {
	posts: keyMirror({
		FETCH_POSTS_REQUEST: null,
		FETCH_POSTS_SUCCESS: null,
		FETCH_POSTS_ERROR: null,
    }),
    
};

export default actionTypes;
