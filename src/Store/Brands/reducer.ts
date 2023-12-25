import { AnyAction } from "redux";
import { BrandActionTypes, BrandState } from "./types";

const initialState: BrandState = {
  data: [],
  isLoading: false,
  failure: { status: true, message: "OK" },
};

function reducer(state: BrandState = initialState, action: AnyAction) {
  const { type = "", payload = {} } = action;
  switch (type) {
    case BrandActionTypes.SET_BRANDS_DATA: {
      return {
        ...state,
        failure: initialState.failure,
        data: payload,
      };
    }
    case BrandActionTypes.SET_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: payload,
      };
    }
    case BrandActionTypes.SET_BRANDS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case BrandActionTypes.SET_BRANDS_FAILED: {
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

export { reducer as BrandsReducer };