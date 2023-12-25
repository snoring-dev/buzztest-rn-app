import { FailureState } from "../../../types";

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  roles: string[];
  gender: string;
  categories: string;
  city: City;
  birthDate: any;
  email: string;
}

export interface City {
  name: string;
}

export interface AuthState {
  cookieSession: string;
  profile: Profile | null;
  isLoading?: boolean;
  failure?: FailureState | null;
}

export enum AuthActionTypes {
  SET_COOKIE_VALUE = "@app/auth/SET_COOKIE_VALUE",
  SET_AUTH_FAILED = "@app/auth/SET_AUTH_FAILED",
  SET_AUTH_LOADING = "@app/auth/SET_AUTH_LOADING",
  SET_PROFILE_DATA = "@app/auth/SET_PROFILE_DATA",
}
