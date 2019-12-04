import { takeLatest, all, call } from 'redux-saga/effects';
import userAPI from 'services';
import { HANDLE_SUBMIT_REGISTER_USER } from './constanst';

function* handleSubmitRegisterUserProcess({ payload }) {
  try {
    const result = yield call(userAPI.handleSubmitRegisterUserAPI, payload);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(HANDLE_SUBMIT_REGISTER_USER, handleSubmitRegisterUserProcess),
  ]);
}
