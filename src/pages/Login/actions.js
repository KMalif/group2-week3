import { LOGIN } from "./constants"

export const login = (dataUser, cbSuccess, cbFailed) => ({
    type: LOGIN,
    dataUser,
    cbSuccess,
    cbFailed
})