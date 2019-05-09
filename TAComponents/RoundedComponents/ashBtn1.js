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
                <View  style={styles.box}>
                  <Text>G</Text>
                  <Text style={{ paddingLeft:20,fontSize: inputFontSize,}}>Sign in with google</Text>
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
    flexDirection:'row',
    shadowRadius: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#e9eaec',
  },
});

