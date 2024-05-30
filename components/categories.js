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
      <View>
         <View>
            <Text style={{ marginTop: 40, marginLeft: 20, fontSize: 25, fontWeight: 'bold', marginBottom: 15 }}>Categories</Text>
         </View>


         <ScrollView horizontal= {true} style={styles.horizontal} showsHorizontalScrollIndicator={false}>
         {Categorydata.map((category) => (
            <View key={category.name} style={styles.cat}>
            <Text style={styles.name}>{category.name}</Text>
            <Text style={styles.count}>{category.count} Tasks</Text>
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
   },
 
 });
 


export default Categories;