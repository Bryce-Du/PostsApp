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

export const addPost = createAsyncThunk('posts/addPost', async (formData) => {
  const response = await fetch('http://localhost:4000/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }
  return data
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
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
      })
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.unshift(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
})

// export const { addPost } = postSlice.actions
export default postSlice.reducer;