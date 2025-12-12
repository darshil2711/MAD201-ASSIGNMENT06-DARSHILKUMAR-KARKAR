# News Reader App  

Cross Platform Mobile Application Development  
Assignment 6 – MAD201-01 (2025)
**Student:** Darshilkumar Karkar  
**Student ID:** A00203357  
**Submission Date:** December 12, 2025

## 📌 Overview

This project is a **React Native News Reader App** that fetches real-time articles from a public API and allows users to save favorites locally using **AsyncStorage**.  
It demonstrates modern mobile development concepts including API integration, state management, and persistent local storage.

---

## 🎯 Objectives

This app teaches students how to:

- Fetch data from a REST API using **Axios** or **Fetch**
- Render JSON data dynamically using **FlatList**
- Manage asynchronous state changes with **useState** and **useEffect**
- Save and retrieve data using **AsyncStorage**
- Combine API data + local storage for an offline-friendly experience
- Use **React Navigation** for multi-screen app structure

---

## 📰 App Features

### **Home Screen**

- Fetches news articles on app load
- Displays:
  - Title
  - Thumbnail image
  - Short description
- Tap an article → navigate to detail screen

Example fetch logic:

```js
useEffect(() => {
  axios
    .get('https://inshortsapi.vercel.app/news?category=technology')
    .then(response => setArticles(response.data.data))
    .catch(error => console.error(error));
}, []);
Detail Screen
Shows full article:

Title, author, image, description

Includes "Save to Favorites" button

Save logic:

js
Copy code
await AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavorites));
Favorites Screen
Loads saved favorites from AsyncStorage:

js
Copy code
const favorites = await AsyncStorage.getItem('@favorites');
setSavedArticles(JSON.parse(favorites) || []);
Displays saved articles in FlatList

Allows users to remove items from favorites

🧭 App Navigation
Built with React Navigation (Bottom Tabs):

Tab Purpose
Home Displays real-time news feed
Favorites Shows locally saved articles
Profile Developer/About section

🔄 State & Data Flow
You may use:

Option A: Context API
For global favorites management.

Option B: Local State + AsyncStorage
For screen-level management.

Example:

js
Copy code
const [favorites, setFavorites] = useState([]);

const addToFavorites = async (article) => {
  const updated = [...favorites, article];
  setFavorites(updated);
  await AsyncStorage.setItem('@favorites', JSON.stringify(updated));
};
🎨 Styling
Use a consistent stylesheet:

js
Copy code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
Follow standard Flexbox rules:

flexDirection

justifyContent

alignItems

✅ Deliverables
Your app should:

Fetch & display live news

Show detailed view for each article

Save/remove favorites with AsyncStorage

Persist data even after restart

Use bottom-tab navigation

Apply clean, consistent styling

📦 Tech Stack
React Native

React Navigation

Axios / Fetch API

AsyncStorage

Context API (optional)
