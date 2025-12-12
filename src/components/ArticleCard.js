/*
  Course: MAD201
  Lab: Assignment 6
  Student: Darshilkumar Karkar (A00203357)
  Description: Component to display a summary of a news article in a list.
*/
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ArticleCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl || "https://via.placeholder.com/100" }} style={styles.thumb} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={2}>{item.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", marginBottom: 12, backgroundColor: "#fff", padding: 10, borderRadius: 10 },
  thumb: { width: 100, height: 100, borderRadius: 10 },
  info: { flex: 1, marginLeft: 10 },
  title: { fontWeight: "bold", fontSize: 16 },
});
