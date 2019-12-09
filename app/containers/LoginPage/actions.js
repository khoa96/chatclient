import { createSingleActions } from 'utils/reduxActions';
import {
  HANDLE_SUBMIT_LOGIN,
  HANDLE_SUBMIT_LOGIN_FAILURE,
  HANDLE_SUBMIT_LOGIN_SUCCESS,
  HANDLE_INPUT_CHANGE,
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
