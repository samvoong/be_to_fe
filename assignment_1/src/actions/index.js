import keyMirror from 'keymirror';

const actionTypes = {
	thunk: keyMirror({
		FETCH_USER_REQUEST: null,
		FETCH_USER_SUCCESS: null,
		FETCH_USER_ERROR: null,
    }),
    
};

export default actionTypes;
