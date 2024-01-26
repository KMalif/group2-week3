import { SET_EDIT_PROFILE } from "./constants";

export const setEditProfile = (editProfileData, cbSuccess, cbFailed) => {
    return {
        type: SET_EDIT_PROFILE,
        editProfileData,
        cbSuccess,
        cbFailed
    }
}