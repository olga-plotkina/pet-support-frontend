import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';

const friendsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'news',
  initialState: friendsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFriends.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        const index = state.items.findIndex(friend => friend.id === action.payload.id);
        state.items.splice(index, 1);
      }),
});

export const friendsReducer = friendsSlice.reducer;
