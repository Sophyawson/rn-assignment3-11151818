import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const Header = () => { 
   return(
    <View style={styles.box}>

    <View>
    <Text style={styles.headerdesign}>Hello , Devs</Text>
    <Text style={styles.textdesign}> 15 tasks today</Text>
    </View>

    <View style={styles.topImage}>
    <Image source={require('../assets/Profile Image.png')} />
    </View>
   </View>
);
};

   export default Header;


const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        marginTop: 60,
        
      },
    
      headerdesign: {
        fontSize: 30,
        
        marginLeft: 20,
        fontWeight: 'bold',
      },
    
      textdesign: {
        marginLeft: 15,
      },
    
      topImage: {
        
        marginLeft: 140,
      },
      button:{
        backgroundColor: 'white',
      },
    
});