import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

//#region actions
// This action is what we will call using the dispatch in order to trigger the API call.
export const create = createAsyncThunk(
  "post/create",
  async (
    data: {
      title: string;
      text: string;
    },
    { rejectWithValue }
  ) => {
    const { text, title } = data;
    const respons = await axios.post("/posts", {
      text,
      title,
    });

    if (respons.data.success) {
      return respons.data.data;
    } else {
      return rejectWithValue(respons.data.errors);
    }
  }
);
export const getAll = createAsyncThunk(
  "post/getAll",
  async (query: { filter: object; sort: object }, { rejectWithValue }) => {
    const respons = await axios.get("/posts", { params: query });

    if (respons.data.success) {
      return respons.data.data;
    } else {
      return rejectWithValue(respons.data.errors);
    }
  }
);

export const getOnePost = createAsyncThunk("post/getOnePost", async (postId: string, { rejectWithValue }) => {
  const respons = await axios.get(`/posts/${postId}`);

  if (respons.data.success) {
    return respons.data.data;
  } else {
    return rejectWithValue(respons.data.errors);
  }
});

type PostState = {
  data: Array<any> | null;
  pending: boolean;
  error: any | null;
  value: number;
  postDetail: any;
};

const initialState: PostState = {
  data: null,
  pending: false,
  error: null,
  value: 0,
  postDetail: null,
};

export const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(create.pending, (state) => {
      state.pending = true;
    })
    .addCase(create.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
      state.error = null;
    })
    .addCase(create.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload as object;
    })
    .addCase(getAll.pending, (state, { payload }) => {
      state.pending = true;
    })
    .addCase(getAll.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload as object;
    })
    .addCase(getAll.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
      state.error = null;
    })
    .addCase(getOnePost.pending, (state) => {
      state.pending = true;
    })
    .addCase(getOnePost.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.postDetail = payload;
      state.error = null;
    })
    .addCase(getOnePost.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload as object;
    });
});
