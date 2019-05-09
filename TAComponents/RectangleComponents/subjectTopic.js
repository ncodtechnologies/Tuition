import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (      
                
           <View style={styles.box}>
                  <View>
                      <Image style={styles.img} source={require('../../TAImages/che.jpg')} />
                  </View>
                  <Text style={styles.headline1}>{this.props.title1}</Text>
                  <Text style={styles.headline2}>{this.props.title2}</Text>
           </View>
    );
  } 
}

const styles = StyleSheet.create({
  
  box:{
    borderRadius: 8, 
    borderColor:'#f0f1f1',
    borderWidth:1,
    elevation: 2,
    justifyContent:'space-between',
    alignItems:'center',
    width:125,
    height:145,
    padding:15,
  },

  headline1:{
    textAlign:'center', 
    fontSize: 15,
    color:'black',
    height:35,
  },
   headline2:{

    textAlign:'center',
    fontSize: 14,
    color:'#8A8B8E',
  },
   img:{
    width: 55,
    height:60,
  },

});


