import { combineReducers } from "redux";
import { AuthReducer } from "./Auth/reducer";
import { AuthState } from "./Auth/types";
import { BrandsReducer } from "./Brands/reducer";
import { BrandState } from "./Brands/types";
import { MenuReducer } from "./Menu/reducer";
import { MenuState } from "./Menu/types";
import { RegistrationReducer } from "./Registration/reducer";
import { RegistrationState } from "./Registration/types";

export interface ApplicationState {
  registration: RegistrationState;
  brands: BrandState;
  tabbar: MenuState;
  auth: AuthState;
}

export const getRootReducer = () => combineReducers({
    registration: RegistrationReducer,
    brands: BrandsReducer,
    tabbar: MenuReducer,
    auth: AuthReducer,
});
