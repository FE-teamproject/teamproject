import produce from 'immer';

export const initialState = {
  logInDone: false,
  logOutDone: false,
  sinUpDone: false,
  message: null,
  user: null,
  uid: null,
  displayName: null,
};

export const EMAIL_LOG_IN_REQUEST = 'EMAIL_LOG_IN_REQUEST';
export const EMAIL_LOG_IN_FAILURE = 'EMAIL_LOG_IN_FAILURE';

export const EMAIL_SIGN_UP_REQUEST = 'EMAIL_SIGN_UP_REQUEST';
export const EMAIL_SIGN_UP_FAILURE = 'EMAIL_SIGN_UP_FAILURE';

export const GOOGLE_LOG_IN_REQUEST = 'GOOGLE_LOG_IN_REQUEST';
export const GOOGLE_LOG_IN_FAILURE = 'GOOGLE_LOG_IN_FAILURE';

export const AUTH_STATE_CHANGE = 'AUTH_STATE_CHANGE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const signupwithEmail = data => ({
  type: EMAIL_SIGN_UP_REQUEST,
  data,
});
export const loginwithEmail = data => ({
  type: EMAIL_LOG_IN_REQUEST,
  data,
});

export const loginWithGoogle = () => ({
  type: GOOGLE_LOG_IN_REQUEST,
});

export const authStateChange = data => ({
  type: AUTH_STATE_CHANGE,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case EMAIL_LOG_IN_REQUEST:
      case EMAIL_SIGN_UP_REQUEST:
      case GOOGLE_LOG_IN_REQUEST:
        draft.logInDone = false;
        break;
      case EMAIL_LOG_IN_FAILURE:
      case EMAIL_SIGN_UP_FAILURE:
      case GOOGLE_LOG_IN_FAILURE:
        draft.message = action.data.message;
        break;
      case AUTH_STATE_CHANGE:
        draft.user = action.data;
        if (action.data) {
          draft.uid = action.data.uid;
          draft.displayName = action.data.displayName;
          draft.logInDone = true;
        } else draft.logInDone = false;
        break;
      default:
        break;
    }
  });

export default reducer;
