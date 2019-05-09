import * as React from 'react';
import { Text, View, StyleSheet,FlatList} from 'react-native';
import TALessons from './TAComponents/Other/lessons';

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
                   <FlatList 
                    data={[
                      {key:"1",topic:"Downloads",},
                      {key:"2",topic:"Lessons Watched",video:'20 Videos'},
                      {key:"3",topic:"Favorites"},
                    ]}  
                    renderItem={({item}) =><View>
       <TALessons topic={item.topic} video={item.video}/></View>}                  
                   />                      
               </View>
              );
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'column', 
    justifyContent:'space-evenly',
    flex:1,
  },

});


