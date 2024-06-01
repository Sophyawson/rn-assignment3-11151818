import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const Header = () => { 

  
   return(
    <View style={styles.box}>

    <View>
    <Text style={styles.headerdesign}>Hello , Devs</Text>
    <Text style={styles.textdesign}> 14 tasks today</Text>
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
        marginTop: 30,
        
      },
    
      headerdesign: {
        fontSize: 32,
        fontWeight: 'bold',
        
      },
    
      textdesign: {
        
      },
    
      topImage: {
       marginLeft: 130,
       
      },
      button:{
        backgroundColor: 'white',
      },
    
});