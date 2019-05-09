import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               <View style={styles.box1}>
                <Image  style={styles.img} source={require('../../TAImages/img2.jpg')}/>
               </View>
               <View style={styles.box2}>
                  <Text style={{color:'#c9094c',fontSize:20,paddingTop:3}}>{this.props.topic}</Text>
                   <Text style={{color:'#c4c2c2',fontSize:16,paddingTop:7}}> {this.props.subject}</Text>
                   <Text style={{fontSize:14,paddingTop:5}}>{this.props.views}</Text>
                   <Text style={{textDecorationLine:'underline',fontSize:16,paddingTop:9}}>{this.props.name}</Text>
                   <Text style={{color:'#c4c2c2',fontSize:14,paddingTop:19}}>{this.props.date}</Text>
               </View>
               <View style={styles.box3}>
                  <Text> Icon</Text>
                  <Text>Icon</Text>
               </View>
            </View>
              )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:.2,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,    
  },
  box1:{
    width:185,
    padding:5,
    alignItems:'flex-start',
    justifyContent:'space-around',
  },
  box2:{    
    borderColor:'#e9eaec',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  },
  box3:{
    padding:5,
    borderColor:'#e9eaec',
    alignItems:'flex-end',
    justifyContent:'space-between',
  },

  img:{
    width:185,
    height:130,
    borderRadius:10,
  },
});

