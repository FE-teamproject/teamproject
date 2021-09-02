import { authService, firebaseInstance } from 'firebaseinfo';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import {
  EMAIL_LOG_IN_REQUEST,
  EMAIL_SIGN_UP_REQUEST,
  GOOGLE_LOG_IN_REQUEST,
  EMAIL_LOG_IN_FAILURE,
  EMAIL_SIGN_UP_FAILURE,
  GOOGLE_LOG_IN_FAILURE,
} from '../reducers/user';

function* emailLogIn(action) {
  try {
    console.log('saga login');
    yield call(
      [authService, authService.signInWithEmailAndPassword],
      action.data.email,
      action.data.password,
    );
  } catch (err) {
    console.error(err.message);
    yield put({
      type: EMAIL_LOG_IN_FAILURE,
      data: err,
    });
  }
}

function* emailSignUp(action) {
  try {
    console.log('saga signup');
    yield call(
      [authService, authService.createUserWithEmailAndPassword],
      action.data.email,
      action.data.password,
    );
  } catch (err) {
    console.error(err.message);
    yield put({
      type: EMAIL_SIGN_UP_FAILURE,
      data: err,
    });
  }
}

function* googleLogIn() {
  try {
    let authProvider = new firebaseInstance.auth.GoogleAuthProvider();
    const result = yield call(
      [authService, authService.signInWithPopup],
      authProvider,
    );
    console.log(result);
  } catch (err) {
    console.error(err.message);
    yield put({
      type: GOOGLE_LOG_IN_FAILURE,
      data: err,
    });
  }
}

function* watchEmailLogIn() {
  yield takeLatest(EMAIL_LOG_IN_REQUEST, emailLogIn); //첫 번째 실행할때  reducer의 LOG_IN_REQUEST와 saga의 login이 동시에 실행됨
}

function* watchEmailSignUp() {
  yield takeLatest(EMAIL_SIGN_UP_REQUEST, emailSignUp);
}

function* watchGoogleLogIn() {
  yield takeLatest(GOOGLE_LOG_IN_REQUEST, googleLogIn);
}

export default function* userSaga() {
  yield all([
    fork(watchEmailLogIn),
    fork(watchEmailSignUp),
    fork(watchGoogleLogIn),
  ]);
}
