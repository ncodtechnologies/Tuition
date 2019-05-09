import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {headingColor} from '../../TAStyles/TAcolors';
import {headingFontSize} from '../../TAStyles/TAalignment';

export default class App extends React.Component {
  render() {
    return (
            <View>               
               <Text style={styles.heading} >{this.props.caption}</Text>              
            </View>                         
           );
      }
}

const styles = StyleSheet.create({
  heading:{
    color:headingColor,
    fontSize:headingFontSize,
  }
});


