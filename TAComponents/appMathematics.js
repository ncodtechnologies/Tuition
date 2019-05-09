import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,Image, ScrollView } from 'react-native';
import TAMathematics from './components/TAMathematics';
import TAHeading from './components/TAHeading';
import TAPopularVideo from './components/TAPopularVideo';
import TABorder from './components/TABorder';
import {subHeadingColor} from './components/colors';


export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView > 
            <View style={styles.container}>
                <TAHeading caption="Mathematics"/>    
                <View style={styles.content}>
                      <Text style={styles.headline2}>20 Chapters</Text>
                 </View>  
                   <View style={styles.box}> 
                        <View >      
                          <TAMathematics title1="Maths"  title2="Maths"  /> 
                        </View> 
                        <View >      
                          <TAMathematics title1="Arithmatic Progression" title2="20 Videos" /> 
                        </View> 
                        <View >      
                          <TAMathematics title1="Maths"/> 
                        </View> 
                    </View>        
                      <View style={styles.box}> 
                        <View >      
                          <TAMathematics title1="Maths"/> 
                        </View> 
                        <View >      
                          <TAMathematics title1="Maths"/> 
                        </View> 
                        <View >      
                          <TAMathematics title1="Maths"/> 
                        </View> 
                    </View>          
            </View>       
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container:{    
    flexDirection:'column',
    padding:15,
  },
   box:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,    
  },
   title:{
    color:subHeadingColor,
    paddingLeft:15,   
    fontSize: 16,
  },
});

