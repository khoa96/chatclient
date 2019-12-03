/* eslint-disable no-param-reassign */
import produce from 'immer';
import { HANDLE_CHANGE_USER } from './constanst';

export const initialState = {
  isLoading: false,
  user: {
    username: '',
    email: '',
    password: '',
  },
  error: {},
};

const registerReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case HANDLE_CHANGE_USER:
        draff.user = {
          ...state.user,
          ...action.payload,
        };
        break;
      default:
        break;
    }
  });

export default registerReducer;
