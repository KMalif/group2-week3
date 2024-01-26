import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { uploadImage, storePost } from '@domain/api';
import { SET_IMAGE, SET_CREATE_POST } from './constants';

function* doSetImage({ imageData, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(uploadImage, imageData)
        cbSuccess && cbSuccess(response?.secure_url);
    } catch (error) {
        cbFailed && cbFailed(error.message)
    }
    yield put(setLoading(false));
}

function* doCreatePost({ postData, cbSuccess, cbFailed }) {
    yield put(setLoading(true));
    try {
        const response = yield call(storePost, postData)
        console.log(response)
        cbSuccess && cbSuccess();
    } catch (error) {
        cbFailed && cbFailed(error.message)
    }
    yield put(setLoading(false));
}

export default function* createPostSaga() {
    yield takeLatest(SET_IMAGE, doSetImage);
    yield takeLatest(SET_CREATE_POST, doCreatePost);
}