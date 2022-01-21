import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface FormState {
  value: string;
}

const initialState: FormState = {
  value: '',
};

export const counterOfferSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    handleCounterOffer: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {  handleCounterOffer } = counterOfferSlice.actions;

export const selectCounterOffer = (state: RootState) => state.counter.value;

export default counterOfferSlice.reducer;