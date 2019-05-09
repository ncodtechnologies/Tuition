import * as React from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import { inputBorderColor } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:0,flexDirection:'column'}} >
            <View style={styles.container}>
            
                  <Text style={[styles.box,{fontSize: inputFontSize,backgroundColor:'orange',color:'white',alignItems:'center'}]}>Student</Text>
                  <Text style={[styles.box,{borderLeftWidth:1,borderColor:inputBorderColor,fontSize: inputFontSize,alignItems:'center'}]}>Teacher </Text>
            </View>
            

                  <View style={[styles.triangle, this.props.style]} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {    
    height:inputHeight,
    borderRadius: inputBorderRadius, 
    fontSize: inputFontSize,
    borderColor:inputBorderColor,
    borderBottomWidth: 1,
    elevation: 1,
    flexDirection: "row",
  },
  
  box:{
    flex: 0.5,
    backgroundColor:'orange', 
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'orange',
    left:width/5,
  }
});
