import { fork } from 'redux-saga/effects';

import { findIdWatch } from './findGroupById';
import { vkConnect } from './vkConnect';
import { dataControl } from './dataControl';

export function* sagas() {
    yield fork(vkConnect);
    yield fork(findIdWatch);
    yield fork(dataControl);
}
