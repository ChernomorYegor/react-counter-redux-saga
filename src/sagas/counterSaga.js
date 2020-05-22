import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import counterService from './../services/counterService';

function* fetchCounters() {
    try {
        let items = yield call(counterService.getItems);

        yield put({type: 'COUNTER/FETCH_SUCCESSFULLY', payload: {items}});
    } catch ({message}) {
        yield put({type: 'COUNTER/FETCH_ERROR', payload: {message}});
    }
}

function* setCounter(action) {
    try {
        let counters = yield select(state => state.counter.counters);
        let counter = yield call(counterService.setItem, counters[action.payload - 1]);

        yield put({type: 'COUNTER/SET_COUNTER_SUCCESSFULLY', payload: {counter}});
    } catch ({message}) {
        yield put({type: 'COUNTER/SET_COUNTER_ERROR', payload: {message}});
    }
}

function* fetchCountersSaga() {
    yield takeLatest('COUNTER/FETCH', fetchCounters);
}

function* setCounterSaga() {
    yield takeLatest('COUNTER/SET_COUNTERS', setCounter);
}

export default function* counterSaga() {
    yield all([
        fetchCountersSaga(),
        setCounterSaga(),
    ]);
};