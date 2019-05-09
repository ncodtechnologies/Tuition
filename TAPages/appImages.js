import * as React from 'C:/Users/KANJA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Text, View, StyleSheet,ScrollView,FlatList } from 'react-native';

import TAImage from './TAComponents/RectangleComponents/image';
export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView > 
            <View style={styles.container}> 
                      <Text>Choose Subject</Text>
                      <FlatList
                            contentContainerStyle={styles.list}
                            data={[
                                {key: '1', name:'Amar Mohd', qualification:'BED,Msc Chemistry', subject:'Chemistry'},
                                {key: '2', name:'Amar Mohd', qualification:'BED,Msc Chemistry', subject:'Chemistry'},
                                {key: '3', name:'Amar Mohd', qualification:'BED,Msc Chemistry', subject:'Chemistry'},
                                {key: '4', name:'Amar Mohd', qualification:'BED,Msc Chemistry', subject:'Chemistry'},
                            ]}
                            renderItem={({item, index}) => <View><TAImage  name={item.name} qualification={item.qualification} subject={item.subject}/></View>}
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
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heading:{
    fontSize:18,
    paddingLeft:20,
  }
});

