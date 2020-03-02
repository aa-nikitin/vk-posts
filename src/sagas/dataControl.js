import { takeLatest, select, put } from 'redux-saga/effects';
import { STATE_STORAGE_KEY } from '../constants';
import {
    dataSaveRequest,
    dataLoadRequest,
    dataLoadSuccess,
    dataLoadFailure
} from '../actions';
import { getState } from '../reducers';

export function* saveData() {
    try {
        const groups = yield select(getState);
        const groupIdStateString = JSON.stringify(groups);

        yield localStorage.setItem(STATE_STORAGE_KEY, groupIdStateString);
    } catch (error) {
        console.log(error);
    }
}

export function* loadData() {
    try {
        const groupsString = yield localStorage.getItem(STATE_STORAGE_KEY);
        const groups = JSON.parse(groupsString);

        if (groups) yield put(dataLoadSuccess(groups));
    } catch (error) {
        yield put(dataLoadFailure(error));
    }
}

export function* dataControl() {
    yield takeLatest(dataSaveRequest, saveData);
    yield takeLatest(dataLoadRequest, loadData);
}
