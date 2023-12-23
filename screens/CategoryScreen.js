import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoryScreen = ({ navigation }) => {
  const renderCategories = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
        categoryTitle: item.title,
      });
    };

    return (
      <CategoryGrid
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategories}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
