import {AnyAction, createSlice} from '@reduxjs/toolkit';
import {setUserIdAction, clearUserStateAction} from '../action-creators/user';

export interface UserState {
  userId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userId: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setUserIdAction.fulfilled, (state, action: AnyAction) => {
      state.userId = action.payload;
    });
    builder.addCase(clearUserStateAction.fulfilled, state => {
      state.userId = null;
    });
  },
});

export default userSlice.reducer;
