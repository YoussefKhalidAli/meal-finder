import { configureStore } from "@reduxjs/toolkit";
import Favouritesreducer from "./FavouritesSlice";

export const store = configureStore({
  reducer: { favourites: Favouritesreducer },
});
