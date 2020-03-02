import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    dataSaveRequest,
    dataSaveSuccess,
    dataSaveFailure,
    dataLoadRequest,
    dataLoadSuccess,
    dataLoadFailure
} from '../actions';

const isLoading = handleActions(
    {
        [dataSaveRequest]: () => true,
        [dataSaveSuccess]: () => false,
        [dataSaveFailure]: () => false,
        [dataLoadRequest]: () => true,
        [dataLoadSuccess]: () => false,
        [dataLoadFailure]: () => false
    },
    false
);

const error = handleActions(
    {
        [dataSaveRequest]: () => null,
        [dataSaveSuccess]: () => null,
        [dataSaveFailure]: (_state, { payload }) => payload,
        [dataLoadRequest]: () => null,
        [dataLoadSuccess]: () => null,
        [dataLoadFailure]: (_state, { payload }) => payload
    },
    null
);

export const getSettings = state => state.settings;

export default combineReducers({ isLoading, error });
