/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  HANDLE_INPUT_CHANGE,
  HANDLE_SUBMIT_LOGIN,
  HANDLE_SUBMIT_LOGIN_FAILURE,
  HANDLE_SUBMIT_LOGIN_SUCCESS,
  HANDLE_RESET_LOGIN_FORM,
  HANDLE_SET_DEFAULT_VALUE,
  HANDLE_CHANGE_REMEMBER,
} from './constanst';
export const initialState = {
  isLoading: false,
  accessToken: '',
  remember: false,
  user: {
    email: '',
    password: '',
  },
  error: {},
};

const loginReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case HANDLE_SET_DEFAULT_VALUE:
        draff.user = action.payload;
        draff.error = {};
        break;
      case HANDLE_SUBMIT_LOGIN:
        draff.isLoading = true;
        draff.error = {};
        break;
      case HANDLE_SUBMIT_LOGIN_SUCCESS:
        draff.isLoading = false;
        draff.accessToken = action.payload;
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
      case HANDLE_CHANGE_REMEMBER:
        draff.remember = action.payload;
        break;
      case HANDLE_RESET_LOGIN_FORM:
        draff.user = {
          emai: '',
          password: '',
        };
        draff.error = {};
        break;
      default:
        break;
    }
  });

export default loginReducer;
