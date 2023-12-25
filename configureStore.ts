import { Store, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ApplicationState, getRootReducer } from "./src/Store";

const composeEnhancer =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const configureStore = (): Store<ApplicationState> => {
  let initialState: ApplicationState = {
    registration: {
      categories: [],
      contact: {
        city: "",
        country: "",
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
      },
      failed: {
        status: false,
        message: "",
      },
      success: {
        status: false,
        message: "",
      },
      isLoading: false,
      feed: {
        age: "",
        gender: undefined,
        receiveUpdates: false,
        selectedCategories: [],
      },
    },
    brands: {
      data: [],
      isLoading: false,
      failure: { status: false, message: "OK" },
    },
    tabbar: {
      menus: [],
      selectedMenuId: 0,
    }
  };

  const middlewares = [thunk];

  const store = createStore(
    getRootReducer(),
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
};
