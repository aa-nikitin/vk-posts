import { takeLatest, put, call, select } from 'redux-saga/effects';
import { callAPI } from '../api';

import {
    fetchFindGroupByIdRequest,
    fetchFindGroupByIdSuccess,
    fetchFindGroupByIdFailure
} from '../actions';

import { getFoundGroupById } from '../reducers';

function* getGroupsInfo(url) {
    try {
        const [{ id, photo_100: photo, name }] = yield call(
            callAPI,
            'groups.getById',
            {
                group_id: url,
                v: '5.100'
            }
        );

        yield put(
            fetchFindGroupByIdSuccess({
                id: id,
                photo: photo,
                name: name,
                type: 'public'
            })
        );
    } catch (error) {
        yield put(fetchFindGroupByIdFailure(error));
    }
}

function* getUsersInfo(url) {
    try {
        const [{ id, photo_100: photo, first_name, last_name }] = yield call(
            callAPI,
            'users.get',
            {
                user_ids: url,
                fields: 'photo_100',
                v: '5.100'
            }
        );

        yield put(
            fetchFindGroupByIdSuccess({
                id: id,
                photo: photo,
                name: `${first_name} ${last_name}`,
                type: 'user'
            })
        );
    } catch (error) {
        yield getGroupsInfo(url);
    }
}

function* getInfo() {
    try {
        const { url } = yield select(getFoundGroupById);
        let id = '';
        let str = url.replace(/[\w/:]*vk\.com\//g, '').replace(/\/[\w]+/g, '');

        if (str.indexOf('public') === 0) {
            id = str.replace('public', '');
            yield getGroupsInfo(id);
        } else {
            yield getUsersInfo(str);
        }
    } catch (error) {
        yield put(fetchFindGroupByIdFailure(error));
    }
}

export function* findIdWatch() {
    yield takeLatest(fetchFindGroupByIdRequest, getInfo);
}
