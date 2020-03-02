import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    fetchFindGroupByIdRequest,
    fetchFindGroupByIdSuccess,
    fetchFindGroupByIdFailure,
    clearFindGroupById,
    dataLoadSuccess
} from '../actions';

const url = handleActions(
    {
        [fetchFindGroupByIdRequest]: (_state, { payload }) => payload,
        [fetchFindGroupByIdFailure]: () => '',
        [clearFindGroupById]: () => ''
    },
    ''
);

const result = handleActions(
    {
        [fetchFindGroupByIdRequest]: () => ({}),
        [fetchFindGroupByIdSuccess]: (_state, { payload }) => payload,
        [fetchFindGroupByIdFailure]: () => ({}),
        [clearFindGroupById]: () => ({}),
        [dataLoadSuccess]: (_state, { payload }) => payload.settings.user
    },
    {}
);

const isLoading = handleActions(
    {
        [fetchFindGroupByIdRequest]: () => true,
        [fetchFindGroupByIdSuccess]: () => false,
        [fetchFindGroupByIdFailure]: () => false,
        [clearFindGroupById]: () => false
    },
    false
);

const error = handleActions(
    {
        [fetchFindGroupByIdRequest]: () => null,
        [fetchFindGroupByIdSuccess]: () => null,
        [fetchFindGroupByIdFailure]: (_state, { payload }) => payload,
        [clearFindGroupById]: () => null
    },
    null
);

export const getFoundGroupById = state => state.findGroupById;

export default combineReducers({ url, result, isLoading, error });
