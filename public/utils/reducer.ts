import { createSlice } from "@reduxjs/toolkit";

interface iInputVal {
  firstName?: string;
  lastName?: string;
  email?: string;
  number?: string;
  country?: string;
}

interface iState {
  inputValue?: iInputVal;
}

const initialState: iState = {
  inputValue: {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    country: "",
  },
};

const reducer = createSlice({
  name: "tundra",
  initialState,
  reducers: {
    addInputValue: (state, { payload }) => {
      state.inputValue = payload;
    },
  },
});

export const { addInputValue } = reducer.actions;

export default reducer.reducer;
