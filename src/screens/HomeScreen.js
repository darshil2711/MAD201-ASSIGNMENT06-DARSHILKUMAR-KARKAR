/*
  Course: MAD201
  Lab: Assignment 6
  Student: Darshilkumar Karkar (A00203357)
  Description: Screen that fetches and displays the latest news articles.
*/
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { fetchNews } from "../api/newsApi";
import ArticleCard from "../components/ArticleCard";

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  if (articles.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>No news found. Please check your internet connection.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id || item.title}
        renderItem={({ item }) => (
          <ArticleCard
            item={item}
            onPress={() => navigation.navigate("Detail", { article: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
});
