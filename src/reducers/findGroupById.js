import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    fetchFindGroupByIdRequest,
    fetchFindGroupByIdSuccess,
    fetchFindGroupByIdFailure
} from '../actions';

const url = handleActions(
    {
        [fetchFindGroupByIdRequest]: (_state, { payload }) => payload,
        // [fetchFindGroupByIdSuccess]: () => '',
        [fetchFindGroupByIdFailure]: () => ''
    },
    ''
);

const result = handleActions(
    {
        [fetchFindGroupByIdRequest]: () => null,
        [fetchFindGroupByIdSuccess]: (_state, { payload }) => payload,
        [fetchFindGroupByIdFailure]: () => null
    },
    null
);

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
        [fetchFindGroupByIdSuccess]: () => null,
        [fetchFindGroupByIdFailure]: (_state, { payload }) => payload
    },
    null
);

export const getFoundGroupById = state => state.findGroupById;

export default combineReducers({ url, result, isLoading, error });
