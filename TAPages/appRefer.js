import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList } from 'react-native';

import TASocialNedia from './TAComponents/RectangleComponents/socialMedia';

export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView > 
            <View style={styles.container}> 
                <View> 
                    <Text style={{fontSize:30,padding:15}}>REFFER & EARN</Text>   
                    <Text style={{fontSize:20,padding:15}}>Rferer sfd hgfhgh adad sdfssssss dfsss sadasd erefdc ertfgvc stgfv sdfsdf sdfs sdf dffffffffffff dcxvx xcvxxxxxxx cxvxc</Text>               
                </View>    
                    <FlatList
                            contentContainerStyle={styles.list}
                            data={[
                              {key: '1', title:'WhatsApp'},
                              {key: '2', title:'Instagram', },
                              {key: '3', title:'Facebook'},
                              {key: '4', title:'Twitter'},
                              {key: '1', title:'WhatsApp'},
                              {key: '2', title:'Instagram', },
                              {key: '3', title:'Facebook'},
                              {key: '4', title:'Twitter'},
                              {key: '4', title:'Twitter'},
                            ]}
                            renderItem={({item}) => <View><TASocialNedia title={item.title} /></View>}
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
});

