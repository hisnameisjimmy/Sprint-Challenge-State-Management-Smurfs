import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL
} from "../actions";

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
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
      default:
        return state;
    }
}

export default reducer;