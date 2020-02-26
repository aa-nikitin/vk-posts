import { takeLatest, select /*put, call*/ } from 'redux-saga/effects';
// import { auth, callAPI } from '../api';
// import { ID_APP, GROUP_ID_STORAGE_KEY } from '../constants';

import { dataSaveRequest } from '../actions';
import { getSettings } from '../reducers';

// import { getGroupId, getGroupType, getGroupIdState } from '../reducers';

export function* saveData() {
    try {
        // const groupIdState = yield select(getGroupIdState);
        const groups = yield select(getSettings);
        const groupIdStateString = JSON.stringify(groups);

        yield localStorage.setItem('safas', groupIdStateString);
        // yield put(setGroupIdSuccess());
    } catch (error) {
        console.log(error);
    }
}
export function* dataControl() {
    yield takeLatest(dataSaveRequest, saveData);
}
