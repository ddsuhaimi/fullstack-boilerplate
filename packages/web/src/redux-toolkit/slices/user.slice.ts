import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

//#region actions
export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByAmount = createAction<number>("counter/incrementByAmount");
// This action is what we will call using the dispatch in order to trigger the API call.
export const login = createAsyncThunk(
  "user/login",
  async (
    data: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    const { email, password } = data;
    const respons = await axios.post("http://localhost:4000/api/auth/login", {
      email,
      password,
    });

    if (respons.data.success) {
      axios.defaults.headers.common["Authorization"] = respons.data.data.accessToken;
      return respons.data.data;
    } else {
      return rejectWithValue(respons.data.errors);
    }
  }
);
export const register = createAsyncThunk(
  "user/register",
  async (
    data: {
      email: string;
      password: string;
      confirmPassword: string;
    },
    { rejectWithValue }
  ) => {
    const { email, password, confirmPassword } = data;
    try {
      const respons = await axios.post("auth/register", {
        email,
        password,
        passwordConfirm: confirmPassword,
      });
      return respons.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error?.response?.data);
      }
    }
  }
);
export const getAuthUser = createAsyncThunk("user/getAuthUser", async (accessToken: string, { rejectWithValue }) => {
  // console.log("accessToken getAuth", accessToken);
  axios.defaults.headers.common["Authorization"] = accessToken;
  const respons = await axios.get("http://localhost:4000/api/auth/me");
  if (respons.data.success) {
    return respons.data.data;
  } else {
    return rejectWithValue(respons.data.errors);
  }
});
//#endregion
type UserObject = {
  role: string;
  email: string;
  firstName: string;
  lastName: string;
};

type UserState = {
  data: UserObject | null;
  pending: boolean;
  error: any | null;
  value: number;
};

const initialState: UserState = {
  data: null,
  pending: false,
  error: null,
  value: 0,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(login.pending, (state) => {
      state.pending = true;
    })
    .addCase(login.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
      state.error = null;
    })
    .addCase(login.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload as object;
    })
    .addCase(getAuthUser.pending, (state, { payload }) => {
      state.pending = true;
    })
    .addCase(getAuthUser.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload as object;
    })
    .addCase(getAuthUser.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
      state.error = null;
    })
    .addCase(register.pending, (state) => {
      state.pending = true;
    })
    .addCase(register.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
      state.error = null;
    })
    .addCase(register.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload as object;
    });
});
