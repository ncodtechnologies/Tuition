import * as React from 'react';
import { Text, View, StyleSheet,Image,FlatList, ScrollView } from 'react-native';
import TABorder from './TAComponents/Other/border';
import TAVideo from './TAComponents/Sections/videoView';

export default class App extends React.Component {
  render() {

    return (

      <ScrollView > 
            <View>
                    <FlatList 
                            data={[
                              {key: '1',topic:'Arithmetic Progressions',date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'CSSE > Maths > Real Numbers'},
                              {key: '2',topic:'Newtons 3rd Law',date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'CSSE > Maths > Real Numbers'},
                            ]}
                            renderItem={({item}) => <View><TAVideo topic={item.topic} views={item.views} name={item.name} date={item.date}  subject={item.subject}  /><TABorder/></View>}
                            
                        />   
     
                    
          </View>            
      </ScrollView>
  );
  }
}


