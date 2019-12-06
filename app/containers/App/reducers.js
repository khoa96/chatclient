/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  ADD_NOTIFICATION,
  RESET_NOTIFICATION_LIST,
  DELETE_NOTIFICATION,
} from './constants';

export const initialState = {
  notificationList: [],
};

const notificatioReducer = (state = initialState, action) =>
  produce(state, draff => {
    switch (action.type) {
      case ADD_NOTIFICATION:
        draff.notificationList = [...state.notificationList, action.payload];
        break;
      case RESET_NOTIFICATION_LIST:
        draff.notificationList = [];
        break;
      case DELETE_NOTIFICATION:
        draff.notificationList = state.notificationList.filter(
          item => item.id !== action.payload,
        );
        break;
      default:
        break;
    }
  });

export default notificatioReducer;
