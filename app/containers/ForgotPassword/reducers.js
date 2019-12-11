/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  HANDLE_SUBMIT_CHANGE_PASSWORD,
  HANDLE_SUBMIT_CHANGE_PASSWORD_SUCCESS,
  HANDLE_SUBMIT_CHANGE_PASSWORD_FAILURE,
} from './constants';
export const initialState = {
  isLoading: '',
  error: '',
};

const homeReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case HANDLE_SUBMIT_CHANGE_PASSWORD:
        draff.isLoading = true;
        draff.error = '';
        break;
      case HANDLE_SUBMIT_CHANGE_PASSWORD_SUCCESS:
        draff.isLoading = false;
        draff.error = '';
        break;
      case HANDLE_SUBMIT_CHANGE_PASSWORD_FAILURE:
        draff.isLoading = false;
        draff.error = action.payload;
        break;
      default:
        break;
    }
  });

export default homeReducer;
