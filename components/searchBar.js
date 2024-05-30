import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => { 
   return(
    <View style={{flexDirection: 'row'}}>

    <View style={{flexDirection: 'row'}}>
    <View style={styles.searchButton} onPress={() => console.log('Search button pressed')}>
    <View style={styles.inside}>
    <AntDesign name="search1" size={20} color="black" style={styles.icon}/>
         <TextInput 
           style={styles.input} 
           placeholder="Search"
           placeholderTextColor="#000"  
         />
         
         
    </View>
    
   </View>
   
    </View>
    <View style={{}}>
         <Image source={require('../assets/Filter.png')}  style={{marginLeft: 20, marginTop: 30,}} />
         </View> 
 
    </View>
);
};


const styles = StyleSheet.create({
searchButton: {
    marginLeft: 20,
    backgroundColor: 'white',
    width: 280,
    marginTop: 30,
    padding: 3,
    borderRadius: 15,
    
    
  },

  inside: {
    flexDirection: 'row',


  },

  input: {
    marginRight: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    padding: 10,
  },

});

   export default SearchBar;