import { LOAD_POST } from "../actioncreators";

const testReducer = (state=[], action) => {
  switch (action.type) {
    case LOAD_POST: {
      return [...state, action.postdata];
    }
    default: {
      return state;
    }
  }
};
  
export default testReducer;