import * as React from 'C:/Users/KANJA/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Text, View, StyleSheet,Dimensions,ScrollView } from 'react-native';
import { inputBorderColor } from './TAStyles/TAcolors';
import {inputBorderRadius} from './TAStyles/TAalignment';
import {inputHeight} from './TAStyles/TAalignment';
import {inputFontSize} from './TAStyles/TAalignment';
import TATextInput from './TAComponents/RoundedComponents/TextInput';
import TAPassword from './TAComponents/RoundedComponents/Password';
import TAHeading from './TAComponents/Heading/heading';
import TAPicker from './TAComponents/RoundedComponents/Picker';
import TAButton from './TAComponents/RoundedComponents/Button';
import TATriangleButton from './TAComponents/Other/triangleButton';


const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',padding:25,}} >
            <View style={{padding:10,alignItems:'center'}}>
                  <TAHeading caption="Register"/>
            </View>
            <View style={{padding:10,}}>
                  <TATriangleButton/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="Full Name"/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="Email"/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="PhoneNumber"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPassword/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Select State"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Language"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Class"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Syllabus"/>
           </View>
            <View style={{padding:10,}}>
                  <TAButton title="Register" />
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
