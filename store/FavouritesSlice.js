import { createSlice } from "@reduxjs/toolkit";

const FavouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourateMeals: [],
  },
  reducers: {
    addFavourite(state, { payload }) {
      state.favourateMeals.push(payload.id);
    },
    removeFavourite(state, { payload }) {
      state.favourateMeals.splice(state.favourateMeals.indexOf(payload.id), 1);
    },
  },
});

export const addFavourite = FavouritesSlice.actions.addFavourite;
export const removeFavourite = FavouritesSlice.actions.removeFavourite;

export default FavouritesSlice.reducer;
