import { configureStore } from '@reduxjs/toolkit'
import { postsSlice } from './posts/slice'
export const store = configureStore({
  reducer: {
    postReducer: postsSlice.reducer,
  },
})