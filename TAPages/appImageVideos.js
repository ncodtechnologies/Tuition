import * as React from 'react';
import { Text, View, StyleSheet,FlatList} from 'react-native';
import TAImageDescription from './TAComponents/Sections/image_description';
import TAVideoView from './TAComponents/Sections/videoView';
import TABorder from './TAComponents/Other/border';


export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               <View style={{padding:15}}>    
                    <View style={styles.box1}>                 
                        <TAImageDescription/>
                    </View>
               </View>
               <View style={styles.box3}>    
                   <FlatList 
                    data={[
                      {key:"1" ,topic:"Arithmetic Progression",date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'CSSE > Maths > Real Numbers'},
                      {key:"2" ,topic:"Arithmetic Progression",date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'CSSE > Maths > Real Numbers'},
                      {key:"3" ,topic:"Arithmetic Progression",date:'Uploaded on 20/10/2018',views:'2K Views',name:'By Mr Shihab Tharayil',subject:'CSSE > Maths > Real Numbers'},
                    ]}  
                    renderItem={({item}) =><View><View style={{padding:15}}> 
       <TAVideoView topic={item.topic} views={item.views} name={item.name} date={item.date}  subject={item.subject}  /></View><TABorder/></View>}                  
                   />                     
                                           
               </View>
            </View>
              );
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'column', 
    justifyContent:'space-evenly',
    borderBottomColor:'#b2b0b0',
    flex:1,
  },
  box1:{    
    borderRadius:55,
  },
  box2:{
    padding:15,
  },
   box3:{ 
    flex:1,
    flexDirection:'column', 
    justifyContent:'space-evenly',
  },

});


