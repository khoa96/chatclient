import { takeLatest, all, call, put } from 'redux-saga/effects';
import userAPI from 'services';
import { VALIDATE_STATUS_CODE, SUCCESS_STATUS_CODE } from 'utils/constants';
import { HANDLE_SUBMIT_LOGIN } from './constanst';
import { handleSubmitLoginSuccess, handleSubmitLoginFailure } from './actions';

function* handleSubmitLoginProcess({ payload }) {
  console.log(payload);
  try {
    const result = yield call(userAPI.handleSubmitLoginAPI, payload);
    console.log(result);
  } catch (error) {
    // handle error
    yield put(handleSubmitLoginFailure(error));
  }
}

export default function* watchSaga() {
  yield all([takeLatest(HANDLE_SUBMIT_LOGIN, handleSubmitLoginProcess)]);
}
