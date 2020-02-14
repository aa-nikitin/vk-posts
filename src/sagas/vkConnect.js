import { call } from 'redux-saga/effects';
import { auth } from '../api';
import { ID_APP, VK_ACCESS } from '../constants';

export function* vkConnect() {
    yield call(auth, ID_APP, VK_ACCESS);
}
