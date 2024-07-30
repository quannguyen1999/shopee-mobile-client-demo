import { configureStore, createSlice } from "@reduxjs/toolkit";


const navigationSlide = createSlice({
  name: "navigation",
  initialState: {
    currentUrl: "",
  },
  reducers: {
    updateCurrentUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
  },
});

export const store = configureStore({
    reducer: {
        navigationCustom: navigationSlide.reducer
    }
})

export const updateCurrentUrl = navigationSlide.actions.updateCurrentUrl;
