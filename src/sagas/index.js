import { fork } from 'redux-saga/effects';

import { findIdWatch } from './findGroupById';
import { vkConnect } from './vkConnect';

export function* sagas() {
    yield fork(vkConnect);
    yield fork(findIdWatch);
}
