import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { inputBorderColor } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';

export default class App extends React.Component {
  render() {
    return (
            <View style={{flex:1,flexDirection:'row'}}>
               <View style={styles.box}>
                  <Text style={{color:'#9f9d9d',fontSize: inputFontSize,}}>Don't have an account yet?</Text>
                   <Text style={styles.register}> Register</Text>
               </View>
            </View>
            
    );
  }
}

const styles = StyleSheet.create({
  box:{
    height:inputHeight,
    flex:1,
    borderRadius: inputBorderRadius,     
    borderColor:inputBorderColor,
    borderBottomWidth: 1,
    elevation: 1,
    backgroundColor: '#e9eaec',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },       

  register:{
    color:'#c9094c',
    textDecorationLine:'underline',
    fontSize: 19,
  }
});

