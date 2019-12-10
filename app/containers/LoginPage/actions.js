import { createSingleActions } from 'utils/reduxActions';
import {
  HANDLE_SUBMIT_LOGIN,
  HANDLE_SUBMIT_LOGIN_FAILURE,
  HANDLE_SUBMIT_LOGIN_SUCCESS,
  HANDLE_INPUT_CHANGE,
  HANDLE_RESET_LOGIN_FORM,
  HANDLE_SET_DEFAULT_VALUE,
  HANDLE_CHANGE_REMEMBER,
} from './constanst';

export const [
  handleSubmitLogin,
  handleSubmitLoginSuccess,
  handleSubmitLoginFailure,
] = [
  createSingleActions(HANDLE_SUBMIT_LOGIN),
  createSingleActions(HANDLE_SUBMIT_LOGIN_SUCCESS),
  createSingleActions(HANDLE_SUBMIT_LOGIN_FAILURE),
];

export const handleInputChange = createSingleActions(HANDLE_INPUT_CHANGE);
export const handleResetLoginForm = createSingleActions(
  HANDLE_RESET_LOGIN_FORM,
);
export const handleSetDefaultValue = createSingleActions(
  HANDLE_SET_DEFAULT_VALUE,
);
export const handleChangeRemember = createSingleActions(HANDLE_CHANGE_REMEMBER);
