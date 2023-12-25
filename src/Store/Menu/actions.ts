import { Menu, MenuActionTypes } from "./types";

export const setMenuList = (data: any) => ({
  type: MenuActionTypes.SET_MENU_LIST,
  payload: data,
});

export const setSelectedMenu = (menu: Menu) => ({
  type: MenuActionTypes.SET_SELECTED_MENU,
  payload: menu,
});

export const resetDefaultMenu = () => ({
  type: MenuActionTypes.RESET_DEFAULT_MENU,
});
