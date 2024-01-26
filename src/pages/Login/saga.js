import { call, put, takeLatest} from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { LOGIN } from './constants';


function* doLogin({ dataUser, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
      const response = yield call(login, dataUser)
      response.map(user => {
        if (user?.email === dataUser?.email){
          if(user?.password === dataUser?.password){
            cbSuccess && cbSuccess(response);
          }else {
            cbFailed && cbFailed(response);
          }
        }
      })
    } catch (error) {
      cbFailed && cbFailed(error.message);
    }
    yield put(setLoading(false));
}


export default function* loginSaga() {
    yield takeLatest(LOGIN, doLogin);
}