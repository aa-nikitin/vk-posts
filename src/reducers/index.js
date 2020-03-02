import { combineReducers } from 'redux';
import findGroupById from './findGroupById';
import settings from './settings';
import dataControl from './dataControl';

const rootReducers = combineReducers({ findGroupById, settings, dataControl });

export const getState = state => state;

export default rootReducers;
export * from './findGroupById';
export * from './settings';
export * from './dataControl';
