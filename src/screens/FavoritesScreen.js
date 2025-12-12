/*
  Course: MAD201
  Lab: Assignment 6
  Student: Darshilkumar Karkar (A00203357)
  Description: Screen displaying the list of favorite articles saved by the user.
*/
import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ArticleCard from "../components/ArticleCard";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ArticleCard
            item={item}
            onPress={() => removeFavorite(item.title)}
            isFavorite
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
});
