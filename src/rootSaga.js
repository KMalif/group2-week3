import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import signUpSaga from '@pages/SignUp/saga';
import loginSaga from '@pages/Login/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    signUpSaga(),
    loginSaga()
  ]);
}


