import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  homePost: 'posts',
  user: 'users/:id',
  ping: 'ping.json',

  
  register: 'users/',
  login: 'users/',
  uploadImage: 'https://api.cloudinary.com/v1_1/doitbylro/image/upload',
  storePost: 'posts',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const fetchHomePostData = () => callAPI(urls.homePost, 'GET');
export const fetchUserData = () => callAPI(urls.user, 'GET');
export const callUploadImage = async (url, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: url,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

export const register = (dataUser) => {
  console.log(dataUser, '<<< DATA USER API')
  return callAPI(urls.register, 'POST', {}, {}, dataUser);
}

export const login = () => {
  return callAPI(urls.login, 'GET', {}, {});
}
export const uploadImage = (imageData) => callUploadImage(urls.uploadImage, 'post', {}, {}, imageData)
export const storePost = (postData) => callAPI(urls.storePost, 'POST', {}, {}, postData)

