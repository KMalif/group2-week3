import { REGISTER } from "./constants"

export const register = (dataUser, cbSuccess) => ({
    type: REGISTER,
    dataUser,
    cbSuccess
})