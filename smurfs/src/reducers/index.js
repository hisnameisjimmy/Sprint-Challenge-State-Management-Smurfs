import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  error: "",
  isFetching: false,
  newSmurf: { name: "", age: null, height: "", id: null }
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
          error: ""
        };
      case FETCH_SMURFS_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      case POST_SMURFS_START:
        return {
          ...state,
          isPosting: true,
          error: ""
        };
      case POST_SMURFS_SUCCESS:
        return {
          ...state,
          isPosting: false,
          smurfs: action.payload,
          error: ""
        };
      case POST_SMURFS_FAIL:
        return {
          ...state,
          isPosting: false,
          error: action.payload
        };
      default:
        return state;
    }
}

export default reducer;