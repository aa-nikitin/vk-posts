import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { settingsUserSave } from '../actions';

const user = handleActions(
    {
        [settingsUserSave]: (_state, { payload }) => payload
    },
    {}
);

export const getSettings = state => state.settings;

export default combineReducers({ user });
