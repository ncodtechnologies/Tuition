import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>                            
               <View>               
                    <Text> M</Text>
               </View>
               <View style={styles.txt1}>
                      <Text style={{color:'#8b8b8e',fontSize:18}}>{this.props.topic}</Text>
               </View>
               <View style={styles.txt2}>
                      <Text style={{color:'#8b8b8e',fontSize:18,textAlign:'right'}}> {this.props.video}</Text>
               </View> 
                                          
            </View>
                         
              );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:.03,
    flexDirection:'row',
    padding:20,
    borderBottomWidth:1,
    borderColor:'#e7e7ec',
    alignItems:'center',
  },
   txt1:{  
    padding:10,
    fontSize:18,
    color:'#adadb4',
  },
   txt2:{  
    flex:1.5,
    fontSize:18,
  },
});

