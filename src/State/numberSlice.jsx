import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  winningNumber: null,
  selectedNumber: null,
  values: {}, // Format: { [choice]: amount }
  isTimerActive: true,
  gameId: "67d7aea9b8ee0d27b19776d1" // Your game ID
};

export const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    selectNumber: (state, action) => {
      if (state.isTimerActive) {
        state.selectedNumber = action.payload;
      }
    },
    addValue: (state, action) => {
      if (state.isTimerActive) {
        const { number, value } = action.payload;
        state.values[number] = (state.values[number] || 0) + value;
      }
    },
    disableSelection: (state) => {
      state.isTimerActive = false;
    },
    setWinningNumber: (state, action) => {
      state.winningNumber = action.payload; 
    }
  },
});

export const { selectNumber, addValue, disableSelection ,setWinningNumber} = numbersSlice.actions;
export default numbersSlice.reducer;