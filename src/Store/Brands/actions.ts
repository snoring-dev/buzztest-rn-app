import { FailureState } from "../../../types";
import { BrandActionTypes } from "./types";

export const setBrandsData = (data: any) => ({
  type: BrandActionTypes.SET_BRANDS_DATA,
  payload: data,
});

export const setBrandsLoading = (loading: boolean) => ({
  type: BrandActionTypes.SET_BRANDS_LOADING,
  payload: loading,
});

export const setBrandsFailed = (failure: FailureState) => ({
  type: BrandActionTypes.SET_BRANDS_FAILED,
  payload: failure,
});

export const setCompainDetails = (payload: any) => ({
  type: BrandActionTypes.SET_SELECTED_PRODUCT,
  payload,
});