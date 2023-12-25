import { AnyAction } from "redux";
import { AuthActionTypes, AuthState } from "./types";

const initialState: AuthState = {
  cookieSession: "",
  profile: null,
  isLoading: false,
  failure: { status: false, message: "OK" },
};

function reducer(state: AuthState = initialState, action: AnyAction) {
  const { type = "", payload = {} } = action;
  switch (type) {
    case AuthActionTypes.SET_COOKIE_VALUE: {
      return {
        ...state,
        failure: { status: false, message: "OK" },
        ...payload,
      };
    }
    case AuthActionTypes.SET_AUTH_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case AuthActionTypes.SET_PROFILE_DATA: {
      return {
        ...state,
        profile: { ...payload },
        failure: { status: false, message: "OK" },
      };
    }
    case AuthActionTypes.SET_AUTH_FAILED: {
      return {
        ...state,
        isLoading: false,
        failure: {
          ...payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { reducer as AuthReducer };