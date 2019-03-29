import { merge } from "lodash";
import { RECEIVE_PAGES } from "./../actions/page_actions";

const initialState = {};

const pageReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PAGES:
      return merge({}, state, action.pages);
    default:
      return state;
  }
};

export default pageReducer;
