import { all, fork } from 'redux-saga/effects';
import { usersListSaga } from './userSaga';


export default function* rootSaga() {
  yield all([
    fork(usersListSaga),

  ]);
}