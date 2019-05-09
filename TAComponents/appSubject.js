import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,Image, ScrollView } from 'react-native';
import TASubject from './components/TASubject';
import TAHeading from './components/TAHeading';
import TAPopularVideo from './components/TAPopularVideo';
import TABorder from './components/TABorder';
import {subHeadingColor} from './components/colors';


export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView > 
            <View style={styles.container}>
                <TAHeading caption="Subjects"/>      
                   <View style={styles.box}> 
                        <View >      
                          <TASubject title="Maths"/> 
                        </View>  
                        <View>      
                          <TASubject title="Physics"/> 
                        </View>   
                    </View> 
                    <View style={styles.box}>  
                        <View >      
                            <TASubject title="Biology"/> 
                          </View>  
                          <View>      
                            <TASubject title="Chemistry"/> 
                          </View>  
                    </View>
                    <View style={styles.box}>
                          <View>      
                            <TASubject title="History"/> 
                          </View>  
                          <View>      
                            <TASubject title="Geography"/> 
                          </View>   
                    </View> 
                    <View style={styles.box}> 
                        <View>      
                            <TASubject title="Civics"/> 
                          </View>  
                          <View>      
                            <TASubject title="Computer Science"/> 
                          </View>                     
                    </View>
                    <View style={styles.box}>   
                        <View>      
                            <TASubject title="Malayalam"/> 
                          </View>  
                          <View>      
                            <TASubject title="Hindi"/> 
                          </View>    
                    </View>                          
            </View> 

            <View>       
                    <Text style={styles.title}>Popular Videos</Text>       
                    <TAPopularVideo/>
                    <TABorder/>
                    <TAPopularVideo/>
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

