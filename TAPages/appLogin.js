import * as React from 'react';
import { Text, View, StyleSheet,Dimensions,ScrollView } from 'react-native';
import { inputBorderColor } from './TAStyles/TAcolors';
import {inputBorderRadius} from './TAStyles/TAalignment';
import {inputHeight} from './TAStyles/TAalignment';
import {inputFontSize} from './TAStyles/TAalignment';
import TATextInput from './TAComponents/RoundedComponents/TextInput';
import TAHeading from './TAComponents/Heading/heading';
import TAButton from './TAComponents/RoundedComponents/Button';
import TATriangleButton from './TAComponents/Other/triangleButton';
import TAAshBtn1 from './TAComponents/RoundedComponents/ashBtn1';
import TAAshBtn2 from './TAComponents/RoundedComponents/ashBtn2';

export default class App extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',padding:25,}} >
            <View style={{padding:10,alignItems:'center'}}>
                  <TAHeading caption="Login"/>
            </View>
            <View style={{padding:10,}}>
                  <TATriangleButton/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="Mobile Number"/>
            </View>
            <View style={{padding:10,}}>
                  <TAButton title="Login" />
           </View>
           <View style={{padding:10,}}>
                  <TAAshBtn1/>
           </View>
           <View style={{padding:10,}}>
                  <TAAshBtn2/>
           </View>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    height:inputHeight,
    borderRadius: inputBorderRadius, 
    fontSize: inputFontSize,
    borderColor:inputBorderColor,
    paddingLeft:30,    
    borderBottomWidth: 1,
    elevation: 1,
    textAlign: 'center',
    flexDirection: "row",
  },
  
  box:{
    flex: 0.5,
    paddingLeft:20, 
  },

});
