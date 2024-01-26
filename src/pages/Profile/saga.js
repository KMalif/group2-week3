import { takeLatest, call, put } from 'redux-saga/effects';
import { uploadImage, storePost } from '@domain/api';
import { SET_IMAGE } from './constants';

function* doEditProfile({ editProfileData, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(uploadImage, editProfileData)
        cbSuccess && cbSuccess();
    } catch (error) {
        cbFailed && cbFailed(error.message)
    }
    yield put(setLoading(false));
}

export default function* editProfileSaga() {
    yield takeLatest(SET_IMAGE, doEditProfile);
}