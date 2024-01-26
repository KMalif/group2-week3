import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchHomePostData } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_ALL_POST } from './constants';
import { setAllPost } from './actions';

function* getAllPost(cbSuccess, cbFailed) {
  yield put(setLoading(true));
  try {
    const res = yield call(fetchHomePostData);
    yield put(setAllPost(res));
    cbSuccess && cbSuccess(res);
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, getAllPost);
}
