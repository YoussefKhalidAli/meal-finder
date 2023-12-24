import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = () => {
  const favMeals = useSelector((state) => state.favourites.favourateMeals);

  const displayedMeals = MEALS.filter((meal) => favMeals.includes(meal.id));
  return <MealList displayedMeals={displayedMeals} />;
};

export default FavouritesScreen;
