import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { userReducer } from "./slices/user.slice";
import { postReducer } from "./slices/post.slice";
//   import { kanyeReducer } from '../features/kanye';

const combinedReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  // kanyeQuote: kanyeReducer,
});

// https://stackoverflow.com/questions/70638869/redux-toolkit-typescript-type-issue-with-next-js-and-next-redux-wrapper/70640827#70640827
const reducer = (state: ReturnType<typeof combinedReducer> | undefined, action: AnyAction) => {
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
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper(makeStore, { debug: true });
