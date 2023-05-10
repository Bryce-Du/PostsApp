import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch('http://localhost:4000/api/posts');
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export const { addPost } = postSlice.actions
export default postSlice.reducer;