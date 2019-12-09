/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  HANDLE_INPUT_CHANGE,
  HANDLE_SUBMIT_LOGIN,
  HANDLE_SUBMIT_LOGIN_FAILURE,
  HANDLE_SUBMIT_LOGIN_SUCCESS,
} from './constanst';
export const initialState = {
  isLoading: false,
  user: {
    email: '',
    password: '',
  },
  error: {},
};

const loginReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case HANDLE_SUBMIT_LOGIN:
        draff.isLoading = true;
        draff.error = {};
        break;
      case HANDLE_SUBMIT_LOGIN_SUCCESS:
        draff.isLoading = false;
        draff.error = {};
        break;
      case HANDLE_SUBMIT_LOGIN_FAILURE:
        draff.isLoading = false;
        draff.error = action.payload;
        break;
      case HANDLE_INPUT_CHANGE:
        draff.user = {
          ...state.user,
          ...action.payload,
        };
        break;
      default:
        break;
    }
  });

export default loginReducer;
