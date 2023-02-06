import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  name: "balance",

  initialState: {
    value: 0,
  },

  reducers: {

    // Add user input to current balance
    withdraw: (state, action) => {
      state.value -= action.payload;
    },

    // Subtract user input to current balance
    deposit: (state, action) => {
      state.value += action.payload;
    },

    // Multiply user input by interestMultiplier
    addInterest: (state) => {
      const interestMultiplier = 1.05;
      state.value = interestMultiplier * state.value;
    },

    // Reduce user input by 15%
    charges: (state) => {
      const chargeRate = 0.85;
      state.value = chargeRate * state.value;
    },
  },
});

export const { withdraw, deposit, addInterest, charges } = balanceSlice.actions;

export default balanceSlice.reducer;
