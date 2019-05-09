import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
    fontSize:20,
  }
});


