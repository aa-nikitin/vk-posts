import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { dataSaveRequest, dataSaveSuccess, dataSaveFailure } from '../actions';

const isLoading = handleActions(
    {
        [dataSaveRequest]: () => true,
        [dataSaveSuccess]: () => false,
        [dataSaveFailure]: () => false
    },
    false
);

const error = handleActions(
    {
        [dataSaveRequest]: () => null,
        [dataSaveSuccess]: () => null,
        [dataSaveFailure]: (_state, { payload }) => payload
    },
    null
);

export const getSettings = state => state.settings;

export default combineReducers({ isLoading, error });
