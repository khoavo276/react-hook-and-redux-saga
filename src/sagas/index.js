import { all } from 'redux-saga/effects';
import { getListUser } from './user';

export default function *rootSaga() {
    yield all([
        getListUser()
    ]);
}
