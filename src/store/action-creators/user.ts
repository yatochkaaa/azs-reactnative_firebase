import {createAsyncThunk} from '@reduxjs/toolkit';

export const setUserIdAction = createAsyncThunk('user/setId', (uid: string) => {
  return uid;
});

export const clearUserStateAction = createAsyncThunk(
  'user/clearState',
  () => {},
);
