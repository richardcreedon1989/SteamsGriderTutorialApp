import _ from "lodash";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") }; //sets id as the key ie {3: {id: 3, otherKey: "string"}} mapKeys is lodash function to create an object as array being returned from API Lecture 338
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //key literal
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //omit (lodash) creates new object for us
    default:
      return state;
  }
};
