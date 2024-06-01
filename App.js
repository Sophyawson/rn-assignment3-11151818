import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import SearchBar from './components/searchBar';
import Categories from './components/categories';
 import Header from './components/header';
import OngoingTasks from './components/ongoingTasks';



export default function App() {
  return (
  

    <View style={styles.container}>
    {/* Header Section */}
    <Header/>
    

    {/* Searchbar section */}
    <SearchBar/>

    {/* Category Section */}
    <Categories/>

    {/* OngoingTasks Section */}
    <OngoingTasks/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    padding: 20,
  },

});
