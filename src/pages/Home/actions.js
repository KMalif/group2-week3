import { GET_ALL_POST, SET_ALL_POST } from './constants';

export const getAllPost = (cbSuccess, cbFailed) => ({
  type: GET_ALL_POST,
  cbSuccess,
  cbFailed,
});

export const setAllPost = (dataPost) => ({
  type: SET_ALL_POST,
  dataPost,
});
