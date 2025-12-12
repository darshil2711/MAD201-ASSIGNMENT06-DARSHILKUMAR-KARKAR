import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function DetailScreen({ route }) {
  const { article } = route.params;
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: article.imageUrl || "https://via.placeholder.com/200" }} style={styles.img} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.desc}>{article.content}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => addToFavorites(article)}
      >
        <Text style={styles.btnText}>Save to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  img: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  desc: { marginTop: 10, fontSize: 16 },
  btn: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 10,
  },
  btnText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});
