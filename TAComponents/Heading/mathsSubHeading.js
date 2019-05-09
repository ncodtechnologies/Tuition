import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
            <View> 
                <Text style={styles.title}>{this.props.subheading}</Text>             
            </View>                         
           );
      }
}

const styles = StyleSheet.create({
  title:{
    fontSize:16,
  }
  
});
