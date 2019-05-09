import * as React from 'react';
import { Text, View, StyleSheet,Image, ScrollView ,FlatList} from 'react-native';
import TASubjectTopic from './TAComponents/RectangleComponents/subjectTopic';
import TAHeading from './TAComponents/Heading/heading';
import TAMathsSubHeading from './TAComponents/Heading/mathsSubHeading';
import {subHeadingColor} from './TAStyles/TAcolors';



export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView > 
            <View style={styles.container}>
                <TAHeading caption="Mathematics"/>    
                <View style={styles.content}>
                      <Text style={styles.headline2}>20 Chapters</Text>
                 </View> 
                <View style={{paddingTop:20}}>   
                  <TAMathsSubHeading subheading="1.Real Numbers"/> 
                    <View style={styles.box}> 
                      <FlatList horizontal={true}
                            data={[
                              {key: 'Devin',chapter:'Arithmetic Progression',video:'20 Videos'},
                              {key: 'Jackson',chapter:'Triangles', video:'20 Videos'},
                              {key: 'James',chapter:'Coordinate Geometry', video:'20 Videos'},
                              {key: 'J',chapter:'Triangles', video:'20 Videos'},
                              {key: 'James1',chapter:'Coordinate Geometry', video:'20 Videos'},
                            ]}
                            renderItem={({item}) => <TASubjectTopic title1={item.chapter}  title2={item.video}  /> }
                        />                          
                  </View>    
                  <TAMathsSubHeading subheading="1.Real Numbers"/> 
                    <View style={styles.box}> 
                      <FlatList horizontal={true}
                            data={[
                              {key: 'D',chapter:'Arithmetic Progression',video:'20 Videos'},
                              {key: 'Jon',chapter:'Triangles', video:'20 Videos'},
                              {key: 'Jas',chapter:'Coordinate Geometry', video:'20 Videos'},
                              {key: 'Json',chapter:'Triangles', video:'20 Videos'},
                              {key: 'Jam',chapter:'Coordinate Geometry', video:'20 Videos'},
                            ]}
                            renderItem={({item}) => <TASubjectTopic title1={item.chapter}  title2={item.video}  /> }
                        />                          
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
    paddingTop:5,
    paddingRight:20,    
  },
   headline2:{
    fontSize: 14,
    color:subHeadingColor,
  },
});

