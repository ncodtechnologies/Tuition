import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';

export default class TAImageDescription extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               <View style={styles.box1}>                 
                    <Image  style={styles.img} source={require('img2.jpg')}
                    />
               </View>
               <View style={styles.box2}>                 
                        <View>    
                          <Text style={{fontWeight:'bold',fontSize:18}}>{this.props.name}Abdul Salam</Text>
                        </View>  
                        <View>  
                          <Text style={{color:'#c4c2c2',fontSize:17}}>{this.props.name}BA, Bed</Text>         
                      </View> 
                      <View>   
                          <Text style={{fontSize:15,color:'#5d5d5f'}}>Specialized : Physics</Text>
                      </View> 
                      <View>   
                          <Text style={{fontSize:15}}>Teacher HMS School Manjeri</Text>
                      </View>  
                      <View>  
                              <View style={styles.star}>  
                              </View>
                      </View>
                      <View>  
                          <Text style={{fontSize:14,color:'#8b8b90',fontWeight:'bold'}}>10 K Views</Text>
                      </View>  
               </View>
            </View>
              );
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    borderBottomColor:'#b2b0b0',
    borderBottomWidth:1,
    justifyContent:'space-evenly',
  },
  box1:{    
    borderRadius:55,
    paddingBottom:15,
  },
  img:{
    width:150,
    height:150,
    borderRadius:10,
  },
  box2:{ 
    padding:15,
    flex:1,
    flexDirection:'column', 
    justifyContent:'space-evenly',
  },
  star: {
    width:75,
    height:15,
    backgroundColor:'black',
    paddingTop:10,
  },
});


