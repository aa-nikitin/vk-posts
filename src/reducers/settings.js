import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { settingsUserSet } from '../actions';

const user = handleActions(
    {
        [settingsUserSet]: (_state, { payload }) => payload
    },
    {}
);

export const getSettings = state => state.settings;

export default combineReducers({ user });
