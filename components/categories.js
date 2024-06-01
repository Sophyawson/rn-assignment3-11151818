
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const Categories = () => {
   const Categorydata = [
      { name: 'Exercise', count: 1, image: require('../assets/young woman working online.png') },
      { name: 'Study', count: 2, image: require('../assets/young woman working at desk.png') },
      { name: 'Work', count: 3, image: require('../assets/young woman working online.png') },
      { name: 'Study', count: 4, image: require('../assets/young woman working at desk.png') },
      { name: 'Exercise', count: 5, image: require('../assets/young woman working online.png') },
      { name: 'Study', count: 6, image: require('../assets/young woman working at desk.png') },
      { name: 'Exercise', count: 7, image: require('../assets/young woman working online.png') },
      { name: 'Study', count: 8, image: require('../assets/young woman working at desk.png') },

   ];
   return (
      <View >
         <View >
            <Text style={{ marginTop: 40, fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Categories</Text>
         </View>


         <ScrollView horizontal= {true} style={styles.horizontal} showsHorizontalScrollIndicator={false}>
         {Categorydata.map((category) => (
            <View key={category.name} style={styles.cat}>
            <Text style={styles.name}>{category.name}</Text>
            <Text>{category.count} Tasks</Text>
            <Image source={category.image} style={styles.image}/>

            </View>
            
        ))}

         </ScrollView>
        

      </View>
   );
};

const styles = StyleSheet.create({
   cat:{
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 15,
      width: 186,
      height: 192,
      marginRight: 20,
      opacity: 1,  
   },

   horizontal: {
      width: 396,
      height: 192,
      
   },

   name: {
      fontSize: 16,
      fontWeight: 'bold',
   },
 
 });
 


export default Categories;