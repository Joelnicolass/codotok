import { createSlice } from "@reduxjs/toolkit";

interface ModesState {
  inmersion: boolean;
}

const initialState: ModesState = {
  inmersion: false,
};

const modesSlice = createSlice({
  name: "modes",
  initialState,
  reducers: {
    onInmersion: (state) => {
      state.inmersion = true;
    },
    offInmersion: (state) => {
      state.inmersion = false;
    },
  },
});

export const modesReducer = modesSlice.reducer;
export const { offInmersion, onInmersion } = modesSlice.actions;
