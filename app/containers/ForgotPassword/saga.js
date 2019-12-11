import { put, takeLatest, call } from 'redux-saga/effects';
import userAPI from 'services';
import { push } from 'connected-react-router';
import { SUCCESS_STATUS_CODE, VALIDATE_STATUS_CODE } from 'utils/constants';
import routers from 'utils/routers';
import { HANDLE_SUBMIT_CHANGE_PASSWORD } from './constants';
import {
  handleSubmitChangePasswordSuccess,
  handleSubmitChangePasswordFailure,
} from './actions';

function* handleChangePasswordProcess({ payload }) {
  try {
    const result = yield call(userAPI.handleSubmitChangePasswordAPI, payload);
    const {
      status,
      data: { data },
    } = result;
    if (status === SUCCESS_STATUS_CODE) {
      yield put(handleSubmitChangePasswordSuccess());
      yield put(push(routers.confirmResetPassword));
    }
    if (status === VALIDATE_STATUS_CODE) {
      yield put(handleSubmitChangePasswordFailure(data));
    }
  } catch (err) {
    yield put(handleSubmitChangePasswordFailure(err));
  }
}

export default function* watchSaga() {
  yield takeLatest(HANDLE_SUBMIT_CHANGE_PASSWORD, handleChangePasswordProcess);
}
