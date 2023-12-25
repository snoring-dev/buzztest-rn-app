import { AnyAction } from "redux";
import { Menu, MenuActionTypes, MenuState } from "./types";

const initialState: MenuState = {
  menus: [],
  selectedMenuId: 0,
};

function reducer(state: MenuState = initialState, action: AnyAction) {
  const { type = "", payload = {} } = action;
  switch (type) {
    case MenuActionTypes.SET_MENU_LIST: {
      return {
        ...state,
        menus: [...payload],
        selectedMenuId:
          payload.find((mn: Menu) => mn.default === true)?.id ?? 0,
      };
    }
    case MenuActionTypes.SET_SELECTED_MENU: {
      return {
        ...state,
        selectedMenuId: payload?.id ?? 0,
      };
    }
    case MenuActionTypes.RESET_DEFAULT_MENU: {
      return {
        ...state,
        selectedMenuId:
          state.menus.find((mn: Menu) => mn.default === true)?.id ?? 0,
      };
    }
    default: {
      return state;
    }
  }
}

export { reducer as MenuReducer };
