import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList } from 'react-native';

import TASubject from './TAComponents/RectangleComponents/subject';
import TAHeading from './TAComponents/Heading/heading';
import TAVideoSubject from './TAComponents/Sections/videoSubject'; 
import TABorder from './TAComponents/Other/border';

export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView > 
            <View style={styles.container}>
                <TAHeading caption="Subjects"/>                   
                    
                    <FlatList
                            contentContainerStyle={styles.list}
                            data={[
                              {key: '1', title:'Malayalam', chapter:'20 Chapters'},
                              {key: '2', title:'English', chapter:'20 Chapters'},
                              {key: '3', title:'Malayalam', chapter:'20 Chapters'},
                              {key: '4', title:'Maths', chapter:'20 Chapters'},
                            ]}
                            renderItem={({item}) => <View><TASubject title={item.title} chapter={item.chapter}  /></View>}
                       />                           
            </View> 

            <View>       
                    <Text style={styles.title}>Popular Videos</Text>     
                    <FlatList 
                            data={[
                                {key: '1', topic:'Newtons 3rd Law', views:'2k Views', name:'By Mr Shihab Tharayil',subject:'Science' ,date:'Uploaded on 20/10/2018'},
                                {key: '2', topic:'Newtons 3rd Law', views:'2k Views', name:'By Mr Shihab Tharayil',subject:'Science' ,date:'Uploaded on 20/10/2018'},
                            ]}
                            renderItem={({item}) => <View><TAVideoSubject topic={item.topic} views={item.views} name={item.name} subject={item.subject} date={item.date}  /><TABorder/></View>}
                            
                        />    
          </View>            
      </ScrollView>
  );
  }
}


const styles = StyleSheet.create({
  container:{    
    flexDirection:'column',
  },
   box:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    
  },
   title:{
    color:'blue',
    paddingLeft:15,   
    fontSize: 16,
  },
  
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

