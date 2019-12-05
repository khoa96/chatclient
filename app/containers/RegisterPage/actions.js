import { createSingleActions } from 'utils/reduxActions';
import {
  HANDLE_CHANGE_USER,
  HANDLE_SUBMIT_REGISTER_USER,
  HANDLE_SUBMIT_REGISTER_USER_SUCCESS,
  HANDLE_SUBMIT_REGISTER_USER_FAILURE,
  HANDLE_RESET_FORM,
} from './constanst';

export const handleChangeUser = createSingleActions(HANDLE_CHANGE_USER);
export const [
  handleSubmitRegisterUser,
  handleSubmitRegisterUserSuccess,
  handleSubmitRegisterUserFailure,
] = [
  createSingleActions(HANDLE_SUBMIT_REGISTER_USER),
  createSingleActions(HANDLE_SUBMIT_REGISTER_USER_SUCCESS),
  createSingleActions(HANDLE_SUBMIT_REGISTER_USER_FAILURE),
];

export const handleResetForm = createSingleActions(HANDLE_RESET_FORM);
