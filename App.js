/*
  Course: MAD201
  Lab: Assignment 6
  Student: Darshilkumar Karkar (A00203357)
  Description: Main entry point of the application, setting up navigation and providers.
*/
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavoritesProvider } from "./src/context/FavoritesContext";
import TabNavigator from "./src/navigation/TabNavigator";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </FavoritesProvider>
  );
}
