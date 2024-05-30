import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <View>
    <Text style={styles.headerdesign}>Hello , Devs</Text>
    <Text style={styles.textdesign}> 15 tasks today</Text>
    </View>
    <View style={styles.topImage}>
    <Image source={require('./assets/Profile Image.png')} />
    </View>
    <View>
      
    </View>
   </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    
  },

  box: {
    flexDirection: 'row',
    
  },

  headerdesign: {
    fontSize: 30,
    marginTop: 60,
    marginLeft: 10,
    fontStyle: 'bold',
  },

  textdesign: {
    marginLeft: 5,
  },

  topImage: {
    marginTop: 60,
    marginLeft: 150,
  },
});


// import { useSafeAreaInsets } from "react-native-safe-area-context";

// const HomeScreen = () => {
//   const insets = useSafeAreaInsets();
//   return (
//     <View style={{ marginHorizontal: wp("3px"), gap: wp("10px"), paddingTop: insets.top, paddingBottom: insets.bottom}}>
//       {/**header Section */}
//       <View className="flex flex-row justify-between items-center">
//         <View>
//           <Text
//             style={{
//               fontSize: wp("4.3px"),
//             }}
//             className="font-bold text-[#4E35EA]"
//           >
//             Hello,Yawson
//           </Text>
//         </View>

//         <View
//           style={{
//             gap: wp("6px"),
//           }}
//           className="flex flex-row"
//         >
//           <AntDesign name="search1" size={wp("5px")} color="black" />
//           <AntDesign name="user" size={wp("5px")} color="black" />
//         </View>
//       </View>

//       {/**description */}
//       <View
//         style={{
//           width: wp("70%"),
//         }}
//       >
//         <Text style={{ fontSize: wp("6px") }} className="font-bold">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </Text>
//       </View>

//       {/**Course Section */}
//       <View>
//         <CourseCard />
//       </View>
//     </View>