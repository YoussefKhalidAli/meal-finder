//imported tools
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";

//imported components
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealContentScreen from "./screens/MealContentScreen";
//import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
  /* function drawerNavigation() {
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Faviorates" component={FavouritesScreen} />
    </Drawer.Navigator>;
  } */
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4e3213",
            },
            contentStyle: {
              backgroundColor: "#7c5b39",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealContent" component={MealContentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
