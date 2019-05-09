import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const btnWidth = width*.95; 
const imgHeight= width * .45; 

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               
               <View style={styles.box1}>
                   <Text style={{color:'#c9094c',fontSize:22}}>Arithmetic Progressions</Text>
                   <Text style={{fontSize:18}}>Arithmetic Progressions - Triangle, Square and Visualisations</Text>
                   <View style={styles.box1Upload}>
                          <Text style={{color:'#c4c2c2',fontSize:15}}>Uploaded on 20/10/2018</Text>
                          <Text style={{textDecorationLine:'underline',fontSize:16,}}>By Mr Shihab Tharayil</Text>
                    </View>
               </View>

               <View style={styles.box2}>
                  <View style={styles.box2Column}>
                      <Text>Icon</Text>
                      <Text  style={{fontSize:10}}>2 k</Text>
                  </View>
                   <View style={styles.box2Column}>
                      <Text>Icon</Text>
                      <Text style={{fontSize:10}}>5 k</Text>
                  </View>
                  <View style={styles.box2Column}>
                      <Text> Icon</Text>
                      <Text style={{fontSize:10}}>Share</Text>
                  </View>
                  <View style={styles.box2Column}>
                      <Text> Icon</Text>
                      <Text style={{fontSize:10}}>Download</Text>
                  </View>
                  
               </View>
               <View style={{padding:15,}}>
                    <View style={styles.box3}>
                          <Text style={{ color:'white'}}>Teacher Notes about Newton's 3rd Law </Text>   
                    </View>
              </View>
            </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  box1:{
    padding:10,
    borderColor:'#e9eaec',
    alignItems:'flex-start',
    justifyContent:'space-evenly',
  },
  box1Upload:{
    paddingTop:10,
    width:290,
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-between',
  },
  box2:{ 
    flexDirection:'row',
    borderColor:'#e9eaec',
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
   box2Column:{  
      width:65,
      flexDirection:'column',
      alignItems:'center', 
      justifyContent:'center',
      padding:10,
  },
  box3:{
    width:btnWidth,
    borderRadius: 45, 
    borderColor:'#e5e8e8',
    borderWidth: 1,
    alignItems:'center',
    padding:10,
    backgroundColor:'orange',
  },
});

