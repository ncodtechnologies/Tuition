import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { inputBorderColor } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';

export default class TATextInput extends React.Component {
  render() {
    return (
            <TouchableOpacity style={styles.box}>
                  <Text style={{color:'white',fontSize: inputFontSize,}}> {this.props.title} </Text>
            </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  box:{
    height:inputHeight,
    borderRadius: inputBorderRadius, 
    borderColor:inputBorderColor,
    borderBottomWidth: 1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center',
  },
});