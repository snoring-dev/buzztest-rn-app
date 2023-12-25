export interface MenuIcon {
    name: string;
    lib: string;
    color: string;
    hoverColor: string;
}

export interface Menu {
    name: string;
    icon: MenuIcon;
    id: number | string;
    default?: boolean;
}

export interface MenuState {
  menus: Menu[];
  selectedMenuId: number | string;
}

export enum MenuActionTypes {
  SET_MENU_LIST = "@app/menu/SET_MENU_LIST",
  SET_SELECTED_MENU = "@app/menu/SET_SELECTED_MENU",
  RESET_DEFAULT_MENU = "@app/menu/RESET_DEFAULT_MENU",
}
