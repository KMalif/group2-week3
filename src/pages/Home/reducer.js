import { produce } from 'immer';
import { SET_ALL_POST } from './constants';

export const initialState = {
  dataPost: [],
};

export const storedKey = ['dataPost'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST:
        draft.dataPost = action.dataPost;
        break;
      default:
        break;
    }
  });

export default homeReducer;
