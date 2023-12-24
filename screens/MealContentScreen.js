import { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/FavouritesSlice";

function MealDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const favMeals = useSelector((state) => state.favourites.favourateMeals);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    if (favMeals.includes(mealId)) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={favMeals.includes(mealId) ? "heart" : "heart-outline"}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
      title: selectedMeal.title,
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
