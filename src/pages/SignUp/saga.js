import { call, put, takeLatest} from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { register } from '@domain/api';
import { REGISTER } from './constants';


function* doRegister({ dataUser, cbSuccess }) {
    yield put(setLoading(true));
    try {
      const response = yield call(register, dataUser)
      const user = {
        email: 'blabla'
      }
      cbSuccess && cbSuccess(user);
    } catch (error) {
      console.log(error.message)
    }
    yield put(setLoading(false));
}


export default function* signUpSaga() {
    yield takeLatest(REGISTER, doRegister);
}