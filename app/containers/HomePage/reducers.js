/* eslint-disable no-unused-vars */
import produce from 'immer';
import { initialUser } from './constants';
export const initialState = {
  user: initialState,
};

const homeChatReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      default:
        break;
    }
  });

export default homeChatReducer;
