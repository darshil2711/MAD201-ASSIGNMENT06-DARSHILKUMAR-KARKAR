/*
  Course: MAD201
  Lab: Assignment 6
  Student: Darshilkumar Karkar (A00203357)
  Description: Context provider for managing favorite articles using AsyncStorage.
*/
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const saved = await AsyncStorage.getItem("@favorites");
    if (saved) setFavorites(JSON.parse(saved));
  };

  const addToFavorites = async (article) => {
    const updated = [...favorites, article];
    setFavorites(updated);
    await AsyncStorage.setItem("@favorites", JSON.stringify(updated));
  };

  const removeFavorite = async (title) => {
    const updated = favorites.filter((item) => item.title !== title);
    setFavorites(updated);
    await AsyncStorage.setItem("@favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
