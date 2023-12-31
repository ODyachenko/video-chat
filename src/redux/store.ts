import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { userApi } from './api/userApi';
import { uploadsApi } from './api/uploadsApi';

export const store = configureStore({
  reducer: {
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer,
    [uploadsApi.reducerPath]: uploadsApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(uploadsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
