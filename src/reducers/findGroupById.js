import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchFindGroupByIdRequest,
  fetchFindGroupByIdSuccess,
  fetchFindGroupByIdFailure
} from "../actions/findGroupById";

const isLoading = handleActions(
  {
    [fetchFindGroupByIdRequest]: () => true,
    [fetchFindGroupByIdSuccess]: () => false,
    [fetchFindGroupByIdFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchFindGroupByIdRequest]: () => null,
    [fetchFindGroupByIdSuccess]: (_state, { payload }) => payload,
    [fetchFindGroupByIdFailure]: () => null
  },
  null
);

export default combineReducers({ isLoading, error });
