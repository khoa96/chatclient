import { createSingleActions } from 'utils/reduxActions';
import {
  ADD_NOTIFICATION,
  RESET_NOTIFICATION_LIST,
  DELETE_NOTIFICATION,
} from './constants';

export const addNotification = createSingleActions(ADD_NOTIFICATION);
export const resetNotificationList = createSingleActions(
  RESET_NOTIFICATION_LIST,
);
export const deleteNotification = createSingleActions(DELETE_NOTIFICATION);
