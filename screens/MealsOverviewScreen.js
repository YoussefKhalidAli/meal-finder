import { View, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: catTitle,
    });
  });

  return <MealList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
