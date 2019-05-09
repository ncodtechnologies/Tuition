import * as React from 'C:/Users/KANJA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Text, View, StyleSheet,Image} from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const imgHeight= width * .42; 

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               <View style={styles.box1}>                 
                    <Image  style={styles.img} source={require('../../TAImages/img2.jpg')}
                    />
               </View>
               <View style={styles.box2}>                 
                    <View style={styles.star}>          
                    
               </View>
               </View>
               <View style={styles.box3}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>{this.props.name}</Text>
                    <Text style={{color:'#c4c2c2',fontSize:15}}>{this.props.qualification}</Text>
                    <Text style={{fontSize:14}}>{this.props.subject} </Text>
               </View>
            </View>
       )
    }
}

const styles = StyleSheet.create({
  container:{
    width:imgHeight,
    height:imgHeight,
    borderColor:'#e9eaec',
    borderWidth:1,
    borderRadius: 5, 
    backgroundColor:'#f8f9fb',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  box1:{     
    alignItems:'center',
    justifyContent:'center',
    elevation: 5,
    width:85,
    height:80,
    borderRadius:55,
    borderColor:'#bbbbbd',
  },
  img:{
    width:75,
    height:70,
    borderRadius:55,
  },
  box2:{    
    borderColor:'#e9eaec',
    alignItems:'center',
    justifyContent:'space-between',      
    flex:0,   
    padding:5,
  },

  star: {
    flex:0,
    width:55,
    height:15,
    borderColor:'#bbbbbd',
    backgroundColor:'black',
  },
  box3:{
    borderColor:'#e9eaec',
    alignItems:'center',
    justifyContent:'center',
  },
});

