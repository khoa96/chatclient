import { takeLatest, all, call, put } from 'redux-saga/effects';
import userAPI from 'services';
import { VALIDATE_STATUS_CODE, SUCCESS_STATUS_CODE } from 'utils/constants';
import { HANDLE_SUBMIT_REGISTER_USER } from './constanst';
import {
  handleSubmitRegisterUserSuccess,
  handleSubmitRegisterUserFailure,
  handleResetForm,
} from './actions';

function* handleSubmitRegisterUserProcess({ payload }) {
  try {
    const result = yield call(userAPI.handleSubmitRegisterUserAPI, payload);
    const {
      status,
      data: { data },
    } = result;
    console.log(result);
    if (status === SUCCESS_STATUS_CODE) {
      yield put(handleSubmitRegisterUserSuccess(data));
      yield put(handleResetForm());
    }
    if (status === VALIDATE_STATUS_CODE) {
      yield put(handleSubmitRegisterUserFailure(data));
    }
  } catch (error) {
    // handle error
    yield put(handleSubmitRegisterUserFailure(error));
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(HANDLE_SUBMIT_REGISTER_USER, handleSubmitRegisterUserProcess),
  ]);
}
