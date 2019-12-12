import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import userAPI from 'services';
import { VALIDATE_STATUS_CODE, SUCCESS_STATUS_CODE } from 'utils/constants';
import { push } from 'connected-react-router';
import { addNotification } from 'containers/App/actions';
import { handleSetDefaultValue } from 'containers/LoginPage/actions';
import uuid from 'uuid';
import i18n from 'i18next';
import routers from 'utils/routers';
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
    if (status === SUCCESS_STATUS_CODE) {
      yield put(handleSubmitRegisterUserSuccess(data));
      yield put(handleSetDefaultValue(data));
      yield put(
        addNotification({
          id: uuid(),
          title: i18n.t('commons.titleNotification'),
          content: i18n.t('signup.singupSuccessMessage'),
        }),
      );
      yield delay(2000);
      yield put(handleResetForm());
      yield put(push(routers.login));
    }
    if (status === VALIDATE_STATUS_CODE) {
      yield put(handleSubmitRegisterUserFailure(data));
    }
  } catch (error) {
    yield put(handleSubmitRegisterUserFailure(error));
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(HANDLE_SUBMIT_REGISTER_USER, handleSubmitRegisterUserProcess),
  ]);
}
