/* eslint-disable no-param-reassign */
import produce from 'immer';
import { initialUser, HANLDE_CHANGE_NAVIGATION_TYPE } from './constants';
export const initialState = {
  user: initialUser,
  navigationType: 'setting',
};

const homeChatReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case HANLDE_CHANGE_NAVIGATION_TYPE:
        draff.navigationType = action.payload;
        break;
      default:
        break;
    }
  });

export default homeChatReducer;
