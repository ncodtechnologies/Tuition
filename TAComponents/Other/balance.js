import * as React from 'react';
import { Text, View, StyleSheet,FlatList,TouchableOpacity,Platform,TextInput,Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (  
             <View>  
                   <View style={styles.box}>                     
                      <Text style={styles.headline1}>YOUR BALANCE</Text>
                      <Text style={styles.headline2}>Y11</Text>
                   </View>
             </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    borderRadius: 109, 
    borderColor:'#f0f1f1',
    justifyContent:'center',
    alignItems:'center',
    padding:45,
    elevation:2,
  },
  headline1:{
    fontSize: 20,
  },
  headline2:{
    fontSize: 90,
  },
});

