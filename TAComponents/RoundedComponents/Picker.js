import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import { inputBorderColor } from '../../TAStyles/TAcolors';
import { inputPlaceholderTextColor } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';

export default class TATextInput extends React.Component {
  render() {
    return (
            <View>
                  <TextInput placeholder={this.props._placeholder}   placeholderTextColor={inputPlaceholderTextColor}
                        style={styles.box} />
            </View>
    );
  }
}


const styles = StyleSheet.create({
  box:{
    height:inputHeight,
    borderRadius: inputBorderRadius, 
    fontSize: inputFontSize,
    borderColor:inputBorderColor,
    paddingLeft:30,    
    borderBottomWidth: 1,
    elevation: 1,
  },
});