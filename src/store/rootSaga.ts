import { all, fork } from 'redux-saga/effects';
import { watchProductSagas } from 'state/product/saga';

export function* rootSaga() {
  yield all([fork(watchProductSagas)]);
}
