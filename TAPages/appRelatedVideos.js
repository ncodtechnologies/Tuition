import * as React from 'react';
import { Text, View, StyleSheet,Image,FlatList, ScrollView } from 'react-native';
import TABorder from './TAComponents/Other/border';
import TAVideoSubject from './TAComponents/Sections/videoSubject';
import TAVideoDescription from './TAComponents/Sections/video_description';
import { Dimensions } from 'react-native';
import {subHeadingColor} from './TAStyles/TAcolors';

const { width, height } = Dimensions.get('window');

const imgWidth = width; 
const imgHeight= width * .45; 

export default class App extends React.Component {
  render() {
    return (

      <ScrollView >       
            <View>

                    <View style={styles.box1}>
                      <Image  style={styles.img} source={require('./TAImages/img2.jpg')}/>
                    </View>
                    <TAVideoDescription/>
                    <TABorder/>
                     <View style={styles.box1}>
                      <Text  style={styles.subheading} >Related Videos</Text> 
                    </View>
                    <TABorder/>
                    <FlatList 
                            data={[
                              {key: 'Devin',topic:'Newtons 3rd Law',date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'Teachers are essentially professional presenters'},
                              {key: 'Devin1',topic:'Newtons 3rd Law',date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'CSSE > Maths > Real Numbers'},
                            ]}
                            renderItem={({item}) =><View> 
       <TAVideoSubject topic={item.topic} views={item.views} name={item.name} date={item.date}  subject={item.subject}  /><TABorder/></View>}
                        />   
     
                    
          </View>            
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  subheading:{
    color:subHeadingColor,
    paddingLeft:15,   
    fontSize: 16,
    padding:10,
  },
  img:{
    width:imgWidth,
    height:imgHeight,
  },
});


