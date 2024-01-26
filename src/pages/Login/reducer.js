import { produce } from "immer";
import {SETUSER} from './actions'

export const initialState = {
    user: {}
}

const loginReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch(action.type) {
            case SETUSER:
                draft.step = action.step
                break;
            
            default:
                break;
        }
    })

export default loginReducer;