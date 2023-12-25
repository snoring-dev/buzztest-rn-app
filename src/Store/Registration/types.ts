import { FailureState, SuccessState } from "../../../types";

export interface Category {
  label: string;
  value: string;
}

export interface ContactDetails {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  country?: string;
  city?: string;
  phone?: string;
}

export interface UserFeed {
  gender?: string | undefined;
  age?: string;
  receiveUpdates: boolean;
  selectedCategories?: Category[];
}

export interface RegistrationState {
  contact: ContactDetails | null;
  feed: UserFeed | null;
  categories: Category[] | null;
  failed: FailureState | null;
  success: SuccessState | null;
  isLoading: boolean;
}

export interface City {
  name: string;
}

export interface RegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  plainPassword: string;
  phone: string;
  birthDate: string;
  gender: string;
  categories: string;
  city: City;
  username?: string;
}

export enum RegistrationActionTypes {
  SET_CONTACT_DETAILS = "@app/registration/SET_CONTACT_DETAILS",
  SET_FEED_OPTIONS = "@app/registration/SET_FEED_OPTIONS",
  SET_CATEGORIES_SELECTION = "@app/registration/SET_CATEGORIES_SELECTION",
  SEND_USER_DATA = "@app/registration/SEND_USER_DATA",
  SET_REGISTRATION_SUCCESS = "@app/registration/SET_REGISTRATION_SUCCESS",
  SET_REGISTRATION_FAILURE = "@app/registration/SET_REGISTRATION_FAILURE",
  SET_REGISTRATION_CATEGORIES = "@app/registration/SET_REGISTRATION_CATEGORIES",
  SET_REGISTRATION_LOADING = "@app/registration/SET_REGISTRATION_LOADING",
}
