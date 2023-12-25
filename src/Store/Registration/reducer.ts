import { omit } from "ramda";
import { AnyAction } from "redux";
import { RegistrationState, RegistrationActionTypes } from "./types";

const initialState: RegistrationState = {
    contact: null,
    feed: null,
    categories: [],
    failed: null,
    success: null,
    isLoading: false,
};

function reducer(state: RegistrationState = initialState, action: AnyAction) {
    const { type = '', payload = {} } = action;
    switch (type) {
      // switches
      case RegistrationActionTypes.SET_CONTACT_DETAILS: {
        return {
          ...state,
          contact: {
            ...payload,
          },
        };
      }
      case RegistrationActionTypes.SET_FEED_OPTIONS: {
        return {
          ...state,
          feed: {
            selectedCategories: state.feed?.selectedCategories,
            ...payload,
          },
        };
      }
      case RegistrationActionTypes.SET_CATEGORIES_SELECTION: {
        return {
          ...state,
          feed: {
            ...state.feed,
            selectedCategories: [...payload],
          },
        };
      }
      case RegistrationActionTypes.SET_REGISTRATION_FAILURE: {
        return {
          ...state,
          failed: {
            ...state,
            ...payload,
          },
        };
      }
      case RegistrationActionTypes.SET_REGISTRATION_SUCCESS: {
        return {
          ...omit(['password'], state.contact),
          success: {
            ...payload,
          },
        };
      }
      case RegistrationActionTypes.SET_REGISTRATION_CATEGORIES: {
          return {
              ...state,
              categories: [...payload],
              isLoading: false,
          };
      }
      case RegistrationActionTypes.SET_REGISTRATION_LOADING: {
        return {
            ...state,
            isLoading: payload,
        };
      }
      default: {
          return state;
      }
    }
}

export {reducer as RegistrationReducer};