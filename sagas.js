import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

// Worker Function
export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

// Watcher Function
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* rootSaga() {
    yield all([
        watchIncrementAsync(),
    ]);
}