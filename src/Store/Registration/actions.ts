import { FailureState, SuccessState } from "../../../types";
import {
  Category,
  ContactDetails,
  RegistrationActionTypes,
  UserFeed,
} from "./types";

export const setRegistrationCategories = (cats: Category[]) => ({
  type: RegistrationActionTypes.SET_REGISTRATION_CATEGORIES,
  payload: cats,
});

export const setContactDetails = (details: ContactDetails) => ({
  type: RegistrationActionTypes.SET_CONTACT_DETAILS,
  payload: {
    ...details,
  },
});

export const setFeedSettings = (options: UserFeed) => ({
  type: RegistrationActionTypes.SET_FEED_OPTIONS,
  payload: {
    ...options,
  },
});

export const setLoading = (isLoading: boolean) => ({
  type: RegistrationActionTypes.SET_REGISTRATION_LOADING,
  payload: isLoading,
});

export const setLoadingFailure = (failure: FailureState) => ({
  type: RegistrationActionTypes.SET_REGISTRATION_FAILURE,
  payload: failure,
});

export const setLoadingSuccess = (success: SuccessState) => ({
  type: RegistrationActionTypes.SET_REGISTRATION_SUCCESS,
  payload: success,
});

export const setCategories = (categories: Category[]) => ({
  type: RegistrationActionTypes.SET_REGISTRATION_CATEGORIES,
  payload: categories,
});

export const setSelectedCategories = (categories: Category[]) => ({
  type: RegistrationActionTypes.SET_CATEGORIES_SELECTION,
  payload: categories,
});
