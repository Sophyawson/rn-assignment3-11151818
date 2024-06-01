import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';


const OngoingTasks = () => { 
   const taskData = [
      {
        id: 0,
        name: "Mobile App Development",
      },
      {
        id: 1,
        name: "Web Development",
      },
      {
        id: 2,
        name: "Push Ups",
      },
      {
         id: 3,
         name: "Mobile App Development",
       },
       {
         id: 4,
         name: "Web Development",
       },
       {
         id: 5,
         name: "Push Ups",
       },
       {
         id: 6,
         name: "Mobile App Development",
       },
       {
         id: 7,
         name: "Web Development",
       },
       {
         id: 8,
         name: "Push Ups",
       },
       {
         id: 9,
         name: "Mobile App Development",
       },
       {
         id: 10,
         name: "Web Development",
       },
       {
         id: 11,
         name: "Push Ups",
       },
       {
         id: 12,
         name: "Mobile App Development",
       },
       {
         id: 13,
         name: "Web Development",
       },
       {
         id: 14,
         name: "Push Ups",
       },


    ];
     
   return(
         <View style={{flex: 1}}>
            <View>
             <Text style={{marginTop: 40, marginBottom:20, fontSize:20, fontWeight: 'bold'}}>OngoingTasks</Text>
            </View>

            <FlatList
            showsVerticalScrollIndicator={false}
            data={taskData}
            renderItem={({ item }) => (
              <View style={styles.m}>
                <View>
                  <Text style={styles.t} >
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
           
            
            </View>
);
};

const styles = StyleSheet.create({
   m:{
      backgroundColor: 'white',
      gap: 10,
      height: 150,
      backgroundColor: 'white',
      borderColor: '#E8D1BA',
      borderWidth: 1,
      marginRight: 20, // You might need to adjust this depending on the design
      padding: 20,
      borderRadius: 15,
      width: '100%',
      marginBottom: 20,
      justifyContent: 'center',
   },

   t:{
      fontSize: 16,
   },
 
 });

   export default OngoingTasks;