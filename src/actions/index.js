import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

//File is for Action Creators
export const signIn = (userId) => {
  //userID coming from arg passed in to f in googleauthredux
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const createStream = (formValues) => {
//   return async (dispatch) => {
//     //first argument to function is dispatch function
//     const response = await streams.post("/streams", formValues);
//     dispatch({ type: CREATE_STREAM, payload: response.data });
//   };
// };

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    //first argument to function is dispatch function
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push("/");
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams.${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
  };
};
