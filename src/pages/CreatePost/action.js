import { SET_IMAGE, SET_CREATE_POST } from "./constants";

export const setImage = (imageData, cbSuccess, cbFailed) => {
    console.log(imageData, '<<<< ACTION')
    return {
        type: SET_IMAGE,
        imageData,
        cbSuccess,
        cbFailed
    }
}

export const setPost = (postData, cbSuccess, cbFailed) => ({
    type: SET_CREATE_POST,
    postData,
    cbSuccess,
    cbFailed
})