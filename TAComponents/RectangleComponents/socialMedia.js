import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const imgWidth = width*0.28; 


export default class App extends React.Component {
  render() {
    return (      
                
                <View style={styles.box}>                     
                      <Text style={styles.headline}>{this.props.title}</Text>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  box:{
    width:imgWidth,
    height:imgWidth,
    borderRadius: 8, 
    borderColor:'#f0f1f1',
    borderWidth:1,
    justifyContent:'flex-end',
    alignItems:'center',
    margin:10,
  },
   headline:{
    fontSize: 18,
    color:'#8A8B8E',
  },
});

