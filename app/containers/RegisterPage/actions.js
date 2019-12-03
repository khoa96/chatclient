import { createSingleActions } from 'utils/reduxActions';
import {
  HANDLE_CHANGE_USER,
  HANDLE_SUBMIT_REGISTER_USER,
  HANDLE_SUBMIT_REGISTER_USER_SUCCESS,
  HANDLE_SUBMIT_REGISTER_USER_FAILURE,
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
