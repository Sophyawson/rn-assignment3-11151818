import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import SearchBar from './components/searchBar';
import Categories from './components/categories';
 import Header from './components/header';
// import Categories from './components/Categories';
// import Categories from './components/Categories';
//import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  return (
  

    <View style={styles.container}>
    {/* Header Section */}
    <Header/>
    

    {/* Searchbar section */}
   <SearchBar/>


   {/* Categories Section */}
   <Categories />
   

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },

});
