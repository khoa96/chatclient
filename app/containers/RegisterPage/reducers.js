/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  HANDLE_CHANGE_USER,
  HANDLE_SUBMIT_REGISTER_USER,
  HANDLE_SUBMIT_REGISTER_USER_FAILURE,
  HANDLE_SUBMIT_REGISTER_USER_SUCCESS,
  HANDLE_RESET_FORM,
} from './constanst';

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
      case HANDLE_SUBMIT_REGISTER_USER:
        draff.isLoading = true;
        draff.error = {};
        break;
      case HANDLE_SUBMIT_REGISTER_USER_SUCCESS:
        draff.isLoading = false;
        draff.error = {};
        break;
      case HANDLE_CHANGE_USER:
        draff.user = {
          ...state.user,
          ...action.payload,
        };
        break;
      case HANDLE_SUBMIT_REGISTER_USER_FAILURE:
        draff.isLoading = false;
        draff.error = action.payload;
        break;
      case HANDLE_RESET_FORM:
        draff.user = {
          username: '',
          email: '',
          password: '',
        };
        break;
      default:
        break;
    }
  });

export default registerReducer;
