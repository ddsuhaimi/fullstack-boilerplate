import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { userReducer } from "./slices/user.slice";
import { postReducer } from "./slices/post.slice";

const combinedReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

// NEXT JS HYDRATE
// https://stackoverflow.com/questions/70638869/redux-toolkit-typescript-type-issue-with-next-js-and-next-redux-wrapper/70640827#70640827
const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: reducer,
  });
export const store = makeStore();

type Store = ReturnType<typeof makeStore>;

// export const wrapper = createWrapper(makeStore, { debug: true });
// END NEXT JS HYDRATE

// export const store = configureStore({
//   reducer: combinedReducer,
// });

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
