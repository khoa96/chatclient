import { createSingleActions } from 'utils/reduxActions';
import {
  HANDLE_SUBMIT_CHANGE_PASSWORD,
  HANDLE_SUBMIT_CHANGE_PASSWORD_FAILURE,
  HANDLE_SUBMIT_CHANGE_PASSWORD_SUCCESS,
} from './constants';

export const [
  handleSubmitChangePassword,
  handleSubmitChangePasswordSuccess,
  handleSubmitChangePasswordFailure,
] = [
  createSingleActions(HANDLE_SUBMIT_CHANGE_PASSWORD),
  createSingleActions(HANDLE_SUBMIT_CHANGE_PASSWORD_SUCCESS),
  createSingleActions(HANDLE_SUBMIT_CHANGE_PASSWORD_FAILURE),
];
