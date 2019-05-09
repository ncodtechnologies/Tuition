import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import { inputBorderColor } from '../../TAStyles/TAcolors';
import { inputPlaceholderTextColor } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:0,flexDirection:'row'}} >
            <View style={styles.container}>
                  <TextInput placeholder="Password" placeholderTextColor={inputPlaceholderTextColor} style={[styles.box,{fontSize: inputFontSize}]}  />
                  <TextInput placeholder="Confirm" placeholderTextColor={inputPlaceholderTextColor} style={[styles.box,{borderLeftWidth:1,borderColor:inputBorderColor,fontSize: inputFontSize,}]} />
               </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:inputHeight,
    textAlign: 'center',
    flexDirection: "row",
    flex:1,
    borderRadius: inputBorderRadius, 
    borderColor:inputBorderColor,
    borderBottomWidth: 1,
    elevation: 1,
  },
  
  box:{
    flex: 0.5,
    paddingLeft:20, 
  },
});
