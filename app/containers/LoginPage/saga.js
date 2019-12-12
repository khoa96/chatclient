import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import userAPI from 'services';
import { VALIDATE_STATUS_CODE, SUCCESS_STATUS_CODE } from 'utils/constants';
import { setAccessToken } from 'utils/sessionStorage';
import { addNotification } from 'containers/App/actions';
import uuid from 'uuid';
import i18n from 'i18next';
import routers from 'utils/routers';
import { push } from 'connected-react-router';
import { HANDLE_SUBMIT_LOGIN } from './constanst';
import {
  handleSubmitLoginSuccess,
  handleSubmitLoginFailure,
  handleResetLoginForm,
} from './actions';

function* handleSubmitLoginProcess({ payload }) {
  try {
    const result = yield call(userAPI.handleSubmitLoginAPI, payload);
    const {
      status,
      data: { data },
    } = result;
    if (status === SUCCESS_STATUS_CODE) {
      yield put(handleSubmitLoginSuccess(data));
      setAccessToken(data);
      yield put(
        addNotification({
          id: uuid(),
          title: i18n.t('commons.titleNotification'),
          content: i18n.t('signin.singinSuccessMessage'),
        }),
      );
      yield delay(2000);
      yield put(push(routers.homeChat));
      yield put(handleResetLoginForm());
    }
    if (status === VALIDATE_STATUS_CODE) {
      yield put(handleSubmitLoginFailure(data));
    }
  } catch (error) {
    yield put(handleSubmitLoginFailure(error));
  }
}

export default function* watchSaga() {
  yield all([takeLatest(HANDLE_SUBMIT_LOGIN, handleSubmitLoginProcess)]);
}
