import { FailureState } from "../../../types";
import { AuthActionTypes, Profile } from "./types";

export const setSessionCookie = (cookieSession: string) => {
  return {
    type: AuthActionTypes.SET_COOKIE_VALUE,
    payload: { cookieSession },
  };
};

export const setAuthLoading = (value: boolean) => {
    return {
        type: AuthActionTypes.SET_AUTH_LOADING,
        payload: value,
    };
}

export const setProfileData = (profile: Profile) => {
  return {
      type: AuthActionTypes.SET_PROFILE_DATA,
      payload: profile,
  };
}

export const setAuthenticationFailed = (failure: FailureState) => ({
  type: AuthActionTypes.SET_AUTH_FAILED,
  payload: failure,
});